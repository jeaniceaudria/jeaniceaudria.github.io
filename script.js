document.addEventListener('DOMContentLoaded', () => {
    // Definisi data untuk multi-bahasa
    const translations = {
        'id': {
            'header-name': 'Janice Marsha Audria',
            'header-title': 'QA Enthusiast • Manual Testing • Web Projects',
            'nav-about': 'Tentang',
            'nav-stats': 'Statistik',
            'nav-portfolio': 'Portofolio',
            'nav-experience': 'Pengalaman',
            'nav-achievements': 'Prestasi',
            'lang-button': 'ID',
            'hero-tagline': 'Saya membuat perangkat lunak lebih aman — satu kasus uji dalam satu waktu.',
            'hero-bio': 'Seorang QA enthusiast yang saat ini menempuh studi Informatika di Telkom University. Saya membuat artefak uji yang jelas, melakukan pengujian manual yang teliti, dan membangun proyek web kecil untuk mengasah keterampilan saya.',
            'hero-contact-btn': 'Hubungi / Rekrut',
            'hero-portfolio-btn': 'Portofolio Langsung',
            'hero-certificates-btn': 'Sertifikat',
            'aside-name': 'Janice Marsha Audria',
            'aside-title': 'QA Enthusiast — Manual Testing',
            'stats-title': 'Statistik Saya',
            'stats-years': 'Tahun Pengalaman',
            'stats-projects': 'Proyek Selesai',
            'stats-bugs': 'Total Bug Ditemukan',
            'stats-certs': 'Sertifikat Profesional',
            'about-title': 'Tentang Saya',
            'about-text': 'Saya lulusan SMK Telkom Sandhy Putra Malang (Rekayasa Perangkat Lunak) dan saat ini melanjutkan studi di Telkom University - Informatics (S1 PJJ). Berpengalaman magang sebagai Project Administrator & Support dan asisten laboratorium. Fokus saya pada manual testing, dokumentasi QA, pengelolaan data, dan pengembangan web sederhana sebagai alat latihan.',
            'about-motivation-heading': 'Motivasi',
            'about-motivation-text': '"Memastikan setiap produk digital yang saya sentuh memberikan pengalaman yang lancar dan andal bagi penggunanya melalui pengujian yang cermat dan pembelajaran berkelanjutan."',
            'portfolio-title': 'Portofolio & Proyek',
            'portfolio-project1-name': 'Personal Portfolio',
            'portfolio-project1-desc': 'Situs statis (proyek ini) — responsif dengan mode gelap/terang.',
            'portfolio-project2-name': 'Netflix Clone',
            'portfolio-project2-desc': 'UI Frontend untuk latihan tata letak & pengujian.',
            'portfolio-project3-name': 'PT Mommi Hokki — Profil Perusahaan',
            'portfolio-project3-desc': 'Situs web proyek akhir untuk klien / portofolio akademis.',
            'portfolio-live': 'Demo',
            'portfolio-code': 'Kode',
            'experience-title': 'Pengalaman Kerja',
            'experience-job1-title': 'Project Administrator & Support',
            'experience-job1-company': 'PT Solusi Inovasi Utama (Internship)',
            'experience-job1-date': 'Mei - Agustus 2023',
            'experience-job1-desc1': 'Mengelola data perusahaan menggunakan Odoo ERP dan Excel.',
            'experience-job1-desc2': 'Membuat & mengelola dokumentasi proyek (termasuk kasus uji).',
            'experience-job1-desc3': 'Melakukan pengujian manual pada sistem untuk memastikan fungsionalitas.',
            'experience-job2-title': 'Asisten Laboratorium',
            'experience-job2-company': 'SMK Telkom Sandhy Putra Malang',
            'experience-job2-date': '2021 - 2022',
            'experience-job2-desc1': 'Membantu instruktur dalam persiapan dan pelaksanaan praktikum.',
            'experience-job2-desc2': 'Memberikan panduan kepada siswa dalam menggunakan perangkat lunak.',
            'experience-job2-desc3': 'Memastikan peralatan laboratorium dalam kondisi baik.',
            'achievements-title': 'Sertifikat & Prestasi',
            'achievements-cert1-name': 'Dicoding',
            'achievements-cert1-desc': 'Pengembangan Web, Manajemen Proyek (2023)',
            'achievements-cert2-name': 'PraKerja',
            'achievements-cert2-desc': 'Laravel, HTML/CSS/JS (2023)',
            'achievements-cert3-name': 'MySkill',
            'achievements-cert3-desc': 'Kelas Singkat Microsoft Excel (2024)',
            'achievements-cert4-name': 'Polinema LSP',
            'achievements-cert4-desc': 'Pengelolaan Administrasi Perkantoran (2024)',
            'achievements-section-title': 'Prestasi Lainnya',
            'achievements-item1': 'Pemenang kompetisi video tingkat SMA/SMK.',
            'achievements-item2': 'Berhasil menyelesaikan 5+ proyek klien dalam waktu kurang dari 1 bulan selama magang.',
            'achievements-item3': 'Menangani tugas asisten laboratorium dan meningkatkan penyampaian praktikum.',
            'contact-title': 'Hubungi',
            'contact-email-label': 'Email:',
            'contact-phone-label': 'Telepon:',
            'contact-linkedin-label': 'LinkedIn:',
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
            'hero-tagline': 'I make software safer — one test case at a time.',
            'hero-bio': 'A QA enthusiast currently studying Informatics at Telkom University. I craft clear test artifacts, perform thorough manual tests, and build small web projects to hone my skills.',
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
            'about-text': 'I am a graduate of SMK Telkom Sandhy Putra Malang (Software Engineering) and am currently continuing my studies at Telkom University - Informatics (Distance Learning). I have experience as a Project Administrator & Support intern and a laboratory assistant. My focus is on manual testing, QA documentation, data management, and building simple web projects as a practice tool.',
            'about-motivation-heading': 'Motivation',
            'about-motivation-text': '"To ensure that every digital product I touch provides a smooth and reliable experience for its users through careful testing and continuous learning."',
            'portfolio-title': 'Portfolio & Projects',
            'portfolio-project1-name': 'Personal Portfolio',
            'portfolio-project1-desc': 'Static site (this project) — responsive with dark/light mode.',
            'portfolio-project2-name': 'Netflix Clone',
            'portfolio-project2-desc': 'Frontend UI for practicing layout & testing.',
            'portfolio-project3-name': 'PT Mommi Hokki — Company Profile',
            'portfolio-project3-desc': 'Final project website for a client / academic portfolio.',
            'portfolio-live': 'Live Demo',
            'portfolio-code': 'Code',
            'experience-title': 'Work Experience',
            'experience-job1-title': 'Project Administrator & Support',
            'experience-job1-company': 'PT Solusi Inovasi Utama (Internship)',
            'experience-job1-date': 'May - August 2023',
            'experience-job1-desc1': 'Managed company data using Odoo ERP and Excel.',
            'experience-job1-desc2': 'Created & managed project documentation (including test cases).',
            'experience-job1-desc3': 'Performed manual testing on systems to ensure functionality.',
            'experience-job2-title': 'Laboratory Assistant',
            'experience-job2-company': 'SMK Telkom Sandhy Putra Malang',
            'experience-job2-date': '2021 - 2022',
            'experience-job2-desc1': 'Assisted instructors with the preparation and execution of practicals.',
            'experience-job2-desc2': 'Provided guidance to students on using software.',
            'experience-job2-desc3': 'Ensured lab equipment was in good condition.',
            'achievements-title': 'Certificates & Achievements',
            'achievements-cert1-name': 'Dicoding',
            'achievements-cert1-desc': 'Web Development, Project Management (2023)',
            'achievements-cert2-name': 'PraKerja',
            'achievements-cert2-desc': 'Laravel, HTML/CSS/JS (2023)',
            'achievements-cert3-name': 'MySkill',
            'achievements-cert3-desc': 'Microsoft Excel Shortclass (2024)',
            'achievements-cert4-name': 'Polinema LSP',
            'achievements-cert4-desc': 'Office Administration Management (2024)',
            'achievements-section-title': 'Other Achievements',
            'achievements-item1': 'High school video competition winner.',
            'achievements-item2': 'Successfully completed 5+ client projects in under 1 month during internship.',
            'achievements-item3': 'Handled lab assistant duties and improved practicum delivery.',
            'contact-title': 'Contact',
            'contact-email-label': 'Email:',
            'contact-phone-label': 'Phone:',
            'contact-linkedin-label': 'LinkedIn:',
        },
        'de': {
            'header-name': 'Janice Marsha Audria',
            'header-title': 'QA-Enthusiast • Manuelle Tests • Webprojekte',
            'nav-about': 'Über mich',
            'nav-stats': 'Statistiken',
            'nav-portfolio': 'Portfolio',
            'nav-experience': 'Erfahrung',
            'nav-achievements': 'Leistungen',
            'lang-button': 'DE',
            'hero-tagline': 'Ich mache Software sicherer – ein Testfall nach dem anderen.',
            'hero-bio': 'Eine QA-Enthusiastin, die derzeit Informatik an der Telkom University studiert. Ich erstelle klare Testartefakte, führe gründliche manuelle Tests durch und baue kleine Webprojekte, um meine Fähigkeiten zu verbessern.',
            'hero-contact-btn': 'Kontaktieren / Einstellen',
            'hero-portfolio-btn': 'Live-Portfolio',
            'hero-certificates-btn': 'Zertifikate',
            'aside-name': 'Janice Marsha Audria',
            'aside-title': 'QA-Enthusiast — Manuelle Tests',
            'stats-title': 'Meine Statistiken',
            'stats-years': 'Jahre Erfahrung',
            'stats-projects': 'Abgeschlossene Projekte',
            'stats-bugs': 'Gefundene Bugs',
            'stats-certs': 'Berufliche Zertifikate',
            'about-title': 'Über mich',
            'about-text': 'Ich bin Absolventin der SMK Telkom Sandhy Putra Malang (Software-Engineering) und setze mein Studium in Informatik an der Telkom University fort (Fernstudium). Ich habe Erfahrung als Praktikantin für Projektadministration & Support und als Laborassistentin. Mein Fokus liegt auf manuellen Tests, QA-Dokumentation, Datenmanagement und dem Erstellen einfacher Webprojekte als Übung.',
            'about-motivation-heading': 'Motivation',
            'about-motivation-text': '"Sicherzustellen, dass jedes digitale Produkt, das ich berühre, den Benutzern durch sorgfältige Tests und kontinuierliches Lernen eine reibungslose und zuverlässige Erfahrung bietet."',
            'portfolio-title': 'Portfolio & Projekte',
            'portfolio-project1-name': 'Persönliches Portfolio',
            'portfolio-project1-desc': 'Statische Website (dieses Projekt) – responsiv mit Dunkel-/Hellmodus.',
            'portfolio-project2-name': 'Netflix-Klon',
            'portfolio-project2-desc': 'Frontend-UI zur Übung von Layout & Tests.',
            'portfolio-project3-name': 'PT Mommi Hokki — Firmenprofil',
            'portfolio-project3-desc': 'Abschlussprojekt-Website für einen Kunden / akademisches Portfolio.',
            'portfolio-live': 'Live-Demo',
            'portfolio-code': 'Code',
            'experience-title': 'Berufserfahrung',
            'experience-job1-title': 'Projektadministrator & Support',
            'experience-job1-company': 'PT Solusi Inovasi Utama (Praktikum)',
            'experience-job1-date': 'Mai - August 2023',
            'experience-job1-desc1': 'Verwaltung von Unternehmensdaten mithilfe von Odoo ERP und Excel.',
            'experience-job1-desc2': 'Erstellung und Verwaltung von Projektdokumentationen (einschließlich Testfällen).',
            'experience-job1-desc3': 'Durchführung manueller Tests an Systemen zur Sicherstellung der Funktionalität.',
            'experience-job2-title': 'Laborassistentin',
            'experience-job2-company': 'SMK Telkom Sandhy Putra Malang',
            'experience-job2-date': '2021 - 2022',
            'experience-job2-desc1': 'Unterstützung der Dozenten bei der Vorbereitung und Durchführung von Praktika.',
            'experience-job2-desc2': 'Anleitung von Schülern bei der Verwendung von Software.',
            'experience-job2-desc3': 'Sicherstellung der ordnungsgemäßen Funktion der Laborausrüstung.',
            'achievements-title': 'Zertifikate & Leistungen',
            'achievements-cert1-name': 'Dicoding',
            'achievements-cert1-desc': 'Webentwicklung, Projektmanagement (2023)',
            'achievements-cert2-name': 'PraKerja',
            'achievements-cert2-desc': 'Laravel, HTML/CSS/JS (2023)',
            'achievements-cert3-name': 'MySkill',
            'achievements-cert3-desc': 'Microsoft Excel Kurzlehrgang (2024)',
            'achievements-cert4-name': 'Polinema LSP',
            'achievements-cert4-desc': 'Büroverwaltungsmanagement (2024)',
            'achievements-section-title': 'Weitere Leistungen',
            'achievements-item1': 'Gewinnerin des Videowettbewerbs der Oberschule.',
            'achievements-item2': 'Erfolgreiche Fertigstellung von über 5 Kundenprojekten in weniger als 1 bulan selama magang.',
            'achievements-item3': 'Umgang dengan Laborassistenzaufgaben und Verbesserung der Praktikumsdurchführung.',
            'contact-title': 'Kontakt',
            'contact-email-label': 'E-Mail:',
            'contact-phone-label': 'Telefon:',
            'contact-linkedin-label': 'LinkedIn:',
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

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('jan_theme', theme);
        themeToggleBtn.textContent = theme === 'light' ? '☀️' : '🌙';
    }

    // Inisialisasi tema saat halaman dimuat
    const savedTheme = localStorage.getItem('jan_theme') || 'dark';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // Animasi hitungan untuk statistik
    const counters = [
        ['kYears', 3],
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
                    el.textContent = val;
                    clearInterval(t);
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