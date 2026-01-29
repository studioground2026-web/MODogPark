// --- 數據配置 ---
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhwbxXO_csTgywexe7vAw7Ic_6DRa8_HaN8AlW1-Q2E6p4G0LcVj3Noxtcli-Xk1Ep_AQuzOQtZbSV/pub?output=csv';

const i18n = {
    zh_hk: { list: "設施清單", timer: "倒計時器", filter_title: "搜尋場所類別", filter_all: "全部", filter_park: "遛狗區", filter_bin: "收集點", filter_kennel: "市政狗房", filter_private: "友善場所", nav_timer: "計時", nav_map: "地圖", nav_list: "清單", start: "開始", stop: "停止", reset: "重設", heat: "肉球危險", watch: "肉球注意", safe: "肉球安全", time_up: "夠時間放狗喇！🐾", hours: "開放時間" },
    pt: { list: "Lista de Instalações", timer: "Temporizador", filter_title: "Categorias de Busca", filter_all: "Tudo", filter_park: "Zonas de Cães", filter_bin: "Colectores", filter_kennel: "Canil Municipal", filter_private: "Amigo dos Cães", nav_timer: "Tempo", nav_map: "Mapa", nav_list: "Lista", start: "Iniciar", stop: "Parar", reset: "Reiniciar", heat: "PERIGO", watch: "Atenção", safe: "Seguro", time_up: "O tempo acabou! 🐾", hours: "Horário" },
    zh_cn: { list: "设施清单", timer: "计时器", filter_all: "全部", filter_park: "遛狗区", filter_bin: "狗粪收集点", filter_kennel: "市政狗房", filter_private: "友好场所", nav_timer: "计时", nav_map: "地图", nav_list: "清单", start: "开始", stop: "停止", reset: "重置", heat: "肉球危险", watch: "肉球注意", safe: "肉球安全", time_up: "放狗时间到！🐾", hours: "开放时间" },
    en: { list: "Facilities", timer: "Timer", filter_all: "All", filter_park: "Dog Parks", filter_bin: "Dog Feces Bins", filter_kennel: "Municipal Kennel", filter_private: "Dog Friendly Places", nav_timer: "Timer", nav_map: "Map", nav_list: "List", start: "Start", stop: "Stop", reset: "Reset", heat: "Danger", watch: "Warning", safe: "Safe", time_up: "Time is up! 🐾", hours: "Hours" }
};

let allData = [], userPos = null, currentLang = 'zh_hk', currentFilter = 'all';
let timeLeft = 0, timerInt = null, isCounting = false;

// 初始化地圖
const map = L.map('map', { zoomControl: false }).setView([22.1987, 113.5439], 14);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);
const markersLayer = L.layerGroup().addTo(map);

// --- 數據載入核心 ---
window.onload = () => {
    Papa.parse(csvUrl, {
        download: true, header: true, skipEmptyLines: true,
        complete: function(res) {
            allData = res.data.map(d => {
                let lat = 0, lng = 0;
                if(d.location && d.location.includes(',')) {
                    const p = d.location.split(',');
                    lat = parseFloat(p[0].trim()); lng = parseFloat(p[1].trim());
                }
                return { ...d, lat, lng };
            }).filter(i => !isNaN(i.lat) && i.lat !== 0);
            renderMarkers();
            renderListView();
        }
    });
    updateWeatherPill();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(p => {
            userPos = { lat: p.coords.latitude, lng: p.coords.longitude };
            L.circleMarker([userPos.lat, userPos.lng], { radius: 7, color: '#4285F4', fillOpacity: 1 }).addTo(map);
            renderListView();
        });
    }
};

// --- 多語言內容獲取 ---
function getL(item, prefix) {
    const map = { 'zh_hk': 'Zh', 'zh_cn': 'Cn', 'en': 'En', 'pt': 'Pt' };
    const suffix = map[currentLang] || 'Zh';
    return item[prefix + suffix] || item[prefix + 'Zh'] || "";
}

// --- 介面渲染 ---
function renderMarkers() {
    markersLayer.clearLayers();
    const filtered = currentFilter === 'all' ? allData : allData.filter(p => p.type === currentFilter);
    filtered.forEach(p => {
        L.marker([p.lat, p.lng]).addTo(markersLayer).on('click', () => showParkInfo(p));
    });
}

function renderListView() {
    const content = document.getElementById('park-list-content');
    content.innerHTML = '';
    let filtered = (currentFilter === 'all') ? allData : allData.filter(p => p.type === currentFilter);
    const sorted = filtered.map(p => ({
        ...p, dist: userPos ? getDist(userPos.lat, userPos.lng, p.lat, p.lng) : 999
    })).sort((a, b) => a.dist - b.dist);

    sorted.forEach(p => {
        const card = document.createElement('div');
        card.className = 'park-card';
        card.onclick = () => { map.setView([p.lat, p.lng], 17); showParkInfo(p); showMap(); };
        
        const hour = getL(p, 'openHour');
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <h4 style="margin:0; flex:1; font-size:17px; color:#333;">${getL(p, 'name')}</h4>
                <div class="dist-tag">${p.dist < 100 ? p.dist.toFixed(1) + 'km' : '-'}</div>
            </div>
            <p style="font-size:12px; color:#888; margin:4px 0;">📍 ${getL(p, 'address')}</p>
            ${hour ? `<p style="font-size:12px; color:#666; margin-top:5px;">⏰ ${i18n[currentLang].hours}: ${hour}</p>` : ''}
        `;
        content.appendChild(card);
    });
}

function showParkInfo(p) {
    const sheet = document.getElementById('bottom-sheet');
    const info = document.getElementById('park-info');
    const hour = getL(p, 'openHour');
    info.innerHTML = `
        <h3 style="margin:0; color:var(--brand-color);">${getL(p, 'name')}</h3>
        <p style="font-size:13px; color:#666; margin:10px 0;">📍 ${getL(p, 'address')}</p>
        ${hour ? `<p style="font-size:13px; color:#444;">⏰ ${hour}</p>` : ''}
        <button class="btn-nav" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}')">Go!</button>
    `;
    sheet.classList.remove('hidden');
}

// --- 頁面切換與過濾 ---
function showMap() { 
    document.getElementById('list-container').classList.add('list-hidden'); 
    document.getElementById('timer-container').classList.add('timer-hidden'); 
    setActiveNav('nav-map'); 
}
function toggleList() { 
    document.getElementById('list-container').classList.remove('list-hidden'); 
    renderListView(); 
    setActiveNav('nav-list'); 
}
function showTimer() { 
    document.getElementById('timer-container').classList.remove('timer-hidden'); 
    setActiveNav('nav-timer'); 
}
function setActiveNav(id) { 
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active')); 
    document.getElementById(id).classList.add('active'); 
}

function setFilter(type, btn) {
    currentFilter = type;
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-i18n="filter_${type}"]`).forEach(b => b.classList.add('active'));
    renderMarkers(); renderListView();
    document.getElementById('search-popup').classList.add('hidden');
}

function toggleSearch() { document.getElementById('search-popup').classList.toggle('hidden'); }

// --- 倒計時器邏輯 ---
function toggleTimer() {
    const btn = document.getElementById('timer-toggle-btn');
    if (timerInt) {
        clearInterval(timerInt); timerInt = null;
        btn.innerText = i18n[currentLang].start; btn.style.background = '#2ecc71';
    } else {
        if (!isCounting) timeLeft = parseInt(document.getElementById('timer-input').value) * 60;
        btn.innerText = i18n[currentLang].stop; btn.style.background = '#f39c12';
        isCounting = true;
        timerInt = setInterval(() => {
            timeLeft--; updateTimerDisplay();
            if (timeLeft <= 0) { clearInterval(timerInt); timerInt = null; isCounting = false; playAlarm(); }
        }, 1000);
    }
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').innerText = `${m}:${s}`;
}

function resetTimer() {
    clearInterval(timerInt); timerInt = null; isCounting = false;
    timeLeft = parseInt(document.getElementById('timer-input').value) * 60;
    updateTimerDisplay();
    document.getElementById('timer-toggle-btn').innerText = i18n[currentLang].start;
    document.getElementById('timer-toggle-btn').style.background = '#2ecc71';
}

function playAlarm() { document.getElementById('alarm-sound').play(); alert(i18n[currentLang].time_up); resetTimer(); }

// --- 其他工具 ---
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.innerText = i18n[lang][key];
    });
    renderListView(); updateWeatherPill(); map.closePopup();
}

function updateWeatherPill() {
    const temp = 31, pill = document.getElementById('paw-warning-pill');
    pill.style.backgroundColor = temp >= 32 ? '#e74c3c' : (temp >= 28 ? '#f39c12' : '#2ecc71');
    const msg = temp >= 32 ? i18n[currentLang].heat : (temp >= 28 ? i18n[currentLang].watch : i18n[currentLang].safe);
    pill.innerText = `🐾 ${msg} (${temp}°C)`;
}

function getDist(l1, n1, l2, n2) {
    const R = 6371; const dLat = (l2-l1)*Math.PI/180; const dLon = (n2-n1)*Math.PI/180;
    const a = Math.sin(dLat/2)**2 + Math.cos(l1*Math.PI/180)*Math.cos(l2*Math.PI/180)*Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

map.on('click', () => { document.getElementById('bottom-sheet').classList.add('hidden'); document.getElementById('search-popup').classList.add('hidden'); });