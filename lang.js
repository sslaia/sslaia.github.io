const translations = {
    en: {
        pageTitle: "My Apps - Supporting wiki volunteers and beyond",
        navBrand: "My Apps",
        selectedLanguageLabel: "English",
        heroTitle: "Empowering Wiki Volunteers and Beyond",
        heroLead: "A collection of tools and apps to support volunteers writing on various Wikimedia projects in local languages in Indonesia.",
        activeAppsSectionTitle: "Active Applications",
        wikinusaDesc: "A do-it-all app for Wikipedia, Wiktionary and Wikibooks. Perfect for those who works regularly on several wiki projects.",
        nusaKeyboardDesc: "A comprehensive keyboard featuring spelling checks, layout support, and wiki code tools for Nias and other regional languages in Indonesia. Built as a unified modern successor to Nias Keyboard and Nias for AnySoftKeyboard.",
        niasExtKbDesc: "An add-on that enables Nias language layout and character support for physical external keyboards connected to Android devices.",
        towitowiDesc: "An simple but powerful note-taking app that can also be your daily journal app. You are in control, however if you need a little lift, just ask Gemini AI for little help, either to restructure your fleeting thought, polish your long notes, or craft social media posts.",
        legacySectionTitle: "Guard of Honor",
        legacySectionDesc: "These apps have served many users over the years (for instance, the WikiNias app is still actively used by many). Although they are no longer available on the Google Play Store for new users, their open-source code remains available on GitHub for the community.",
        activeUsersBadge: "Active Users",
        legacyBadge: "Parked",
        getOnPlayStore: "Get on Google Play",
        getOnGithub: "View on GitHub",
        aboutMeTitle: "About Me",
        aboutMeP1: "I am Sirus Laia, a developer passionate about supporting volunteers and preserving local languages through technology. These applications are my contribution to making knowledge more accessible in local languages.",
        myGithubProfile: "My GitHub Profile",
        footerRights: "All rights reserved.",
        footerSubtitle: "My Apps Showcase",
        // Legacy apps descriptions (for reference or hover)
        wikiniasDesc: "An all-in-one app for editing Nias Wikipedia, Nias Wikikamus, and Nias Wikibuku. Join us to make Nias language present on the digital space.",
        nusapediaDesc: "An app for accessing Wikipedia in 11 local languages in Indonesia. Read and edit Wikipedia pages in your mother tongue.",
        wikikamusDesc: "An app for accessing Wiktionary in 11 local languages in Indonesia. Search and find words in Indonesian local languages.",
        niasKeyboardDesc: "A specialized keyboard featuring spelling checks for Nias and Indonesian, perfect for daily use and wiki editing.",
        niasAskDesc: "A language pack providing Nias language support for the popular AnySoftKeyboard app."
    },
    id: {
        pageTitle: "Aplikasi Saya - Mendukung relawan wiki dan lainnya",
        navBrand: "Aplikasi Saya",
        selectedLanguageLabel: "Indonesia",
        heroTitle: "Memberdayakan Relawan Wiki dan Lainnya",
        heroLead: "Koleksi alat dan aplikasi untuk mendukung relawan yang menulis di berbagai proyek Wikimedia dalam bahasa daerah di Indonesia.",
        activeAppsSectionTitle: "Aplikasi Aktif",
        wikinusaDesc: "Aplikasi yang bisa mengakses Wikipedia, Wikikamus dan Wikibuku. Bagus bagi mereka yang suka gonta-ganti proyek wiki.",
        nusaKeyboardDesc: "Papan ketik komprehensif yang dilengkapi dengan pemeriksaan ejaan, dukungan tata letak, dan alat kode wiki untuk bahasa Nias dan bahasa daerah lainnya di Indonesia. Dikembangkan sebagai penerus modern yang menyatukan Nias Keyboard dan Nias untuk AnySoftKeyboard.",
        niasExtKbDesc: "Add-on yang mengaktifkan tata letak bahasa Nias dan dukungan karakter untuk papan ketik eksternal fisik yang terhubung ke perangkat Android.",
        towitowiDesc: "Sebuah aplikasi catatan harian yang sederhana tetapi hebat. Tentu saja Anda memegang kendali, namun jika Anda membutuhkan sedikit bantuan, cukup minta bantuan Gemini AI, baik untuk menyusun ulang pemikiran Anda yang sekilas, memoles catatan panjang Anda, atau membuat unggahan media sosial.",
        legacySectionTitle: "Papan Kehormatan",
        legacySectionDesc: "Aplikasi-aplikasi ini telah melayani banyak pengguna selama bertahun-tahun (misalnya, aplikasi WikiNias masih aktif digunakan oleh banyak orang). Meskipun tidak lagi tersedia di Google Play Store untuk pengguna baru, kode sumber terbuka mereka tetap tersedia di GitHub untuk komunitas.",
        activeUsersBadge: "Masih Aktif",
        legacyBadge: "Diarsipkan",
        getOnPlayStore: "Dapatkan di Google Play",
        getOnGithub: "Lihat di GitHub",
        aboutMeTitle: "Tentang Saya",
        aboutMeP1: "Saya Sirus Laia, seorang pengembang yang bersemangat dalam mendukung relawan dan melestarikan bahasa daerah melalui teknologi. Aplikasi-aplikasi ini adalah kontribusi saya untuk membuat pengetahuan lebih mudah diakses dalam bahasa daerah.",
        myGithubProfile: "Profil GitHub Saya",
        footerRights: "Hak cipta dilindungi.",
        footerSubtitle: "Pameran Aplikasi Saya",
        // Legacy apps descriptions
        wikiniasDesc: "Aplikasi lengkap untuk menyunting Wikipedia, Wikikamus, dan Wikibuku dalam bahasa Nias. Mari berkontribusi menghadirkan bahasa Nias di dunia digital.",
        nusapediaDesc: "Aplikasi untuk mengakses Wikipedia dalam 11 bahasa daerah di Indonesia. Jelajahi pengetahuan dalam bahasa ibu Anda.",
        wikikamusDesc: "Aplikasi untuk mengakses Wikikamus dalam 11 bahasa daerah di Indonesia. Cari dan temukan kata dalam bahasa ibu Anda.",
        niasKeyboardDesc: "Papan ketik khusus yang dilengkapi dengan pemeriksaan ejaan untuk bahasa Nias dan Indonesia. Dilengkapi juga dengan kode wiki.",
        niasAskDesc: "Paket bahasa yang menyediakan dukungan bahasa Nias untuk aplikasi AnySoftKeyboard yang populer."
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
