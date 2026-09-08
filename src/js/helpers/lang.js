const translations = {
    ru: {
        lang_code: "RU",
        lang_name: "Русский",
        page_library: "БИБЛИОТЕКА",
        search_placeholder: "Поиск...",
        search_games_placeholder: "Поиск игр...",
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
        subnav_header_library: "БИБЛИОТЕКА",
        lib_all_games: "Все игры",
        lib_in_progress: "В процессе",
        lib_completed: "Завершённые",
        subnav_header_categories: "КАТЕГОРИИ",
        subnav_header_platform: "ПЛАТФОРМА",
        cat_adventure: "Приключения",
        cat_building: "Строительство",
        cat_coop: "Кооператив",
        cat_competitive: "Соревновательные",
        cat_crime: "Криминал",
        cat_fantasy: "Фэнтези",
        cat_indie: "Инди",
        cat_multiplayer: "Мультиплеер",
        cat_mythology: "Мифология",
        cat_narrative: "Сюжетные",
        cat_open_world: "Открытый мир",
        cat_platformer: "Платформер",
        cat_sandbox: "Песочница",
        cat_shooter: "Шутер",
        cat_simulation: "Симулятор",
        cat_sports: "Спорт",
        cat_stealth: "Стелс",
        cat_strategy: "Стратегия",
        cat_survival: "Выживание",
        cat_survival_horror: "Survival Horror",
        cat_thriller: "Триллер",
        cat_turn_based: "Пошаговые",
        stats_games: "Игры",
        stats_total_hours: "Всего часов",
        stats_hours_val: "2.7k ч"
    },
    en: {
        lang_code: "GB",
        lang_name: "English",
        page_library: "LIBRARY",
        search_placeholder: "Search...",
        search_games_placeholder: "Search games...",
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
        subnav_header_library: "LIBRARY",
        lib_all_games: "All Games",
        lib_in_progress: "In Progress",
        lib_completed: "Completed",
        subnav_header_categories: "CATEGORIES",
        subnav_header_platform: "PLATFORM",
        cat_adventure: "Adventure",
        cat_building: "Building",
        cat_coop: "Co-op",
        cat_competitive: "Competitive",
        cat_crime: "Crime",
        cat_fantasy: "Fantasy",
        cat_indie: "Indie",
        cat_multiplayer: "Multiplayer",
        cat_mythology: "Mythology",
        cat_narrative: "Narrative",
        cat_open_world: "Open World",
        cat_platformer: "Platformer",
        cat_sandbox: "Sandbox",
        cat_shooter: "Shooter",
        cat_simulation: "Simulation",
        cat_sports: "Sports",
        cat_stealth: "Stealth",
        cat_strategy: "Strategy",
        cat_survival: "Survival",
        cat_survival_horror: "Survival Horror",
        cat_thriller: "Thriller",
        cat_turn_based: "Turn-Based",
        stats_games: "Games",
        stats_total_hours: "Total Hours",
        stats_hours_val: "2.7k h"
    },
    ua: {
        lang_code: "UA",
        lang_name: "Українська",
        page_library: "БІБЛІОТЕКА",
        search_placeholder: "Пошук...",
        search_games_placeholder: "Пошук ігор...",
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
        subnav_header_library: "БІБЛІОТЕКА",
        lib_all_games: "Усі ігри",
        lib_in_progress: "У процесі",
        lib_completed: "Завершені",
        subnav_header_categories: "КАСТЕГОРІЇ",
        subnav_header_platform: "ПЛАТФОРМА",
        cat_adventure: "Пригоди",
        cat_building: "Будівництво",
        cat_coop: "Кооператив",
        cat_competitive: "Змагальні",
        cat_crime: "Кримінал",
        cat_fantasy: "Фентезі",
        cat_indie: "Інді",
        cat_multiplayer: "Мультиплеєр",
        cat_mythology: "Міфологія",
        cat_narrative: "Сюжетні",
        cat_open_world: "Відкритий світ",
        cat_platformer: "Платформер",
        cat_sandbox: "Песочница",
        cat_shooter: "Шутер",
        cat_simulation: "Симулятор",
        cat_sports: "Спорт",
        cat_stealth: "Стелс",
        cat_strategy: "Стратегія",
        cat_survival: "Виживання",
        cat_survival_horror: "Survival Horror",
        cat_thriller: "Трилер",
        cat_turn_based: "Покрокові",
        stats_games: "Ігри",
        stats_total_hours: "Усього годин",
        stats_hours_val: "2.7k год"
    }
};

function applyLanguage(lang) {
    if (!translations[lang]) return;

    // Перевод текстов
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    // Перевод плейсхолдеров
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    // Обновление кнопки выборки
    const codeEl = document.getElementById('current-lang-code');
    const nameEl = document.getElementById('current-lang-name');
    if (codeEl) codeEl.textContent = translations[lang].lang_code;
    if (nameEl) nameEl.textContent = translations[lang].lang_name;

    // Активный пункт списка
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('site_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'ru';
    applyLanguage(savedLang);

    // Выпадающий список перевода
    const btn = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-dropdown-menu');

    btn?.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            applyLanguage(selectedLang);
            menu.classList.remove('show');
        });
    });

    document.addEventListener('click', (e) => {
        if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('show');
        }
    });

    // Сворачивание списков (Аккордеон)
    const toggleButtons = document.querySelectorAll('.subnav-header.toggle-btn');
    toggleButtons.forEach(header => {
        header.addEventListener('click', () => {
            const group = header.closest('.collapsible');
            group.classList.toggle('open');
        });
    });

    // Подсветка кликнутых категорий и платформ
    const allSubnavBtns = document.querySelectorAll('.subnav-btn');
    allSubnavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            allSubnavBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const btnList = document.getElementById('viewList');
    const btnGrid = document.getElementById('viewGrid');

    if (btnList && btnGrid) {
        btnList.addEventListener('click', () => {
            btnList.classList.add('active');
            btnGrid.classList.remove('active');
        });

        btnGrid.addEventListener('click', () => {
            btnGrid.classList.add('active');
            btnList.classList.remove('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.sort-dropdown-wrapper');
    const btn = document.getElementById('sortDropdownBtn');
    const menu = document.getElementById('sortDropdownMenu');
    const titleSpan = document.getElementById('currentSortTitle');
    const options = menu.querySelectorAll('.sort-option');

    if (wrapper && btn) {
        // Открытие / закрытие по клику на кнопку
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.classList.toggle('open');
        });

        // Выбор элемента
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                titleSpan.textContent = option.textContent;
                wrapper.classList.remove('open');
            });
        });

        // Закрытие при клике в любую другую область экрана
        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                wrapper.classList.remove('open');
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const appearanceBtn = document.getElementById('appearanceBtn');
    const themePanel = document.getElementById('themePanel');
    const closeThemePanel = document.getElementById('closeThemePanel');
    const themeCards = document.querySelectorAll('.theme-card');
    const resetThemeBtn = document.getElementById('resetThemeBtn');

    // 1. Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('nexora-theme') || 'nexora';
    applyTheme(savedTheme);

    // 2. Открытие / Закрытие панели
    if (appearanceBtn) {
        appearanceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            themePanel.classList.add('open');
        });
    }

    if (closeThemePanel) {
        closeThemePanel.addEventListener('click', () => {
            themePanel.classList.remove('open');
        });
    }

    // 3. Выбор темы
    themeCards.forEach(card => {
        card.addEventListener('click', () => {
            const themeName = card.getAttribute('data-theme');
            applyTheme(themeName);
        });
    });

    // 4. Сброс темы
    if (resetThemeBtn) {
        resetThemeBtn.addEventListener('click', () => {
            applyTheme('nexora');
        });
    }

    // Функция применения темы
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('nexora-theme', theme);

        themeCards.forEach(card => {
            if (card.getAttribute('data-theme') === theme) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }
});

visualSidebar.classList.toggle('active'); // или classList.remove('open')

