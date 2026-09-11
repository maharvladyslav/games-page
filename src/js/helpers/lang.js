// src/js/helpers/lang.js
export function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('nexora-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    const codeEl = document.getElementById('current-lang-code');
    const nameEl = document.getElementById('current-lang-name');
    if (codeEl) codeEl.textContent = translations[lang].lang_code;
    if (nameEl) nameEl.textContent = translations[lang].lang_name;

    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('lang-dropdown-btn');
    const dropdownMenu = document.getElementById('lang-dropdown-menu');

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });

        dropdownMenu.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                setLanguage(lang);
                dropdownMenu.classList.remove('show');
            });
        });
    }

    const savedLang = localStorage.getItem('nexora-lang') || 'ru';
    setLanguage(savedLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const effectsGrid = document.getElementById('effectsGrid');
    if (!effectsGrid) return;

    // Создаем контейнер для частиц на фоне, если его еще нет
    let fxLayer = document.getElementById('dynamic-fx-layer');
    if (!fxLayer) {
        fxLayer = document.createElement('div');
        fxLayer.id = 'dynamic-fx-layer';
        fxLayer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;overflow:hidden;';
        document.body.prepend(fxLayer);
    }

    const cards = effectsGrid.querySelectorAll('.effect-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const effectType = card.getAttribute('data-effect');
            runParticles(effectType, fxLayer);
        });
    });
});

function runParticles(type, layer) {
    layer.innerHTML = '';

    if (type === 'none') return;

    const count = 35;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = `fx-particle particle-${type}`;

        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `-20px`;
        
        const duration = Math.random() * 3 + 3; // от 3 до 6 сек
        const delay = Math.random() * 5;
        const size = Math.random() * 6 + 4; // от 4 до 10px

        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;

        if (type === 'matrix') {
            const chars = '01ABCXYZアイウエオカキクケコ';
            p.textContent = chars[Math.floor(Math.random() * chars.length)];
            p.style.fontSize = `${size + 4}px`;
        } else {
            p.style.width = `${size}px`;
            p.style.height = `${type === 'meteors' ? size * 4 : size}px`;
        }

        layer.appendChild(p);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const effectsGrid = document.getElementById('effectsGrid');
    if (!effectsGrid) return;

    // Гарантированно создаем слой и вешаем его в самый верх body (чтобы был под всем контентом)
    let fxLayer = document.getElementById('dynamic-fx-layer');
    if (!fxLayer) {
        fxLayer = document.createElement('div');
        fxLayer.id = 'dynamic-fx-layer';
        document.body.insertBefore(fxLayer, document.body.firstChild);
    }

    const cards = effectsGrid.querySelectorAll('.effect-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const effectType = card.getAttribute('data-effect');
            runParticles(effectType, fxLayer);
        });
    });
});

function runParticles(type, layer) {
    layer.innerHTML = '';

    if (type === 'none') return;

    const count = 40;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = `fx-particle particle-${type}`;

        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `-50px`;
        
        const duration = Math.random() * 3 + 2; 
        const delay = Math.random() * 4;
        const size = Math.random() * 8 + 6; // Сделали элементы крупнее (от 6 до 14px)

        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;

        if (type === 'matrix') {
            const chars = '01ABCXYZアイウエオ';
            p.textContent = chars[Math.floor(Math.random() * chars.length)];
            p.style.fontSize = `${size + 6}px`;
        } else {
            p.style.width = `${size}px`;
            p.style.height = `${type === 'meteors' ? size * 5 : size}px`;
        }

        layer.appendChild(p);
    }
}

// src/js/helpers/lang.js

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
        stats_hours_val: "2.7k ч",
        sort_title: "Название",
        main_title: "ГЛАВНАЯ",
        chat_header: "ЧАТ",
        group_my_hubs: "МОИ ХАБЫ",
        group_zones: "ЗОНЫ",
        zone_feed: "Лента",
        zone_general: "Общий",
        zone_drops: "Дропы",
        zone_squad: "Сквад",
        zone_help: "Помощь",
        group_online: "ОНЛАЙН",
        chat_input_placeholder: "#общий...",
        page_profile: "ПРОФИЛЬ",
        profile_playing: "🎮 Играет в Elden Ring",
        profile_location: "📍 Украина • С 2018",
        btn_edit: "Редактировать",
        profile_bio: "Гейминг — это жизнь 🎮 Люблю RPG и Souls-like игры. Всегда ищу новые приключения в виртуальных мирах.",
        stats_hours: "Часы",
        stats_friends: "Друзья",
        stats_achievements: "Достижения",
        sec_showcase: "⭐ ВИТРИНА ИГР",
        sec_recent: "🎮 НЕДАВНИЕ",
        hours_minecraft: "500 ч",
        hours_cs2: "300 ч",
        hours_witcher: "200 ч",
        hours_rdr2: "180 ч",
        sec_achievements: "🏆 ДОСТИЖЕНИЯ",
        ach_collector: "Коллекционер",
        ach_addict: "Заядлый",
        ach_critic: "Критик",
        ach_sociable: "Общительный",
        ach_veteran: "Ветеран",
        ach_reliable: "Надёжный",
        sec_friends: "👥 ДРУЗЬЯ"
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
        stats_hours_val: "2.7k h",
        sort_title: "Title",
        main_title: "HOME",
        chat_header: "CHAT",
        group_my_hubs: "MY HUBS",
        group_zones: "ZONES",
        zone_feed: "Feed",
        zone_general: "General",
        zone_drops: "Drops",
        zone_squad: "Squad",
        zone_help: "Help",
        group_online: "ONLINE",
        chat_input_placeholder: "#general...",
        page_profile: "PROFILE",
        profile_playing: "🎮 Playing Elden Ring",
        profile_location: "📍 Ukraine • Since 2018",
        btn_edit: "Edit",
        profile_bio: "Gaming is life 🎮 I love RPG and Souls-like games. Always looking for new adventures in virtual worlds.",
        stats_hours: "Hours",
        stats_friends: "Friends",
        stats_achievements: "Achievements",
        sec_showcase: "⭐ GAME SHOWCASE",
        sec_recent: "🎮 RECENT",
        hours_minecraft: "500 h",
        hours_cs2: "300 h",
        hours_witcher: "200 h",
        hours_rdr2: "180 h",
        sec_achievements: "🏆 ACHIEVEMENTS",
        ach_collector: "Collector",
        ach_addict: "Hardcore",
        ach_critic: "Critic",
        ach_sociable: "Sociable",
        ach_veteran: "Veteran",
        ach_reliable: "Reliable",
        sec_friends: "👥 FRIENDS"
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
        subnav_header_categories: "КАТЕГОРІЇ",
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
        cat_sandbox: "Пісочниця",
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
        stats_hours_val: "2.7k год",
        sort_title: "Назва",
        main_title: "ГОЛОВНА",
        chat_header: "ЧАТ",
        group_my_hubs: "МОЇ ХАБИ",
        group_zones: "ЗОНИ",
        zone_feed: "Лента",
        zone_general: "Загальний",
        zone_drops: "Дропи",
        zone_squad: "Сквад",
        zone_help: "Допомога",
        group_online: "ОНЛАЙН",
        chat_input_placeholder: "#загальний...",
        page_profile: "ПРОФІЛЬ",
        profile_playing: "🎮 Грає в Elden Ring",
        profile_location: "📍 Україна • З 2018",
        btn_edit: "Редагувати",
        profile_bio: "Ґеймінг — це життя 🎮 Люблю RPG та Souls-like ігри. Завжди шукаю нові пригоди у віртуальних світах.",
        stats_hours: "Години",
        stats_friends: "Друзі",
        stats_achievements: "Досягнення",
        sec_showcase: "⭐ ВІТРИНА ІГОР",
        sec_recent: "🎮 НЕЩОДАВНІ",
        hours_minecraft: "500 год",
        hours_cs2: "300 год",
        hours_witcher: "200 год",
        hours_rdr2: "180 год",
        sec_achievements: "🏆 ДОСЯГНЕННЯ",
        ach_collector: "Колекціонер",
        ach_addict: "Запеклий",
        ach_critic: "Критик",
        ach_sociable: "Товариський",
        ach_veteran: "Ветеран",
        ach_reliable: "Надійний",
        sec_friends: "👥 ДРУЗІ"
    }
};

export function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('nexora-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    const codeEl = document.getElementById('current-lang-code');
    const nameEl = document.getElementById('current-lang-name');
    if (codeEl) codeEl.textContent = translations[lang].lang_code;
    if (nameEl) nameEl.textContent = translations[lang].lang_name;

    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
}

// Инициализация переключения языка
document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('lang-dropdown-btn');
    const dropdownMenu = document.getElementById('lang-dropdown-menu');

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });

        dropdownMenu.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                setLanguage(lang);
                dropdownMenu.classList.remove('show');
            });
        });
    }

    const savedLang = localStorage.getItem('nexora-lang') || 'ru';
    setLanguage(savedLang);
});

// Инициализация анимации частиц фона
function runParticles(type, layer) {
    layer.innerHTML = '';
    if (type === 'none') return;

    const count = 40;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = `fx-particle particle-${type}`;

        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `-50px`;
        
        const duration = Math.random() * 3 + 2; 
        const delay = Math.random() * 4;
        const size = Math.random() * 8 + 6;

        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;

        if (type === 'matrix') {
            const chars = '01ABCXYZアイウエオ';
            p.textContent = chars[Math.floor(Math.random() * chars.length)];
            p.style.fontSize = `${size + 6}px`;
        } else {
            p.style.width = `${size}px`;
            p.style.height = `${type === 'meteors' ? size * 5 : size}px`;
        }

        layer.appendChild(p);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const effectsGrid = document.getElementById('effectsGrid');
    if (!effectsGrid) return;

    let fxLayer = document.getElementById('dynamic-fx-layer');
    if (!fxLayer) {
        fxLayer = document.createElement('div');
        fxLayer.id = 'dynamic-fx-layer';
        document.body.insertBefore(fxLayer, document.body.firstChild);
    }

    const cards = effectsGrid.querySelectorAll('.effect-card');
    
    const savedEffect = localStorage.getItem('nexora-effect') || 'none';
    if (savedEffect !== 'none') {
        runParticles(savedEffect, fxLayer);
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const effectType = card.getAttribute('data-effect');
            runParticles(effectType, fxLayer);
            localStorage.setItem('nexora-effect', effectType);
        });
    });
});

// Выпадающее меню сортировки
    if (sortBtn && sortMenu) {
        sortBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sortMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            sortMenu.classList.remove('show');
        });
    }

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });
    }