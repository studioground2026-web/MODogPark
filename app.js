const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhwbxXO_csTgywexe7vAw7Ic_6DRa8_HaN8AlW1-Q2E6p4G0LcVj3Noxtcli-Xk1Ep_AQuzOQtZbSV/pub?output=csv';

const i18n = {
    zh_hk: {
        list: '\u8a2d\u65bd\u6e05\u55ae',
        timer: '\u5012\u8a08\u6642\u5668',
        filter_title: '\u641c\u5c0b\u5834\u6240\u985e\u5225',
        filter_all: '\u5168\u90e8',
        filter_park: '\u904a\u72d7\u5340',
        filter_bin: '\u72d7\u7cde\u6536\u96c6\u9ede',
        filter_kennel: '\u5e02\u653f\u72d7\u623f',
        filter_private: '\u5bf5\u7269\u53cb\u5584\u5834\u6240',
        nav_timer: '\u8a08\u6642',
        nav_map: '\u5730\u5716',
        nav_list: '\u6e05\u55ae',
        nav_settings: '\u8a2d\u5b9a',
        start: '\u958b\u59cb',
        stop: '\u505c\u6b62',
        reset: '\u91cd\u8a2d',
        time_up: '\u6642\u9593\u5230\uff01',
        hours: '\u958b\u653e\u6642\u9593',
        nav_btn: '\u5c0e\u822a',
        nav_choose: '\u9078\u64c7\u5730\u5716\u5c0e\u822a',
        ex_title: '\u70ba\u4f55\u8981\u6bcf\u65e5\u653e\u72d7\uff1f',
        ex_desc: '\u898f\u5f8b\u904b\u52d5\u80fd\u6709\u6548\u9632\u6b62\u80a5\u80d6\uff0c\u4e26\u6539\u5584\u60c5\u7dd2\u7a69\u5b9a\u6027\u3002',
        ex_stat1: '\u6d88\u8017\u71b1\u91cf',
        ex_stat2: '\u95dc\u7bc0\u5065\u5eb7',
        ex_stat3: '\u5fc3\u7406\u6e1b\u58d3',
        disc_title: '\u8072\u660e\u53ca\u9cf4\u8b1d',
        disc_body: '\u672c\u61c9\u7528\u7a0b\u5f0f\u4e4b\u6578\u64da\u5747\u6e90\u81ea\u516c\u958b\u8cc7\u6599\uff0c\u50c5\u4f9b\u53c3\u8003\u3002\u5730\u5716\u7531 <a href="https://leafletjs.com/" target="_blank">Leaflet</a> \u63d0\u4f9b\u3002',
        contact_title: '\u806f\u7e6b\u6211\u5011',
        contact_body: '\u5982\u6709\u932f\u6f0f\u6216\u5efa\u8b70\uff0c\u6b61\u8fce\u900f\u904e Email \u806f\u7e6b\uff1astudioground2026@gmail.com',
        close: '\u95dc\u9589',
        settings: '\u8a2d\u5b9a',
        language: '\u8a9e\u8a00',
        dark_mode: '\u9ed1\u6697\u6a21\u5f0f'
    },
    zh_cn: {
        list: '\u8bbe\u65bd\u6e05\u5355',
        timer: '\u8ba1\u65f6\u5668',
        filter_title: '\u641c\u7d22\u573a\u6240\u7c7b\u522b',
        filter_all: '\u5168\u90e8',
        filter_park: '\u905b\u72d7\u533a',
        filter_bin: '\u72d7\u7caa\u6536\u96c6\u70b9',
        filter_kennel: '\u5e02\u653f\u72d7\u623f',
        filter_private: '\u5ba0\u7269\u53cb\u5584\u573a\u6240',
        nav_timer: '\u8ba1\u65f6',
        nav_map: '\u5730\u56fe',
        nav_list: '\u6e05\u5355',
        nav_settings: '\u8bbe\u7f6e',
        start: '\u5f00\u59cb',
        stop: '\u505c\u6b62',
        reset: '\u91cd\u7f6e',
        time_up: '\u65f6\u95f4\u5230\uff01',
        hours: '\u5f00\u653e\u65f6\u95f4',
        nav_btn: '\u5bfc\u822a',
        nav_choose: '\u9009\u62e9\u5730\u56fe\u5bfc\u822a',
        ex_title: '\u4e3a\u4ec0\u4e48\u8981\u6bcf\u65e5\u905b\u72d7\uff1f',
        ex_desc: '\u89c4\u5f8b\u8fd0\u52a8\u80fd\u6709\u6548\u9632\u6b62\u80a5\u80d6\uff0c\u5e76\u6539\u5584\u60c5\u7eea\u7a33\u5b9a\u6027\u3002',
        ex_stat1: '\u6d88\u8017\u70ed\u91cf',
        ex_stat2: '\u5173\u8282\u5065\u5eb7',
        ex_stat3: '\u5fc3\u7406\u51cf\u538b',
        disc_title: '\u58f0\u660e\u53ca\u9e23\u8c22',
        disc_body: '\u672c\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u6765\u81ea\u516c\u5f00\u8d44\u6599\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002\u5730\u56fe\u7531 <a href="https://leafletjs.com/" target="_blank">Leaflet</a> \u63d0\u4f9b\u3002',
        contact_title: '\u8054\u7cfb\u6211\u4eec',
        contact_body: '\u5982\u6709\u9519\u6f0f\u6216\u5efa\u8bae\uff0c\u6b22\u8fce\u901a\u8fc7 Email \u8054\u7cfb\uff1astudioground2026@gmail.com',
        close: '\u5173\u95ed',
        settings: '\u8bbe\u7f6e',
        language: '\u8bed\u8a00',
        dark_mode: '\u6df1\u8272\u6a21\u5f0f'
    },
    en: {
        list: 'Facilities List',
        timer: 'Timer',
        filter_title: 'Search Categories',
        filter_all: 'All',
        filter_park: 'Dog Parks',
        filter_bin: 'Dog Feces Bins',
        filter_kennel: 'Municipal Kennel',
        filter_private: 'Dog-friendly Locations',
        nav_timer: 'Timer',
        nav_map: 'Map',
        nav_list: 'List',
        nav_settings: 'Settings',
        start: 'Start',
        stop: 'Stop',
        reset: 'Reset',
        time_up: 'Time is up!',
        hours: 'Hours',
        nav_btn: 'Go',
        nav_choose: 'Choose Navigation',
        ex_title: 'Why walk daily?',
        ex_desc: 'Regular exercise helps keep dogs healthy and calm.',
        ex_stat1: 'Calories',
        ex_stat2: 'Joint Health',
        ex_stat3: 'Mental Relief',
        disc_title: 'Disclaimer & Credits',
        disc_body: 'All data is from public sources and for reference only. Map by <a href="https://leafletjs.com/" target="_blank">Leaflet</a>.',
        contact_title: 'Contact',
        contact_body: 'For suggestions, contact: studioground2026@gmail.com',
        close: 'Close',
        settings: 'Settings',
        language: 'Language',
        dark_mode: 'Dark Mode'
    },
    pt: {
        list: 'Lista de Instalacoes',
        timer: 'Temporizador',
        filter_title: 'Categorias',
        filter_all: 'Tudo',
        filter_park: 'Parques para Caes',
        filter_bin: 'Recipientes',
        filter_kennel: 'Canil Municipal',
        filter_private: 'Locais Pet-friendly',
        nav_timer: 'Tempo',
        nav_map: 'Mapa',
        nav_list: 'Lista',
        nav_settings: 'Definicoes',
        start: 'Iniciar',
        stop: 'Parar',
        reset: 'Reiniciar',
        time_up: 'Tempo esgotado!',
        hours: 'Horario',
        nav_btn: 'Ir',
        nav_choose: 'Escolher Navegacao',
        ex_title: 'Porque passear diariamente?',
        ex_desc: 'Exercicio regular ajuda a manter o cao saudavel.',
        ex_stat1: 'Calorias',
        ex_stat2: 'Articulacoes',
        ex_stat3: 'Alivio Mental',
        disc_title: 'Aviso e Creditos',
        disc_body: 'Dados de fontes publicas, apenas para referencia. Mapa por <a href="https://leafletjs.com/" target="_blank">Leaflet</a>.',
        contact_title: 'Contacto',
        contact_body: 'Sugestoes: studioground2026@gmail.com',
        close: 'Fechar',
        settings: 'Definicoes',
        language: 'Idioma',
        dark_mode: 'Modo Escuro'
    }
};

let allData = [];
let userPos = null;
let currentLang = localStorage.getItem('dwe_lang') || 'zh_hk';
let currentFilter = 'all';
let currentNavCoords = null;
let timeLeft = 0;
let timerInt = null;
let isCounting = false;
let isDarkMode = localStorage.getItem('dwe_theme') === 'dark';

const map = L.map('map', { zoomControl: false }).setView([22.1987, 113.5439], 14);
let currentTile = null;

function setMapTile() {
    const tileUrl = isDarkMode
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
    if (currentTile) map.removeLayer(currentTile);
    currentTile = L.tileLayer(tileUrl);
    currentTile.addTo(map);
}

setMapTile();
const markersLayer = L.layerGroup().addTo(map);

window.onload = () => {
    applyTheme(isDarkMode, false);

    const langSel = document.getElementById('settings-lang-switcher');
    if (langSel) langSel.value = currentLang;

    const themeToggle = document.getElementById('dark-mode-toggle');
    if (themeToggle) themeToggle.checked = isDarkMode;

    changeLanguage(currentLang);

    Papa.parse(csvUrl, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(res) {
            allData = res.data.map(d => {
                let lat = 0;
                let lng = 0;
                if (d.location && d.location.includes(',')) {
                    const p = d.location.split(',');
                    lat = parseFloat(p[0].trim());
                    lng = parseFloat(p[1].trim());
                }
                return { ...d, lat, lng };
            }).filter(i => !isNaN(i.lat) && i.lat !== 0);

            renderMarkers();
            renderListView();
            updateSettingsText();

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

function applyTheme(isDark, save = true) {
    isDarkMode = isDark;
    document.body.classList.toggle('dark-mode', isDarkMode);
    setMapTile();
    if (save) localStorage.setItem('dwe_theme', isDarkMode ? 'dark' : 'light');
}

function toggleDarkMode(enabled) {
    applyTheme(enabled, true);
}

function hideAllOverlays() {
    document.getElementById('search-popup').classList.add('hidden');
    document.getElementById('bottom-sheet').classList.add('hidden');
    document.getElementById('nav-selector').classList.add('hidden');
    map.closePopup();
}

function showMap() {
    hideAllOverlays();
    document.getElementById('list-container').classList.add('list-hidden');
    document.getElementById('timer-container').classList.add('timer-hidden');
    document.getElementById('settings-container').classList.add('settings-hidden');
    document.querySelector('.fab-search').classList.remove('hidden');
    setActiveNav('nav-map');
}

function toggleList() {
    hideAllOverlays();
    document.getElementById('list-container').classList.remove('list-hidden');
    document.getElementById('timer-container').classList.add('timer-hidden');
    document.getElementById('settings-container').classList.add('settings-hidden');
    document.querySelector('.fab-search').classList.add('hidden');
    renderListView();
    setActiveNav('nav-list');
}

function showTimer() {
    hideAllOverlays();
    document.getElementById('timer-container').classList.remove('timer-hidden');
    document.getElementById('list-container').classList.add('list-hidden');
    document.getElementById('settings-container').classList.add('settings-hidden');
    document.querySelector('.fab-search').classList.add('hidden');
    setActiveNav('nav-timer');
}

function showSettings() {
    hideAllOverlays();
    document.getElementById('settings-container').classList.remove('settings-hidden');
    document.getElementById('list-container').classList.add('list-hidden');
    document.getElementById('timer-container').classList.add('timer-hidden');
    document.querySelector('.fab-search').classList.add('hidden');
    setActiveNav('nav-settings');
}

function getL(item, prefix) {
    const mapL = { zh_hk: 'Zh', zh_cn: 'Cn', en: 'En', pt: 'Pt' };
    const suffix = mapL[currentLang] || 'Zh';
    return item[prefix + suffix] || item[prefix + 'Zh'] || '';
}

function renderMarkers() {
    markersLayer.clearLayers();
    const filtered = currentFilter === 'all' ? allData : allData.filter(p => p.type === currentFilter);
    filtered.forEach(p => L.marker([p.lat, p.lng]).addTo(markersLayer).on('click', () => showParkInfo(p)));
}

function renderListView() {
    const content = document.getElementById('park-list-content');
    content.innerHTML = '';

    const filtered = currentFilter === 'all' ? allData : allData.filter(p => p.type === currentFilter);
    const sorted = filtered
        .map(p => ({ ...p, dist: userPos ? getDist(userPos.lat, userPos.lng, p.lat, p.lng) : 999 }))
        .sort((a, b) => a.dist - b.dist);

    sorted.forEach(p => {
        const card = document.createElement('div');
        card.className = 'park-card';
        card.onclick = () => {
            showMap();
            map.setView([p.lat, p.lng], 17);
            showParkInfo(p);
        };

        const hour = getL(p, 'openHour');
        card.innerHTML =
            `<div style="display:flex; justify-content:space-between; align-items:start;">` +
            `<h4 style="margin:0; flex:1; font-size:17px; color:var(--text);">${getL(p, 'name')}</h4>` +
            `<div class="dist-tag">${p.dist < 100 ? p.dist.toFixed(1) + 'km' : '-'}</div>` +
            `</div>` +
            `<p style="font-size:12px; color:var(--muted); margin:4px 0;">${getL(p, 'address')}</p>` +
            `${hour ? `<p style="font-size:12px; color:var(--muted); margin-top:5px;">${i18n[currentLang].hours}: ${hour}</p>` : ''}`;

        content.appendChild(card);
    });
}

function showParkInfo(p) {
    const info = document.getElementById('park-info');
    const hour = getL(p, 'openHour');
    currentNavCoords = { lat: p.lat, lng: p.lng };

    info.innerHTML =
        `<h3 style="margin:0; color:var(--brand-color);">${getL(p, 'name')}</h3>` +
        `<p style="font-size:13px; color:var(--muted); margin:10px 0;">${getL(p, 'address')}</p>` +
        `${hour ? `<p style="font-size:13px; color:var(--text);">${hour}</p>` : ''}` +
        `<button class="btn-nav" onclick="goToDefaultMap()">${i18n[currentLang].nav_btn}</button>`;

    document.getElementById('bottom-sheet').classList.remove('hidden');
}

function closeNavSelector() {
    document.getElementById('nav-selector').classList.add('hidden');
}

function goToDefaultMap() {
    if (!currentNavCoords) return;

    const { lat, lng } = currentNavCoords;
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isAndroid) {
        window.location.href = `geo:0,0?q=${lat},${lng}`;
        return;
    }

    if (isIOS) {
        window.open(`https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`, '_blank');
        return;
    }

    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`, '_blank');
}

function goToMap() {
    goToDefaultMap();
    closeNavSelector();
}

function toggleSearch() {
    document.getElementById('search-popup').classList.toggle('hidden');
}

function setFilter(type) {
    currentFilter = type;
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-i18n="filter_${type}"]`).forEach(b => b.classList.add('active'));

    renderMarkers();
    renderListView();
    document.getElementById('search-popup').classList.add('hidden');

    const isListVisible = !document.getElementById('list-container').classList.contains('list-hidden');
    if (isListVisible || !userPos || allData.length === 0) return;

    const filtered = type === 'all' ? allData : allData.filter(p => p.type === type);
    if (filtered.length > 0) {
        const closest = filtered.reduce((prev, curr) =>
            getDist(userPos.lat, userPos.lng, prev.lat, prev.lng) < getDist(userPos.lat, userPos.lng, curr.lat, curr.lng) ? prev : curr
        );
        setTimeout(() => {
            map.setView([closest.lat, closest.lng], 16);
            showParkInfo(closest);
        }, 100);
    }
}

function updateSettingsText() {
    const disc = document.getElementById('settings-disc-body');
    const contact = document.getElementById('settings-contact-text');
    if (disc) disc.innerHTML = i18n[currentLang].disc_body;
    if (contact) contact.innerText = i18n[currentLang].contact_body;

    const title = document.getElementById('settings-title');
    const langLabel = document.getElementById('settings-lang-label');
    const themeLabel = document.getElementById('settings-theme-label');
    const navSettingsLabel = document.getElementById('nav-settings-label');

    if (title) title.innerText = i18n[currentLang].settings;
    if (langLabel) langLabel.innerText = i18n[currentLang].language;
    if (themeLabel) themeLabel.innerText = i18n[currentLang].dark_mode;
    if (navSettingsLabel) navSettingsLabel.innerText = i18n[currentLang].nav_settings;
}

function toggleTimer() {
    const btn = document.getElementById('timer-toggle-btn');
    if (timerInt) {
        clearInterval(timerInt);
        timerInt = null;
        btn.innerText = i18n[currentLang].start;
        btn.style.background = '#2ecc71';
        return;
    }

    if (!isCounting) timeLeft = parseInt(document.getElementById('timer-input').value, 10) * 60;
    if (isNaN(timeLeft) || timeLeft <= 0) return;

    btn.innerText = i18n[currentLang].stop;
    btn.style.background = '#f39c12';
    isCounting = true;

    timerInt = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInt);
            timerInt = null;
            isCounting = false;
            document.getElementById('alarm-sound').play();
            alert(i18n[currentLang].time_up);
            resetTimer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').innerText = `${m}:${s}`;
}

function resetTimer() {
    clearInterval(timerInt);
    timerInt = null;
    isCounting = false;
    timeLeft = parseInt(document.getElementById('timer-input').value, 10) * 60;
    updateTimerDisplay();
    document.getElementById('timer-toggle-btn').innerText = i18n[currentLang].start;
    document.getElementById('timer-toggle-btn').style.background = '#2ecc71';
}

function changeLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    localStorage.setItem('dwe_lang', lang);

    const sel = document.getElementById('settings-lang-switcher');
    if (sel && sel.value !== lang) sel.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });

    updateSettingsText();
    renderListView();
    map.closePopup();
}

function getDist(l1, n1, l2, n2) {
    const R = 6371;
    const dLat = (l2 - l1) * Math.PI / 180;
    const dLon = (n2 - n1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(l1 * Math.PI / 180) * Math.cos(l2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function setActiveNav(id) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

map.on('click', () => {
    document.getElementById('bottom-sheet').classList.add('hidden');
    document.getElementById('search-popup').classList.add('hidden');
});
