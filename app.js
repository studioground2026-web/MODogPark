// --- 配置與語系 ---
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhwbxXO_csTgywexe7vAw7Ic_6DRa8_HaN8AlW1-Q2E6p4G0LcVj3Noxtcli-Xk1Ep_AQuzOQtZbSV/pub?output=csv';

const i18n = {
    zh_hk: { 
        list: "設施清單", timer: "倒計時器", filter_title: "搜尋場所類別", filter_all: "全部", filter_park: "遛狗區", filter_bin: "狗糞收集點", filter_kennel: "市政狗房", filter_private: "寵物友善場所", 
        nav_timer: "計時", nav_map: "地圖", nav_list: "清單", start: "開始", stop: "停止", reset: "重設", time_up: "時間到！放狗結束 🐾", hours: "開放時間", nav_btn: "導航", nav_choose: "選擇地圖導航",
        ex_title: "🐾 為何要每日放狗？", ex_desc: "規律運動能有效防止狗狗體重超標，改善情緒穩定性，減少焦慮行為。建議成犬每日運動至少 30-60 分鐘。", ex_stat1: "消耗熱量", ex_stat2: "關節健康", ex_stat3: "心理減壓",
        disc_title: "聲明及鳴謝",
        disc_body: "本應用程式之數據均源自<b>中華人民共和國澳門特別行政區政府</b>公開資料及其他第三方公開來源。數據僅供參考，場所之開放狀態可能隨時變動，數據更新未必能即時同步。開發者已盡力確保資訊準確，惟不保證其完整性、即時性或準確性。開發者對於因使用本程式資訊而引致的任何損失、錯誤或遺漏，概不承擔任何法律責任。用戶須自行承擔風險。地圖由 <a href='https://leafletjs.com/' target='_blank'>Leaflet</a> 提供。本聲明內容以繁體中文版本為準。",
        contact_title: "聯繫我們", contact_body: "如有錯漏或建議，歡迎透過 Email 聯繫：studioground2026@gmail.com", close: "關閉"
    },
    zh_cn: { 
        list: "设施清单", timer: "计时器", filter_title: "搜索场所类别", filter_all: "全部", filter_park: "遛狗区", filter_bin: "狗粪收集点", filter_kennel: "市政狗房", filter_private: "宠物友好场所", 
        nav_timer: "计时", nav_map: "地图", nav_list: "清单", start: "开始", stop: "停止", reset: "重置", time_up: "时间到！溜狗结束 🐾", hours: "开放时间", nav_btn: "导航", nav_choose: "选择地图导航",
        ex_title: "🐾 为什么要每日溜狗？", ex_desc: "规律運動能有效防止狗狗体重超标，改善情绪稳定性，减少焦虑行為。建议成犬每日运动至少 30-60 分钟。", ex_stat1: "消耗热量", ex_stat2: "关节健康", ex_stat3: "心理减压",
        disc_title: "声明及鸣谢",
        disc_body: "本应用程序的数据均源自<b>中华人民共和国澳门特别行政区政府</b>公开资料及其他第三方公开来源。数据仅供参考，场所之开放状态可能随时变动，数据更新未必能即時同步。开发者已尽力确保信息准确，但不保证其完整性、及时性 or 准确性。对于因使用本程序信息而引致的任何损失、错误 or 遗漏，概不承担法律责任。地图由 <a href='https://leafletjs.com/' target='_blank'>Leaflet</a> 提供。本声明内容以繁体中文版本为准。",
        contact_title: "联系我们", contact_body: "如有错漏或建议，欢迎透過 Email 联系：studioground2026@gmail.com", close: "关闭"
    },
    en: { 
        list: "Facilities List", timer: "Timer", filter_title: "Search Categories", filter_all: "All", filter_park: "Dog Parks", filter_bin: "Dog Feces Bins", filter_kennel: "Municipal Kennel", filter_private: "Dog-friendly Locations", 
        nav_timer: "Timer", nav_map: "Map", nav_list: "List", start: "Start", stop: "Stop", reset: "Reset", time_up: "Time is up! 🐾", hours: "Hours", nav_btn: "Go", nav_choose: "Choose Navigation",
        ex_title: "🐾 Why walk daily?", ex_desc: "Regular exercise prevents obesity and improves emotional stability. Recommended 30-60 mins daily for adult dogs.", ex_stat1: "Calories", ex_stat2: "Joint Health", ex_stat3: "Mental Relief",
        disc_title: "Disclaimer & Credits",
        disc_body: "All data is sourced from the <b>Macao SAR Government of the People's Republic of China</b> public data. Data is for reference only; status of facilities may change, and updates may not be instantaneous. The developer is not liable for any errors or damages. Map by <a href='https://leafletjs.com/' target='_blank'>Leaflet</a>. The Traditional Chinese version shall prevail.",
        contact_title: "Contact", contact_body: "For suggestions, please reach us via Email: studioground2026@gmail.com", close: "Close"
    },
    pt: { 
        list: "Lista de Instalações", timer: "Temporizador", filter_title: "Categorias", filter_all: "Tudo", filter_park: "Zonas de Cães", filter_bin: "Colectores", filter_kennel: "Canil Municipal", filter_private: "Amigo dos Cães", 
        nav_timer: "Tempo", nav_map: "Mapa", nav_list: "Lista", start: "Iniciar", stop: "Parar", reset: "Reiniciar", time_up: "O tempo acabou! 🐾", hours: "Horário", nav_btn: "Ir", nav_choose: "Escolher Navegação",
        ex_title: "🐾 Porquê passear o cão?", ex_desc: "O exercício regular previne o excesso de peso e melhora a estabilidade emocional. Recomenda-se 30-60 min por dia.", ex_stat1: "Calorias", ex_stat2: "Articulações", ex_stat3: "Anti-stress",
        disc_title: "Exoneração e Agradecimentos",
        disc_body: "Todos os dados são provenientes do <b>Governo da Região Administrativa Especial de Macau da República Popular da China</b>. Os dados são apenas para referência. O programador não assume responsabilidade por erros. Tecnologia por <a href='https://leafletjs.com/' target='_blank'>Leaflet</a>. <b>A versão em português é gerada por computador. O programador reconhece profundamente o estatuto do português como língua oficial na Região Administrativa Especial de Macau da República Popular da China. Pedimos desculpa por eventuais erros de tradução.</b> Em caso de discrepância, prevalecerá a versão em chinês tradicional.",
        contact_title: "Contacto", contact_body: "Para sugestões, contacte-nos por Email: studioground2026@gmail.com", close: "Fechar"
    }
};

let allData = [], userPos = null, currentLang = 'zh_hk', currentFilter = 'all';
let timeLeft = 0, timerInt = null, isCounting = false;
let currentNavCoords = null; // 修復：用於儲存當前點選的地點座標

const map = L.map('map', { zoomControl: false }).setView([22.1987, 113.5439], 14);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);
const markersLayer = L.layerGroup().addTo(map);

// --- 初始化 ---
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
            updateDisclaimerText();

            setTimeout(() => {
                document.getElementById('search-popup').classList.remove('hidden');
            }, 500);
        }
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(p => {
            userPos = { lat: p.coords.latitude, lng: p.coords.longitude };
            L.circleMarker([userPos.lat, userPos.lng], { radius: 7, color: '#4285F4', fillOpacity: 1 }).addTo(map);
            renderListView();
        });
    }
};

function hideAllOverlays() {
    document.getElementById('search-popup').classList.add('hidden');
    document.getElementById('bottom-sheet').classList.add('hidden');
    document.getElementById('nav-selector').classList.add('hidden'); // 修復：切換頁面時隱藏導航選擇
    map.closePopup();
}

function showMap() { 
    hideAllOverlays(); 
    document.getElementById('list-container').classList.add('list-hidden'); 
    document.getElementById('timer-container').classList.add('timer-hidden'); 
    document.querySelector('.fab-search').classList.remove('hidden');
    setActiveNav('nav-map'); 
}

function toggleList() { 
    hideAllOverlays(); 
    document.getElementById('list-container').classList.remove('list-hidden'); 
    document.getElementById('timer-container').classList.add('timer-hidden'); 
    document.querySelector('.fab-search').classList.add('hidden');
    renderListView(); 
    setActiveNav('nav-list'); 
}

function showTimer() { 
    hideAllOverlays(); 
    document.getElementById('timer-container').classList.remove('timer-hidden'); 
    document.getElementById('list-container').classList.add('list-hidden'); 
    document.querySelector('.fab-search').classList.add('hidden');
    setActiveNav('nav-timer'); 
}

function getL(item, prefix) {
    const mapL = { 'zh_hk': 'Zh', 'zh_cn': 'Cn', 'en': 'En', 'pt': 'Pt' };
    const suffix = mapL[currentLang] || 'Zh';
    return item[prefix + suffix] || item[prefix + 'Zh'] || "";
}

function renderMarkers() {
    markersLayer.clearLayers();
    const filtered = currentFilter === 'all' ? allData : allData.filter(p => p.type === currentFilter);
    filtered.forEach(p => { L.marker([p.lat, p.lng]).addTo(markersLayer).on('click', () => showParkInfo(p)); });
}

function renderListView() {
    const content = document.getElementById('park-list-content');
    content.innerHTML = '';
    let filtered = (currentFilter === 'all') ? allData : allData.filter(p => p.type === currentFilter);
    const sorted = filtered.map(p => ({ ...p, dist: userPos ? getDist(userPos.lat, userPos.lng, p.lat, p.lng) : 999 })).sort((a, b) => a.dist - b.dist);
    sorted.forEach(p => {
        const card = document.createElement('div');
        card.className = 'park-card';
        card.onclick = () => { 
            showMap(); 
            map.setView([p.lat, p.lng], 17); 
            showParkInfo(p); 
        };
        const hour = getL(p, 'openHour');
        card.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:start;"><h4 style="margin:0; flex:1; font-size:17px; color:#333;">${getL(p, 'name')}</h4><div class="dist-tag">${p.dist < 100 ? p.dist.toFixed(1) + 'km' : '-'}</div></div><p style="font-size:12px; color:#888; margin:4px 0;">📍 ${getL(p, 'address')}</p>${hour ? `<p style="font-size:12px; color:#666; margin-top:5px;">⏰ ${i18n[currentLang].hours}: ${hour}</p>` : ''}`;
        content.appendChild(card);
    });
}

function showParkInfo(p) {
    const info = document.getElementById('park-info');
    const hour = getL(p, 'openHour');
    currentNavCoords = { lat: p.lat, lng: p.lng }; // 修復：紀錄當前目標座標
    info.innerHTML = `
        <h3 style="margin:0; color:var(--brand-color);">${getL(p, 'name')}</h3>
        <p style="font-size:13px; color:#666; margin:10px 0;">📍 ${getL(p, 'address')}</p>
        ${hour ? `<p style="font-size:13px; color:#444;">⏰ ${hour}</p>` : ''}
        <button class="btn-nav" onclick="openNavSelector()">${i18n[currentLang].nav_btn}</button>
    `;
    document.getElementById('bottom-sheet').classList.remove('hidden');
}

// --- 修復：導航選擇器邏輯 ---
function openNavSelector() {
    document.getElementById('nav-selector').classList.remove('hidden');
}

function closeNavSelector() {
    document.getElementById('nav-selector').classList.add('hidden');
}

function goToMap(type) {
    if (!currentNavCoords) return;
    const { lat, lng } = currentNavCoords;
    let url = "";

    switch(type) {
        case 'google':
            url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
            break;
        case 'apple':
            url = `https://maps.apple.com/?q=${lat},${lng}`;
            break;
        case 'amap':
            url = `https://uri.amap.com/marker?position=${lng},${lat}`; // 修復：高德座標是 lng,lat
            break;
    }
    
    if (url) {
        window.open(url, '_blank');
        closeNavSelector();
    }
}

function toggleSearch() { document.getElementById('search-popup').classList.toggle('hidden'); }
function setFilter(type, btn) {
    currentFilter = type;
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-i18n="filter_${type}"]`).forEach(b => b.classList.add('active'));
    renderMarkers(); renderListView(); document.getElementById('search-popup').classList.add('hidden');
    const isListVisible = !document.getElementById('list-container').classList.contains('list-hidden');
    if (isListVisible || !userPos || allData.length === 0) return;
    let filtered = (type === 'all') ? allData : allData.filter(p => p.type === type);
    if (filtered.length > 0) {
        let closest = filtered.reduce((prev, curr) => (getDist(userPos.lat, userPos.lng, prev.lat, prev.lng) < getDist(userPos.lat, userPos.lng, curr.lat, curr.lng)) ? prev : curr);
        setTimeout(() => { map.setView([closest.lat, closest.lng], 16); showParkInfo(closest); }, 100);
    }
}

function toggleDisclaimer() { document.getElementById('disclaimer-modal').classList.toggle('hidden'); if (!document.getElementById('disclaimer-modal').classList.contains('hidden')) updateDisclaimerText(); }
function updateDisclaimerText() { document.getElementById('disc-body').innerHTML = i18n[currentLang].disc_body; document.getElementById('contact-text').innerText = i18n[currentLang].contact_body; }

function toggleTimer() {
    const btn = document.getElementById('timer-toggle-btn');
    if (timerInt) { clearInterval(timerInt); timerInt = null; btn.innerText = i18n[currentLang].start; btn.style.background = '#2ecc71'; }
    else {
        if (!isCounting) timeLeft = parseInt(document.getElementById('timer-input').value) * 60;
        if (isNaN(timeLeft) || timeLeft <= 0) return;
        btn.innerText = i18n[currentLang].stop; btn.style.background = '#f39c12'; isCounting = true;
        timerInt = setInterval(() => { timeLeft--; updateTimerDisplay(); if (timeLeft <= 0) { clearInterval(timerInt); timerInt = null; isCounting = false; document.getElementById('alarm-sound').play(); alert(i18n[currentLang].time_up); resetTimer(); } }, 1000);
    }
}
function updateTimerDisplay() { const m = Math.floor(timeLeft/60).toString().padStart(2,'0'); const s = (timeLeft%60).toString().padStart(2,'0'); document.getElementById('timer-display').innerText = `${m}:${s}`; }
function resetTimer() { clearInterval(timerInt); timerInt = null; isCounting = false; timeLeft = parseInt(document.getElementById('timer-input').value) * 60; updateTimerDisplay(); document.getElementById('timer-toggle-btn').innerText = i18n[currentLang].start; document.getElementById('timer-toggle-btn').style.background = '#2ecc71'; }

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.innerHTML = (key === 'disc_body' || key === 'nav_choose') ? i18n[lang][key] : i18n[lang][key];
    });
    updateDisclaimerText(); renderListView(); map.closePopup();
}

function getDist(l1, n1, l2, n2) { const R = 6371; const dLat = (l2-l1)*Math.PI/180; const dLon = (n2-n1)*Math.PI/180; const a = Math.sin(dLat/2)**2 + Math.cos(l1*Math.PI/180)*Math.cos(l2*Math.PI/180)*Math.sin(dLon/2)**2; return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); }
function setActiveNav(id) { document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active')); document.getElementById(id).classList.add('active'); }
map.on('click', () => { document.getElementById('bottom-sheet').classList.add('hidden'); document.getElementById('search-popup').classList.add('hidden'); });
