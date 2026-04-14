const translations = {
    en: {
        pageTitle: "Wiki Volunteer Tools",
        navBrand: "Wiki Tools",
        selectedLanguageLabel: "English",
        heroTitle: "Empowering Wiki Volunteers",
        heroLead: "A collection of tools and apps to support volunteers writing on various Wikimedia projects in local languages.",
        commonAppsSectionTitle: "Common Applications",
        niasAppsSectionTitle: "Nias Language Apps",
        nusapediaDesc: "An app for accessing Wikipedia in 11 local languages in Indonesia. Read and edit Wikipedia pages in your mother tongue.",
        wikikamusDesc: "An app for accessing Wiktionary in 11 local languages in Indonesia. Search and find words in Indonesian local languages.",
        niasKeyboardDesc: "A specialized keyboard featuring spelling checks for both Nias and Indonesian languages. In addition it supports wiki code, that wiki volunteers need for daily editing.",
        wikiniasDesc: "An all-in-one app for editing Nias Wikipedia, Nias Wikikamus, and Nias Wikibuku. Join us to make Nias language present on the digital space.",
        wikikamusNiasDesc: "A dedicated app for editing and contributing to the Nias Wikikamus. Help build a comprehensive Nias dictionary.",
        niasAskDesc: "A language pack providing Nias language support for the popular AnySoftKeyboard app. Type in Nias with ease on your Android device.",
        niasExtKbDesc: "An add-on that enables Nias character support for physical external keyboards connected to Android devices.",
        getOnPlayStore: "Get on Google Play",
        getOnGithub: "View on GitHub",
        aboutMeTitle: "About Me",
        aboutMeP1: "I am Sirus Laia, a developer passionate about supporting volunteers and preserving local languages through technology. These applications are my contribution to making knowledge more accessible in local languages.",
        myGithubProfile: "My GitHub Profile",
        footerRights: "All rights reserved.",
        footerSubtitle: "Wiki Volunteer Tools Showcase"
    },
    id: {
        pageTitle: "Perangkat Bagi Relawan Wiki",
        navBrand: "Perangkat Wiki",
        selectedLanguageLabel: "Indonesia",
        heroTitle: "Memberdayakan Relawan Wiki",
        heroLead: "Koleksi alat dan aplikasi untuk mendukung relawan yang menulis di berbagai proyek Wikimedia dalam bahasa daerah.",
        commonAppsSectionTitle: "Aplikasi Umum",
        niasAppsSectionTitle: "Aplikasi Pendukung Bahasa Nias",
        nusapediaDesc: "Aplikasi untuk mengakses Wikipedia dalam 11 bahasa daerah di Indonesia. Jelajahi pengetahuan dalam bahasa ibu Anda.",
        wikikamusDesc: "Aplikasi untuk mengakses Wikikamus dalam 11 bahasa daerah di Indonesia. Cari dan temukan kata dalam bahasa ibu Anda.",
        niasKeyboardDesc: "Papan ketik khusus yang dilengkapi dengan pemeriksaan ejaan untuk bahasa Nias dan Indonesia. Juga dilengkapi dengan kode wiki, yang dibutuhkan dalam penyuntingan sehari-hari.",
        wikiniasDesc: "Aplikasi lengkap untuk menyunting Wikipedia, Wikikamus, dan Wikibuku dalam bahasa Nias. Mari berkontribusi menghadirkan bahasa Nias di dunia digital.",
        wikikamusNiasDesc: "Aplikasi khusus untuk menyunting di Wikikamus Nias. Mari kamus Nias online, yang bebas dan komprehensif.",
        niasAskDesc: "Paket bahasa yang menyediakan dukungan bahasa Nias untuk aplikasi AnySoftKeyboard yang populer. Ketik dalam bahasa Nias dengan mudah di perangkat Android Anda.",
        niasExtKbDesc: "Add-on yang mengaktifkan tata letak bahasa Nias dan dukungan karakter untuk papan ketik eksternal fisik yang terhubung ke perangkat Android.",
        getOnPlayStore: "Dapatkan di Google Play",
        getOnGithub: "Lihat di GitHub",
        aboutMeTitle: "Tentang Saya",
        aboutMeP1: "Saya Sirus Laia, seorang pengembang yang bersemangat dalam mendukung relawan dan melestarikan bahasa daerah melalui teknologi. Aplikasi-aplikasi ini adalah kontribusi saya untuk membuat pengetahuan lebih mudah diakses dalam bahasa daerah.",
        myGithubProfile: "Profil GitHub Saya",
        footerRights: "Hak cipta dilindungi.",
        footerSubtitle: "Pameran Alat Relawan Wiki"
    },
    nia: {
        pageTitle: "Fangöna Khö Ndra Relawan Wiki",
        navBrand: "Fakake Wiki",
        selectedLanguageLabel: "Nias",
        heroTitle: "Fanolo Khö Relawan Wiki",
        heroLead: "So ba da'a ngawalö aplikasi si tobali fanolo khö ndra relawan sanura ba ngawalö proyek Wikimedia ba li niha.",
        commonAppsSectionTitle: "Aplikasi Sifagölötö",
        niasAppsSectionTitle: "Aplikasi Sondrou'ö Li Niha",
        nusapediaDesc: "Aplikasi ba wangohalöŵögöi Wikipedia ba zi 11 ngawalö li ba Indonesia. Baso ngawalö zinura ba limö samösa.",
        wikikamusDesc: "Aplikasi ba wangohalöŵögöi Wikikamus ba zi 11 ngawalö li ba Indonesia. Alui ba söndra ngawua wehede ba li bö'ö.",
        niasKeyboardDesc: "Fafa wanura si so kamusnia ba li Niha awö li Indonesia. Baero da'ö so khönia kode wiki sasese mu'oguna'ö si ero ma'ökhö.",
        wikiniasDesc: "Aplikasi soguna ba wama'anö sura yaŵa ba Wikipedia, Wikikamus awö Wikibuku ba li Niha.",
        wikikamusNiasDesc: "Aplikasi soguna ba wanura yaŵa ba Wikikamus Nias.",
        niasAskDesc: "Aplikasi onönöta soguna khö aplikasi AnySoftKeyboard, ena'ö so khönia hurufo Nias awö ngawua wehede li Niha ba ginötö wanura.",
        niasExtKbDesc: "Aplikasi onönöta soguna ba wame'e ena'ö tola so hurufo Nias ba fafa wanura eksternal ba ginötö lafakhai ia ba Android.",
        getOnPlayStore: "Halö aplikasi moroi ba Google Play",
        getOnGithub: "Faigi yaŵa ba Github",
        aboutMeTitle: "Sanandrösa khögu",
        aboutMeP1: "Sirus Laia ndra'o, samazökhi aplikasi Android. Omasido wondrou'ö halöŵö ndra relawan wiki samaeri li khöra mangoguna'ö teknologi. Ufazökhi oi aplikasi andre tobali falulusa moroi khögu ba halöŵö mondrou'ö wangi'ila ba ngawalö li yaŵa ba gu'ö Internet.",
        myGithubProfile: "Profil GitHub khögu",
        footerRights: "Terorogö hak cipta.",
        footerSubtitle: "Fangoroma'ö Ngawalö Wakake Ndra Relawan Wiki"
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang; // Set the lang attribute of the <html> tag
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'TITLE') {
                el.textContent = translations[lang][key];
            } else if (el.placeholder && key.endsWith('Placeholder')) { // Example if you need to translate placeholders
                 el.placeholder = translations[lang][key];
            }
             else {
                el.innerHTML = translations[lang][key]; // Use innerHTML to allow for simple tags if needed in translations
            }
        }
    });

    // Update the language dropdown button text
    const selectedLangElement = document.getElementById('selectedLanguage');
    if (selectedLangElement) {
        selectedLangElement.textContent = translations[lang]?.selectedLanguageLabel || lang.toUpperCase();
    }

    // Store preference
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const switcherLinks = document.querySelectorAll('.lang-switcher');
    switcherLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            // Optional: Close Bootstrap dropdown manually if it doesn't close automatically
            // $('#languageDropdown').dropdown('toggle'); // Requires jQuery fully loaded
        });
    });

    // Determine initial language
    let preferredLang = localStorage.getItem('preferredLanguage');
    if (!preferredLang) {
        // Fallback to browser language if it's one of our supported languages, else default to 'en'
        const browserLang = navigator.language.split('-')[0];
        preferredLang = translations[browserLang] ? browserLang : 'en';
    }
    setLanguage(preferredLang);
});
