const translations = {
    en: {
        pageTitle: "sslaia - Nias Language Apps",
        navBrand: "sslaia's Nias Apps",
        selectedLanguageLabel: "English",
        heroTitle: "Set the Knowledge Free in Nias Language",
        heroLead: "Discover my collection of Android applications dedicated to supporting and promoting the Nias language.",
        appsSectionTitle: "Selected Applications",
        wikiniasDesc: "An all-in-one app for editing Nias Wikipedia, Nias Wiktionary, and Nias Wikibooks. Contribute to the Nias language digital presence easily.",
        wikikamusNiasDesc: "A dedicated app for editing and contributing to the Nias Wikikamus (Wiktionary). Help build a comprehensive Nias dictionary.",
        niasAskDesc: "A language pack providing Nias language support for the popular AnySoftKeyboard app. Type in Nias with ease on your Android device.",
        niasExtKbDesc: "An add-on that enables Nias language layout and character support for physical external keyboards connected to Android devices.",
        getOnPlayStore: "Get on Google Play",
        getOnGithub: "View and get the app on GitHub",
        aboutMeTitle: "About Me",
        aboutMeP1: "I am sslaia, a developer passionate about preserving and promoting the Nias language through technology. These applications are my contribution to making Nias more accessible in the digital world.",
        myGithubProfile: "My GitHub Profile",
        footerRights: "All rights reserved.",
        footerSubtitle: "Nias Language App Showcase"
    },
    id: {
        pageTitle: "sslia - Aplikasi Bahasa Nias",
        navBrand: "Aplikasi Bahasa Nias sslaia",
        selectedLanguageLabel: "Indonesia",
        heroTitle: "Membebaskan Pengetahuan dalam Bahasa Nias",
        heroLead: "Temukan koleksi aplikasi Android saya yang didedikasikan untuk mendukung dan mempromosikan bahasa Nias.",
        appsSectionTitle: "Aplikasi Pilihan",
        wikiniasDesc: "Aplikasi lengkap untuk menyunting Wikipedia, Wiktionary, dan Wikibooks bahasa Nias. Berkontribusi dengan mudah untuk kehadiran digital bahasa Nias.",
        wikikamusNiasDesc: "Aplikasi khusus untuk menyunting dan berkontribusi pada Wikikamus Nias. Bantu membangun kamus Nias yang komprehensif.",
        niasAskDesc: "Paket bahasa yang menyediakan dukungan bahasa Nias untuk aplikasi AnySoftKeyboard yang populer. Ketik dalam bahasa Nias dengan mudah di perangkat Android Anda.",
        niasExtKbDesc: "Add-on yang mengaktifkan tata letak bahasa Nias dan dukungan karakter untuk papan ketik eksternal fisik yang terhubung ke perangkat Android.",
        getOnPlayStore: "Dapatkan di Google Play",
        getOnGithub: "Lihat dan dapatkan aplikasi di GitHub",
        aboutMeTitle: "Tentang Saya",
        aboutMeP1: "Saya sslaia, seorang pengembang yang bersemangat dalam melestarikan dan mempromosikan bahasa Nias melalui teknologi. Aplikasi-aplikasi ini adalah kontribusi saya untuk membuat bahasa Nias lebih mudah diakses di dunia digital.",
        myGithubProfile: "Profil GitHub Saya",
        footerRights: "Hak cipta dilindungi.",
        footerSubtitle: "Pameran Aplikasi Bahasa Nias"
    },
    nia: {
        pageTitle: "sslia - Aplikasi li Niha",
        navBrand: "Aplikasi ba li Niha nifa'anö sslaia",
        selectedLanguageLabel: "Nias",
        heroTitle: "Mama'anö Fangi'ila ba Li Niha",
        heroLead: "So ba da'a mato ha'uga aplikasi soguna ba wanura li Niha yaŵa ba wiki.",
        appsSectionTitle: "Aplikasi Amilita",
        wikiniasDesc: "Aplikasi soguna ba wama'anö sura yaŵa ba Wikipedia, Wikikamus awö Wikibuku ba li Niha.",
        wikikamusNiasDesc: "Aplikasi soguna ba wanura yaŵa ba Wikikamus Nias.",
        niasAskDesc: "Aplikasi onönöta soguna khö aplikasi AnySoftKeyboard, ena'ö so khönia hurufo Nias awö ngawua wehede li Niha ba ginötö wanura.",
        niasExtKbDesc: "Aplikasi onönöta soguna ba wame'e ena'ö tola so hurufo Nias ba fafa wanura eksternal ba ginötö lafakhai ia ba Android.",
        getOnPlayStore: "Halö aplikasi moroi ba Google Play",
        getOnGithub: "Halö aplikasi moroi ba Github",
        aboutMeTitle: "Sanandrösa khögu",
        aboutMeP1: "sslaia ndra'o. Ohitö dödögu ena'ö tedou wama'anö li Niha ba Internet. Faoma ngawalö aplikasi andre, abölö aoha khö niha wamaigi ba ba wombaso ngawalö zura ba li Niha si so yaŵa ba Internet.",
        myGithubProfile: "Profil GitHub khögu",
        footerRights: "Terorogö hak cipta.",
        footerSubtitle: "Fama'oli Aplikasi ba li Niha"
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
