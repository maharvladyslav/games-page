const translations = {
    ru: {
        lang_code: "RU",
        lang_name: "Русский",
        main_title: "ГЛАВНАЯ",
        search_placeholder: "Поиск...",
        nav_home: "Главная",
        nav_library: "Библиотека",
        nav_cloud: "Облачный гейминг",
        nav_downloads: "Загрузки",
        nav_community: "Сообщество",
        nav_chat: "Чат",
        notifications: "Уведомления",
        appearance: "Внешний вид",
        settings: "Настройки",
        status_online: "Онлайн",
        chat_header: "ЧАТ",
        group_my_hubs: "МОИ ХАБЫ",
        group_zones: "ЗОНЫ",
        group_online: "ОНЛАЙН",
        zone_feed: "Лента",
        zone_general: "Общий",
        zone_drops: "Дропы",
        zone_squad: "Сквад",
        zone_help: "Помощь",
        chat_input_placeholder: "#общий..."
    },
    en: {
        lang_code: "GB",
        lang_name: "English",
        main_title: "HOME",
        search_placeholder: "Search...",
        nav_home: "Home",
        nav_library: "Library",
        nav_cloud: "Cloud Gaming",
        nav_downloads: "Downloads",
        nav_community: "Community",
        nav_chat: "Chat",
        notifications: "Notifications",
        appearance: "Appearance",
        settings: "Settings",
        status_online: "Online",
        chat_header: "CHAT",
        group_my_hubs: "MY HUBS",
        group_zones: "ZONES",
        group_online: "ONLINE",
        zone_feed: "Feed",
        zone_general: "General",
        zone_drops: "Drops",
        zone_squad: "Squad",
        zone_help: "Help",
        chat_input_placeholder: "#general..."
    },
    ua: {
        lang_code: "UA",
        lang_name: "Українська",
        main_title: "ГОЛОВНА",
        search_placeholder: "Пошук...",
        nav_home: "Головна",
        nav_library: "Бібліотека",
        nav_cloud: "Хмарний ґеймінг",
        nav_downloads: "Завантаження",
        nav_community: "Спільнота",
        nav_chat: "Чат",
        notifications: "Сповіщення",
        appearance: "Зовнішній вигляд",
        settings: "Налаштування",
        status_online: "Онлайн",
        chat_header: "ЧАТ",
        group_my_hubs: "МОЇ ХАБИ",
        group_zones: "ЗОНИ",
        group_online: "ОНЛАЙН",
        zone_feed: "Стрічка",
        zone_general: "Загальний",
        zone_drops: "Дропи",
        zone_squad: "Загін",
        zone_help: "Допомога",
        chat_input_placeholder: "#загальний..."
    }
};

function applyLanguage(lang) {
    if (!translations[lang]) return;

    // Перевод стандартных элементов с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    // Перевод инпутов с placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    // Обновляем плашку текущего языка внизу
    const codeEl = document.getElementById('current-lang-code');
    if (codeEl) codeEl.textContent = translations[lang].lang_code;

    // Подсвечиваем активный элемент меню и галочку
    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    localStorage.setItem('site_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'ru';
    applyLanguage(savedLang);

    const btn = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-dropdown-menu');

    // Открытие/закрытие списка при клике на кнопку
    btn?.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });

    // Клик по пункту выбора языка
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            applyLanguage(selectedLang);
            menu.classList.remove('show');
        });
    });

    // Закрываем выпадающий список при клике вне его
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});