    document.addEventListener('DOMContentLoaded', () => {
        // Definisi data untuk multi-bahasa
        const translations = {
            'id': {
        'header-name': 'Janice Marsha Audria',
        'header-title': 'QA Enthusiast • Pengujian Manual • Proyek Web',
        'nav-about': 'Tentang',
        'nav-stats': 'Statistik',
        'nav-portfolio': 'Portofolio',
        'nav-experience': 'Pengalaman',
        'nav-achievements': 'Prestasi',
        'lang-button': 'ID',
        'hero-tagline': 'Saya membuat perangkat lunak lebih andal — satu kasus uji dalam satu waktu.',
        'hero-bio': 'Seorang QA enthusiast yang sedang menempuh studi Informatika di Telkom University. Terampil membuat artefak uji yang jelas, melakukan pengujian manual secara teliti, serta mengembangkan proyek web kecil untuk mengasah keterampilan.',
        'hero-contact-btn': 'Hubungi / Rekrut',
        'hero-portfolio-btn': 'Lihat Portofolio',
        'hero-certificates-btn': 'Sertifikat',
        'aside-name': 'Janice Marsha Audria',
        'aside-title': 'QA Enthusiast — Pengujian Manual',
        'stats-title': 'Statistik Saya',
        'stats-years': 'Tahun Pengalaman',
        'stats-projects': 'Proyek Selesai',
        'stats-bugs': 'Total Bug Ditemukan',
        'stats-certs': 'Sertifikat Profesional',
        'about-title': 'Tentang Saya',
        'about-text': 'Saya lulusan SMK Telkom Sandhy Putra Malang (Rekayasa Perangkat Lunak) dan saat ini melanjutkan studi di Telkom University - Informatika (S1 PJJ). Berpengalaman magang sebagai Project Administrator & Support serta Asisten Laboratorium. Fokus utama saya adalah pada pengujian manual, dokumentasi QA, pengelolaan data, dan pengembangan web sederhana sebagai media latihan.',
        'about-motivation-heading': 'Motivasi',
        'about-motivation-text': '"Saya berkomitmen memastikan setiap produk digital yang saya tangani memberikan pengalaman lancar dan andal bagi pengguna, melalui pengujian teliti dan pembelajaran berkelanjutan."',

        'portfolio-title': 'Portofolio & Proyek',

    'portfolio-project1-name': 'Personal Portfolio',
    'portfolio-project1-desc': 'Dokumentasi diri & showcase proyek — disusun dalam bentuk file presentasi & CV kreatif.',

    'portfolio-project2-name': 'JeanStream',
    'portfolio-project2-desc': 'Prototipe aplikasi streaming sederhana dengan fokus pada responsivitas dan UX.',

    'portfolio-project3-name': 'PT Mommi Hokki — Profil Perusahaan',
    'portfolio-project3-desc': 'Situs web profil perusahaan sebagai proyek akhir sekaligus portofolio akademis.',

    'portfolio-project4-name': 'LJ-Project',
    'portfolio-project4-desc': 'Kolaborasi freelance — terbuka untuk pembuatan berbagai website sesuai kebutuhan klien.',

    'portfolio-project5-name': 'Quality Control Documentation',
    'portfolio-project5-desc': 'Dokumentasi QA: laporan bug, test case, dan evaluasi kualitas selama masa magang.',

    'portfolio-project6-name': 'JeanVerse — Manajemen Event & Tiket',
    'portfolio-project6-desc': 'Prototipe platform untuk manajemen acara dan pemesanan tiket dengan tampilan modern & responsif.',

    'portfolio-live': 'Demo',
    'portfolio-code': 'Kode',


        'experience-job1-title': 'Team Supervisor',
        'experience-job1-company': 'PT Mommi Hokki Indonesia',
        'experience-job1-date': '2023 - 2025',
        'experience-job1-desc1': 'Memimpin tim operasional harian untuk mencapai target produksi dan layanan tepat waktu.',
        'experience-job1-desc2': 'Mengoptimalkan koordinasi lintas departemen untuk meningkatkan efisiensi kerja.',
        'experience-job1-desc3': 'Melatih dan membimbing anggota tim baru untuk meningkatkan kinerja dan kualitas.',
        'experience-job1-desc4': 'Berhasil meningkatkan produktivitas tim dan kepuasan pelanggan melalui optimalisasi proses kerja.',

        'experience-job2-title': 'Admin IT',
        'experience-job2-company': 'PT Mommi Hokki Indonesia',
        'experience-job2-date': '2022 - 2024',
        'experience-job2-desc1': 'Mengelola sistem IT internal dan memberikan dukungan teknis kepada karyawan.',
        'experience-job2-desc2': 'Melakukan pengujian manual untuk memastikan sistem berjalan sesuai standar.',
        'experience-job2-desc3': 'Menangani troubleshooting dengan cepat untuk meminimalkan downtime operasional.',
        'experience-job2-desc4': 'Berkontribusi pada pengembangan sistem IT yang meningkatkan stabilitas dan efisiensi kerja.',

        'experience-job3-title': 'Quality Assurance Engineer (Magang)',
        'experience-job3-company': 'PT Sekawan Media Informatika',
        'experience-job3-date': '2024',
        'experience-job3-desc1': 'Membuat test case dan skenario terstruktur menggunakan Notion untuk memastikan cakupan pengujian menyeluruh.',
        'experience-job3-desc2': 'Melakukan pengujian manual produk digital, mengidentifikasi lebih dari 30 bug kritis per sprint.',
        'experience-job3-desc3': 'Berkolaborasi dengan developer dan tim produk untuk menjaga standar kualitas perusahaan.',
        'experience-job3-desc4': 'Memberikan umpan balik pengguna yang membantu menurunkan potensi error hingga 40%.',

        'experience-job4-title': 'IT & System Staff',
        'experience-job4-company': 'PT Mitufaya Ritel Indonesia',
        'experience-job4-date': '2023 - 2024',
        'experience-job4-desc1': 'Menangani perbaikan data dan koreksi error pada sistem Odoo ERP, meningkatkan efisiensi operasional hingga 25%.',
        'experience-job4-desc2': 'Merancang serta memperbarui layout website untuk meningkatkan branding dan fungsionalitas.',
        'experience-job4-desc3': 'Mengelola database karyawan dan laporan penjualan Beauty Advisor dengan akurasi tinggi.',

        'experience-job5-title': 'IT Support',
        'experience-job5-company': 'PT Cubiconia Kanaya Pratama',
        'experience-job5-date': '2021 - 2023',
        'experience-job5-desc1': 'Menangani keluhan pelanggan melalui layanan chat dengan respon cepat dan akurat.',
        'experience-job5-desc2': 'Melakukan pemeliharaan SQL untuk menjaga integritas data.',
        'experience-job5-desc3': 'Mendesain UI/UX untuk aplikasi mobile dan web.',
        'experience-job5-desc4': 'Berkontribusi pada pengembangan sistem internal yang meningkatkan pengalaman pengguna.',

        'experience-job6-title': 'Content Producer (Freelance)',
        'experience-job6-company': 'PT Mommi Hokki Indonesia',
        'experience-job6-date': '2021 - 2022',
        'experience-job6-desc1': 'Membuat dan mengelola konten digital untuk mendukung branding perusahaan.',
        'experience-job6-desc2': 'Menyusun strategi konten yang meningkatkan keterlibatan pelanggan (engagement).',
        'experience-job6-desc3': 'Berkolaborasi dengan tim pemasaran dalam kampanye digital.',
        'experience-job6-desc4': 'Menghasilkan konten yang memperkuat citra perusahaan di pasar.',

        'achievements-title': 'Sertifikat & Prestasi',
        'achievements-cert1-name': 'Dicoding Indonesia',
        'achievements-cert1-desc': 'Web Development, Project Management (2023)',

        'achievements-cert2-name': 'PraKerja',
        'achievements-cert2-desc': 'Laravel, HTML/CSS/JavaScript (2023)',

        'achievements-cert3-name': 'MySkill',
        'achievements-cert3-desc': 'Microsoft Excel Shortclass (2024)',

        'achievements-cert4-name': 'DOT Indonesia',
        'achievements-cert4-desc': 'Kotlin Certification (2021)',

        'achievements-section-title': 'Sertifikat',
        'achievements-section-title1': 'Prestasi',

        'achievements-item1': 'Juara Video Favorit – Honda AHM (2019)',
        'achievements-item2': 'Juara Video Favorit – Universitas Katolik Darma Cendika (2020 & 2021)',
        'achievements-item3': 'Finalis 10 Besar Video Terbaik – Bank Indonesia (2020 & 2021)',
        'achievements-item4': 'Video Kreator Terbaik – PT Mommi Hokki Indonesia (2023)',
        'achievements-item5': 'Meraih nilai A dalam program magang sebagai Quality Assurance di PT Sekawan Media (2024)',
        'achievements-item6': 'Menyelesaikan lebih dari 5 proyek klien dalam waktu kurang dari 1 bulan selama masa magang (2024)',
        
        'language-title': 'Bahasa',
        'bhs-indo': 'Bahasa Indonesia',
        'bhs-inggris': 'Bahasa Inggris',
        'bhs-jerman': 'Bahasa Jerman',
        'bhs-indo1': 'Penutur asli',
        'bhs-inggris1': 'B2 | Menengah atas / Cukup mahir',
        'bhs-jerman1': 'Pemula',

        'contact-title': 'Hubungi',
        'contact-email-label': 'Email:',
        'contact-phone-label': 'Telepon:',
        'contact-linkedin-label': 'LinkedIn:',

        'soon-title': 'Segera Hadir!',
        'soon-text': 'Konten ini sedang dalam pengembangan. Nantikan update terbaru dari kami!',
        'soon-back': 'Kembali ke Beranda'
    },

            'en': {
        'header-name': 'Janice Marsha Audria',
        'header-title': 'QA Enthusiast • Manual Testing • Web Projects',
        'nav-about': 'About',
        'nav-stats': 'Stats',
        'nav-portfolio': 'Portfolio',
        'nav-experience': 'Experience',
        'nav-achievements': 'Achievements',
        'lang-button': 'EN',
        'hero-tagline': 'I make software more reliable — one test case at a time.',
        'hero-bio': 'A QA enthusiast currently pursuing a degree in Informatics at Telkom University. Skilled in creating clear test artifacts, performing thorough manual testing, and building small web projects to sharpen my skills.',
        'hero-contact-btn': 'Hire / Contact',
        'hero-portfolio-btn': 'Live Portfolio',
        'hero-certificates-btn': 'Certificates',
        'aside-name': 'Janice Marsha Audria',
        'aside-title': 'QA Enthusiast — Manual Testing',
        'stats-title': 'My Stats',
        'stats-years': 'Years of Experience',
        'stats-projects': 'Projects Completed',
        'stats-bugs': 'Total Bugs Found',
        'stats-certs': 'Professional Certificates',
        'about-title': 'About Me',
        'about-text': 'I graduated from SMK Telkom Sandhy Putra Malang (Software Engineering) and am currently continuing my studies in Informatics (Distance Learning) at Telkom University. I have experience as a Project Administrator & Support intern and a Laboratory Assistant. My main focus is manual testing, QA documentation, data management, and developing simple web projects as practice tools.',
        'about-motivation-heading': 'Motivation',
        'about-motivation-text': '"I am committed to ensuring that every digital product I work on delivers a seamless and reliable user experience through careful testing and continuous learning."',

        'portfolio-title': 'Portfolio & Projects',

    'portfolio-project1-name': 'Personal Portfolio',
    'portfolio-project1-desc': 'Self-documentation & project showcase — designed as creative CV and presentation files.',

    'portfolio-project2-name': 'JeanStream',
    'portfolio-project2-desc': 'A simple streaming app prototype with focus on responsiveness and user experience.',

    'portfolio-project3-name': 'PT Mommi Hokki — Company Profile',
    'portfolio-project3-desc': 'Company profile website as a final project and academic portfolio.',

    'portfolio-project4-name': 'LJ-Project',
    'portfolio-project4-desc': 'Freelance collaboration — open for building websites tailored to client needs.',

    'portfolio-project5-name': 'Quality Control Documentation',
    'portfolio-project5-desc': 'QA documentation: bug reports, test cases, and quality evaluations during internship.',

    'portfolio-project6-name': 'JeanVerse — Event Management & Ticketing',
    'portfolio-project6-desc': 'Prototype platform for event management and ticket booking with a modern, responsive design.',

    'portfolio-live': 'Live Demo',
    'portfolio-code': 'Code',

        'experience-title': 'Work Experience',

        // Job 1
        'experience-job1-title': 'Team Supervisor',
        'experience-job1-company': 'PT Mommi Hokki Indonesia',
        'experience-job1-date': '2023 - 2025',
        'experience-job1-desc1': 'Led daily operational teams to achieve production and service targets on time.',
        'experience-job1-desc2': 'Optimized cross-department coordination to improve efficiency.',
        'experience-job1-desc3': 'Trained and mentored new team members to enhance performance and quality.',
        'experience-job1-desc4': 'Successfully improved team productivity and customer satisfaction through process optimization.',

        // Job 2
        'experience-job2-title': 'IT Administrator',
        'experience-job2-company': 'PT Mommi Hokki Indonesia',
        'experience-job2-date': '2022 - 2024',
        'experience-job2-desc1': 'Managed internal IT systems and provided technical support for employees.',
        'experience-job2-desc2': 'Performed manual testing to ensure systems met company standards.',
        'experience-job2-desc3': 'Handled troubleshooting promptly to minimize operational downtime.',
        'experience-job2-desc4': 'Contributed to developing IT systems that improved stability and efficiency.',

        // Job 3
        'experience-job3-title': 'Quality Assurance Engineer (Internship)',
        'experience-job3-company': 'PT Sekawan Media Informatika',
        'experience-job3-date': '2024',
        'experience-job3-desc1': 'Created structured test cases and scenarios using Notion to ensure comprehensive test coverage.',
        'experience-job3-desc2': 'Performed manual testing on digital products, identifying 30+ critical bugs per sprint.',
        'experience-job3-desc3': 'Collaborated with developers and product teams to maintain company quality standards.',
        'experience-job3-desc4': 'Provided user feedback that helped reduce potential errors by up to 40%.',

        // Job 4
        'experience-job4-title': 'IT & System Staff',
        'experience-job4-company': 'PT Mitufaya Ritel Indonesia',
        'experience-job4-date': '2023 - 2024',
        'experience-job4-desc1': 'Fixed data issues and errors in the Odoo ERP system, improving operational efficiency by 25%.',
        'experience-job4-desc2': 'Designed and updated website layouts to enhance branding and functionality.',
        'experience-job4-desc3': 'Managed employee databases and sales reports for Beauty Advisors with high accuracy.',

        // Job 5
        'experience-job5-title': 'IT Support',
        'experience-job5-company': 'PT Cubiconia Kanaya Pratama',
        'experience-job5-date': '2021 - 2023',
        'experience-job5-desc1': 'Handled customer inquiries via chat with fast and accurate responses.',
        'experience-job5-desc2': 'Maintained SQL databases to ensure data integrity.',
        'experience-job5-desc3': 'Designed UI/UX for mobile and web applications.',
        'experience-job5-desc4': 'Contributed to developing internal systems that enhanced user experience.',

        // Job 6
        'experience-job6-title': 'Content Producer (Freelance)',
        'experience-job6-company': 'PT Mommi Hokki Indonesia',
        'experience-job6-date': '2021 - 2022',
        'experience-job6-desc1': 'Created and managed digital content to support company branding.',
        'experience-job6-desc2': 'Developed content strategies that increased customer engagement.',
        'experience-job6-desc3': 'Collaborated with the marketing team on digital campaigns.',
        'experience-job6-desc4': 'Produced content that strengthened the company’s market presence.',

        'achievements-title': 'Certificates & Achievements',
        'achievements-cert1-name': 'Dicoding Indonesia',
        'achievements-cert1-desc': 'Web Development, Project Management (2023)',

        'achievements-cert2-name': 'PraKerja',
        'achievements-cert2-desc': 'Laravel, HTML/CSS/JavaScript (2023)',

        'achievements-cert3-name': 'MySkill',
        'achievements-cert3-desc': 'Microsoft Excel Shortclass (2024)',

        'achievements-cert4-name': 'DOT Indonesia',
        'achievements-cert4-desc': 'Kotlin Certification (2021)',

        'achievements-section-title': 'Certificates',
        'achievements-section-title1': 'Achievements',

        'achievements-item1': 'Favorite Video Winner – Honda AHM (2019)',
        'achievements-item2': 'Favorite Video Winner – Universitas Katolik Darma Cendika (2020 & 2021)',
        'achievements-item3': 'Top 10 Finalist – Bank Indonesia Video Competition (2020 & 2021)',
        'achievements-item4': 'Best Video Creator – PT Mommi Hokki Indonesia (2023)',
        'achievements-item5': 'Achieved an A grade in the internship program as a Quality Assurance at PT Sekawan Media (2024)',
        'achievements-item6': 'Completed more than 5 client projects in less than 1 month during internship (2024)',

        'language-title': 'Languages',
        'bhs-indo': 'Indonesian',
        'bhs-inggris': 'English',
        'bhs-jerman': 'German',
        'bhs-indo1': 'Native',
        'bhs-inggris1': 'B2 | Intermediate',
        'bhs-jerman1': 'Beginner',

        'contact-title': 'Contact',
        'contact-email-label': 'Email:',
        'contact-phone-label': 'Phone:',
        'contact-linkedin-label': 'LinkedIn:',

        'soon-title': 'Coming Soon!',
        'soon-text': 'This content is under development. Stay tuned for the latest updates!',
        'soon-back': 'Back to Home'
    },

            'de': {
        'header-name': 'Janice Marsha Audria',
        'header-title': 'QA-Enthusiastin • Manuelle Tests • Webprojekte',
        'nav-about': 'Über mich',
        'nav-stats': 'Statistiken',
        'nav-portfolio': 'Portfolio',
        'nav-experience': 'Erfahrung',
        'nav-achievements': 'Erfolge',
        'lang-button': 'DE',

        'hero-tagline': 'Ich mache Software zuverlässiger – ein Testfall nach dem anderen.',
        'hero-bio': 'Eine QA-Enthusiastin, die derzeit Informatik an der Telkom University studiert. Erfahrung in der Erstellung klarer Testartefakte, Durchführung gründlicher manueller Tests und Entwicklung kleiner Webprojekte zur Verbesserung der eigenen Fähigkeiten.',
        'hero-contact-btn': 'Kontakt / Anstellen',
        'hero-portfolio-btn': 'Live-Portfolio',
        'hero-certificates-btn': 'Zertifikate',

        'aside-name': 'Janice Marsha Audria',
        'aside-title': 'QA-Enthusiastin — Manuelle Tests',

        'stats-title': 'Meine Statistiken',
        'stats-years': 'Jahre Erfahrung',
        'stats-projects': 'Abgeschlossene Projekte',
        'stats-bugs': 'Gefundene Bugs',
        'stats-certs': 'Berufszertifikate',

        'about-title': 'Über mich',
        'about-text': 'Absolventin der SMK Telkom Sandhy Putra Malang (Softwaretechnik), derzeit Studium der Informatik (Fernstudium) an der Telkom University. Erfahrung als Team Supervisor, IT-Administratorin, QA-Praktikantin, IT-Mitarbeiterin, IT-Support sowie Content-Produzentin. Schwerpunkt: manuelles Testen, QA-Dokumentation, Datenmanagement und Entwicklung einfacher Webprojekte.',
        'about-motivation-heading': 'Motivation',
        'about-motivation-text': '"Mein Ziel ist es, durch sorgfältige Tests und kontinuierliches Lernen sicherzustellen, dass jedes digitale Produkt eine reibungslose und zuverlässige Benutzererfahrung bietet."',

        'portfolio-title': 'Portfolio & Projekte',

    'portfolio-project1-name': 'Persönliches Portfolio',
    'portfolio-project1-desc': 'Selbstdokumentation & Projekt-Showcase — erstellt als kreative Präsentations- und CV-Dateien.',

    'portfolio-project2-name': 'JeanStream',
    'portfolio-project2-desc': 'Ein einfaches Streaming-App-Prototyp mit Fokus auf Responsivität und Benutzererfahrung.',

    'portfolio-project3-name': 'PT Mommi Hokki — Firmenprofil',
    'portfolio-project3-desc': 'Firmenprofil-Website als Abschlussprojekt und akademisches Portfolio.',

    'portfolio-project4-name': 'LJ-Project',
    'portfolio-project4-desc': 'Freelance-Kollaboration — offen für die Erstellung verschiedener Websites nach Kundenwunsch.',

    'portfolio-project5-name': 'QS-Dokumentation',
    'portfolio-project5-desc': 'QA-Dokumentation: Bug-Reports, Testfälle und Qualitätsbewertungen während des Praktikums.',

    'portfolio-project6-name': 'JeanVerse — Eventmanagement & Ticketing',
    'portfolio-project6-desc': 'Prototyp-Plattform für Eventmanagement und Ticketbuchung mit modernem, responsivem Design.',

    'portfolio-live': 'Live-Demo',
    'portfolio-code': 'Code',

        'experience-title': 'Berufserfahrung',

        'experience-job1-title': 'Teamleiterin',
        'experience-job1-company': 'PT Mommi Hokki Indonesia',
        'experience-job1-date': '2023 - 2025',
        'experience-job1-desc1': 'Führung von operativen Teams zur termingerechten Erreichung von Produktions- und Servicezielen.',
        'experience-job1-desc2': 'Optimierung der abteilungsübergreifenden Zusammenarbeit zur Effizienzsteigerung.',
        'experience-job1-desc3': 'Schulung und Betreuung neuer Teammitglieder zur Verbesserung der Qualität.',
        'experience-job1-desc4': 'Steigerung der Produktivität und Kundenzufriedenheit durch Prozessoptimierung.',

        'experience-job2-title': 'IT-Administratorin',
        'experience-job2-company': 'PT Mommi Hokki Indonesia',
        'experience-job2-date': '2022 - 2024',
        'experience-job2-desc1': 'Verwaltung interner IT-Systeme und technische Unterstützung für Mitarbeitende.',
        'experience-job2-desc2': 'Durchführung manueller Tests zur Sicherstellung von Unternehmensstandards.',
        'experience-job2-desc3': 'Schnelle Fehlerbehebung zur Minimierung von Ausfallzeiten.',
        'experience-job2-desc4': 'Mitwirkung an der Entwicklung stabilerer und effizienterer IT-Systeme.',

        'experience-job3-title': 'Quality Assurance Engineer (Praktikum)',
        'experience-job3-company': 'PT Sekawan Media Informatika',
        'experience-job3-date': '2024',
        'experience-job3-desc1': 'Erstellung strukturierter Testfälle und Szenarien in Notion zur vollständigen Testabdeckung.',
        'experience-job3-desc2': 'Manuelles Testen digitaler Produkte, Identifizierung von über 30 kritischen Bugs pro Sprint.',
        'experience-job3-desc3': 'Zusammenarbeit mit Entwickler- und Produktteams zur Einhaltung von Qualitätsstandards.',
        'experience-job3-desc4': 'Feedback gegeben, das potenzielle Fehler um bis zu 40% reduzierte.',

        'experience-job4-title': 'IT- & Systemmitarbeiterin',
        'experience-job4-company': 'PT Mitufaya Ritel Indonesia',
        'experience-job4-date': '2023 - 2024',
        'experience-job4-desc1': 'Behebung von Datenproblemen im Odoo-ERP-System, Effizienzsteigerung um 25%.',
        'experience-job4-desc2': 'Gestaltung und Aktualisierung von Website-Layouts zur Verbesserung von Branding und Funktionalität.',
        'experience-job4-desc3': 'Verwaltung von Mitarbeiterdatenbanken und Verkaufsberichten mit hoher Genauigkeit.',

        'experience-job5-title': 'IT-Support',
        'experience-job5-company': 'PT Cubiconia Kanaya Pratama',
        'experience-job5-date': '2021 - 2023',
        'experience-job5-desc1': 'Bearbeitung von Kundenanfragen per Chat mit schnellen und genauen Antworten.',
        'experience-job5-desc2': 'Pflege von SQL-Datenbanken zur Sicherung der Datenintegrität.',
        'experience-job5-desc3': 'Entwicklung von UI/UX für mobile und Webanwendungen.',
        'experience-job5-desc4': 'Mitwirkung an internen Systemen zur Verbesserung der Benutzerfreundlichkeit.',

        'experience-job6-title': 'Content-Produzentin (Freelance)',
        'experience-job6-company': 'PT Mommi Hokki Indonesia',
        'experience-job6-date': '2021 - 2022',
        'experience-job6-desc1': 'Erstellung und Verwaltung digitaler Inhalte zur Unterstützung des Unternehmensbrandings.',
        'experience-job6-desc2': 'Entwicklung von Content-Strategien zur Steigerung der Kundenbindung.',
        'experience-job6-desc3': 'Zusammenarbeit mit dem Marketingteam bei digitalen Kampagnen.',
        'experience-job6-desc4': 'Produktion von Inhalten zur Stärkung der Marktpräsenz des Unternehmens.',

        'achievements-title': 'Zertifikate & Erfolge',
        'achievements-cert1-name': 'Dicoding Indonesia',
        'achievements-cert1-desc': 'Webentwicklung, Projektmanagement (2023)',

        'achievements-cert2-name': 'PraKerja',
        'achievements-cert2-desc': 'Laravel, HTML/CSS/JavaScript (2023)',

        'achievements-cert3-name': 'MySkill',
        'achievements-cert3-desc': 'Microsoft Excel Kurzlehrgang (2024)',

        'achievements-cert4-name': 'DOT Indonesia',
        'achievements-cert4-desc': 'Kotlin-Zertifizierung (2021)',

        'achievements-section-title': 'Zertifikate',
        'achievements-section-title1': 'Weitere Erfolge',

        'achievements-item1': 'Gewinnerin Lieblingsvideo – Honda AHM (2019)',
        'achievements-item2': 'Gewinnerin Lieblingsvideo – Universitas Katolik Darma Cendika (2020 & 2021)',
        'achievements-item3': 'Top-10-Finalistin – Bank Indonesia Videowettbewerb (2020 & 2021)',
        'achievements-item4': 'Beste Videoproduzentin – PT Mommi Hokki Indonesia (2023)',
        'achievements-item5': 'Note A im Praktikum als Quality Assurance bei PT Sekawan Media (2024)',
        'achievements-item6': 'Abschluss von über 5 Kundenprojekten in weniger als 1 Monat während des Praktikums (2024)',
        
        'language-title': 'Sprachen',
        'bhs-indo': 'Indonesisch',
        'bhs-inggris': 'Englisch',
        'bhs-jerman': 'Deutsch',
        'bhs-indo1': 'Muttersprache',
        'bhs-inggris1': 'B2 | Fortgeschrittene Mittelstufe',
        'bhs-jerman1': 'Anfänger',

        'contact-title': 'Kontakt',
        'contact-email-label': 'E-Mail:',
        'contact-phone-label': 'Telefon:',
        'contact-linkedin-label': 'LinkedIn:',

        'soon-title': 'Bald verfügbar!',
        'soon-text': 'Dieser Inhalt befindet sich in der Entwicklung. Bleiben Sie dran für die neuesten Updates!',
        'soon-back': 'Zur Startseite'
    }

        };

        // Fungsi untuk menerapkan terjemahan
        function applyTranslation(lang) {
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            document.getElementById('lang-menu-btn').textContent = lang.toUpperCase();
            document.documentElement.lang = lang;
            localStorage.setItem('jan_lang', lang);
        }

        // Mengambil bahasa yang tersimpan atau default ke 'id'
        const storedLang = localStorage.getItem('jan_lang') || 'id';
        applyTranslation(storedLang);

        // Toggle menu bahasa
        const langMenuBtn = document.getElementById('lang-menu-btn');
        const langMenu = document.getElementById('lang-menu');
        langMenuBtn.addEventListener('click', () => {
            langMenu.classList.toggle('hidden');
        });

        // Mengganti bahasa
        langMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.target.getAttribute('data-lang');
                applyTranslation(lang);
                langMenu.classList.add('hidden');
            });
        });

        // Tutup menu jika klik di luar
        document.addEventListener('click', (e) => {
            if (!langMenuBtn.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.add('hidden');
            }
        });

        // Toggle mode gelap/terang
        const root = document.documentElement;
        const themeToggleBtn = document.getElementById('themeToggle');
        const savedTheme = localStorage.getItem('jan_theme') || 'dark';

        function setTheme(theme) {
            root.setAttribute('data-theme', theme);
            localStorage.setItem('jan_theme', theme);
            themeToggleBtn.textContent = theme === 'light' ? '☀️' : '🌙';
            themeToggleBtn.setAttribute('aria-pressed', theme === 'light');
        }

        setTheme(savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });

        // Animasi hitungan untuk statistik
        const counters = [
            ['kYears', 4],
            ['kProjects', 5],
            ['kBugs', 30],
            ['kCertificates', 4]
        ];
        let countersRun = false;

        function runCounters() {
        if (countersRun) return;
        countersRun = true;
        counters.forEach(([id, val]) => {
            const el = document.getElementById(id);
            if (!el) return;
            let i = 0;
            const step = Math.max(1, Math.floor(val / 60)); // Mempercepat hitungan
            const t = setInterval(() => {
                i += step;
                if (i >= val) {
                    clearInterval(t);

                    // cek kalau ID nya "kBugs", kasih tambahan "+"
                    if (id === "kBugs") {
                        el.textContent = val + "+";
                    } else {
                        el.textContent = val;
                    }
                } else {
                    el.textContent = i;
                }
            }, 25);
        });
    }
        // Efek reveal saat di-scroll
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {  
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // Menjalankan animasi hitungan saat bagian stats terlihat
        const statsSection = document.getElementById('stats');
        if (statsSection) {
            const statsObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    runCounters();
                    statsObserver.unobserve(statsSection);
                }
            }, {
                threshold: 0.5
            });
            statsObserver.observe(statsSection);
        }

        // Pembaruan tahun di footer
        document.getElementById('yr').textContent = new Date().getFullYear();

        // Scroll halus untuk navigasi
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20, // Offset untuk ruang di atas section
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Pemilih foto profil
        const profileImage = document.getElementById('pf');
        if (profileImage) {
            profileImage.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            profileImage.src = event.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                };
                input.click();
            });
        }
    });

