/* ============================================
   宜路科技 YILU Technology - Interactive Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // === Preloader ===
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800);
    });
    // Fallback: hide preloader after 3s regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 3000);

    // === Navbar Scroll Effect ===
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // === Mobile Navigation Toggle ===
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // === Back to Top ===
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // === Scroll-triggered Animations (AOS-like) ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        animationObserver.observe(el);
    });

    // === Counter Animation ===
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }

    function animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        const isDecimal = target % 1 !== 0;

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOut;

            if (isDecimal) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = isDecimal ? target.toFixed(1) : target;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // === Hero Particles ===
    const particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer) {
        createParticles();
    }

    function createParticles() {
        const particleCount = 40;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';

            const size = 2 + Math.random() * 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // Vary colors between primary and accent
            const colors = ['#0ea5e9', '#6366f1', '#38bdf8', '#818cf8'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            particlesContainer.appendChild(particle);
        }
    }

    // === Smooth Scroll for all anchor links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Contact Form Handler ===
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Animate button
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>發送中...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                submitBtn.innerHTML = '<span>已送出！我們將盡快回覆</span><i class="fas fa-check"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';

                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // === Navbar link hover effect - subtle glow ===
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(14, 165, 233, 0.3)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });

    // === Card Tilt Effect (subtle) ===
    const tiltCards = document.querySelectorAll('.service-card, .dell-card, .security-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // === Typing effect for hero (optional enhancement) ===
    // The hero is already well-designed with static text, keeping it clean.

    // === Parallax-like effect on scroll ===
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroGradient = document.querySelector('.hero-gradient');
        if (heroGradient && scrolled < window.innerHeight) {
            heroGradient.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }, { passive: true });

    // === Service Search System ===
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const searchBtn = document.getElementById('navSearchBtn');
    const searchClose = document.getElementById('searchClose');

    // Service data with keyword mappings
    const serviceData = [
        {
            title: 'IT 基礎架構規劃與建置',
            desc: '資料中心伺服器規劃、企業儲存架構、虛擬化環境、網路部署',
            icon: 'fas fa-server',
            iconClass: 'icon-infra',
            target: '#services',
            keywords: ['架設網站', '網站', 'website', '基礎架構', '架構', 'infrastructure', '建置', '伺服器規劃', '資料中心', 'data center', '儲存架構', 'SAN', 'NAS', '虛擬化', 'VMware', 'Hyper-V', '網路架構', '交換器', '部署']
        },
        {
            title: '企業資安防護服務',
            desc: '端點偵測回應 (EDR/XDR)、資安意識培訓、供應鏈風險監控',
            icon: 'fas fa-shield-halved',
            iconClass: 'icon-security',
            target: '#services',
            keywords: ['資安', '防駭', '防護', '安全', 'security', '端點', 'EDR', 'XDR', '社交工程', '鑑識', '事件應變', '防毒', '威脅']
        },
        {
            title: 'IT 策略顧問與諮詢',
            desc: 'IT 架構評估優化、資安合規諮詢、採購規劃、雲端遷移策略',
            icon: 'fas fa-laptop-code',
            iconClass: 'icon-consulting',
            target: '#services',
            keywords: ['顧問', '諮詢', 'consulting', '策略', '合規', 'ISO', 'ISO 27001', 'compliance', '評估', '優化建議', '採購', '雲端遷移', '混合雲', '系統優化', '優化', 'optimization']
        },
        {
            title: '維運管理與技術支援',
            desc: '7x24 系統監控、故障排除、韌體更新、定期健檢與效能優化',
            icon: 'fas fa-wrench',
            iconClass: 'icon-support',
            target: '#services',
            keywords: ['維運', '技術支援', 'support', '監控', '故障排除', '修復', '韌體', '升級', '健檢', '效能優化', '系統優化', '優化', '維護', 'maintenance']
        },
        {
            title: 'Dell PowerEdge 伺服器',
            desc: 'AI 伺服器、資料中心伺服器、邊際伺服器 — 企業運算核心',
            icon: 'fas fa-server',
            iconClass: 'icon-dell',
            target: '#dell',
            keywords: ['伺服器', 'server', 'PowerEdge', 'Dell', '機架式', '塔式', '資料中心', 'data center', '邊際', 'edge', 'R760', 'R660', 'XE9680']
        },
        {
            title: 'AI 伺服器與高效能運算',
            desc: '專為 AI/ML 訓練與推論打造，配備 GPU 加速的企業級伺服器',
            icon: 'fas fa-microchip',
            iconClass: 'icon-ai',
            target: '#dell',
            keywords: ['AI', '人工智慧', '智能', 'artificial intelligence', 'GenAI', '生成式', 'GPU', '機器學習', 'ML', 'HPC', '高效能運算', 'deep learning', '深度學習']
        },
        {
            title: 'Dell 企業級儲存方案',
            desc: 'PowerStore、PowerScale、PowerProtect、PowerVault 全系列',
            icon: 'fas fa-database',
            iconClass: 'icon-dell',
            target: '#dell',
            keywords: ['儲存', 'storage', 'PowerStore', 'PowerScale', 'PowerProtect', 'PowerVault', '快閃', '備份', 'backup', 'NAS', 'SAN', '物件儲存', '資料保護']
        },
        {
            title: '網路、工作站與商用電腦',
            desc: 'Dell 網路交換器、Precision 工作站、Latitude 筆電、OptiPlex 桌機',
            icon: 'fas fa-laptop',
            iconClass: 'icon-dell',
            target: '#dell',
            keywords: ['網路', 'network', '交換器', 'switch', '工作站', 'workstation', 'Precision', '筆電', 'laptop', 'Latitude', '桌機', 'desktop', 'OptiPlex', '顯示器', 'monitor', 'UltraSharp', '商用電腦', 'Docking']
        },
        {
            title: 'CrowdStrike 端點防護平台',
            desc: 'AI 驅動的 EDR/XDR 解決方案，100% MITRE 偵測覆蓋率',
            icon: 'fas fa-crosshairs',
            iconClass: 'icon-security',
            target: '#security',
            keywords: ['CrowdStrike', 'Falcon', '端點', 'endpoint', 'EDR', 'XDR', '防毒', 'NGAV', '威脅獵捕', '防駭', '駭客', 'hacking', '入侵', '資安防護', 'MITRE']
        },
        {
            title: 'KnowBe4 資安意識培訓',
            desc: '模擬釣魚演練與資安培訓平台，降低人為資安風險',
            icon: 'fas fa-user-shield',
            iconClass: 'icon-security',
            target: '#security',
            keywords: ['KnowBe4', '培訓', 'training', '釣魚', 'phishing', '社交工程', '資安意識', '演練', '教育訓練', '人為風險']
        },
        {
            title: 'SecurityScorecard 供應鏈風險管理',
            desc: '供應鏈偵測與回應 (SCDR)、第三方風險評估、安全評級',
            icon: 'fas fa-chart-line',
            iconClass: 'icon-security',
            target: '#security',
            keywords: ['SecurityScorecard', '供應鏈', 'supply chain', 'SCDR', '風險', 'risk', '評級', 'rating', '第三方', '監控', 'TPRM', '攻擊面']
        }
    ];

    function openSearch() {
        searchOverlay.classList.add('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchSuggestions.style.display = '';
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearch() {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        searchInput.value = '';
    }

    function performSearch(query) {
        const trimmed = query.trim().toLowerCase();
        if (!trimmed) {
            searchResults.innerHTML = '';
            searchSuggestions.style.display = '';
            return;
        }

        searchSuggestions.style.display = 'none';

        // Score each service by keyword match relevance
        const scored = serviceData.map(item => {
            let score = 0;
            const titleLower = item.title.toLowerCase();
            const descLower = item.desc.toLowerCase();

            // Check title match
            if (titleLower.includes(trimmed)) score += 10;

            // Check description match
            if (descLower.includes(trimmed)) score += 5;

            // Check keyword matches
            for (const kw of item.keywords) {
                const kwLower = kw.toLowerCase();
                if (kwLower === trimmed) {
                    score += 20; // exact match
                } else if (kwLower.includes(trimmed) || trimmed.includes(kwLower)) {
                    score += 8; // partial match
                }
            }

            return { ...item, score };
        });

        const matches = scored.filter(item => item.score > 0).sort((a, b) => b.score - a.score);

        if (matches.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-magnifying-glass"></i>
                    <p>找不到「${escapeHtml(query.trim())}」相關的服務</p>
                    <p class="search-no-results-hint">試試其他關鍵字，如：伺服器、資安、AI、儲存</p>
                </div>
            `;
            return;
        }

        let html = `<p class="search-section-label">搜尋結果 (${matches.length})</p>`;
        for (const item of matches) {
            html += `
                <a href="${item.target}" class="search-result-item" data-target="${item.target}">
                    <div class="search-result-icon ${item.iconClass}">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-title">${highlightMatch(item.title, query.trim())}</div>
                        <div class="search-result-desc">${item.desc}</div>
                    </div>
                    <i class="fas fa-arrow-right search-result-arrow"></i>
                </a>
            `;
        }
        searchResults.innerHTML = html;

        // Bind click events on results
        searchResults.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('data-target'));
                if (target) {
                    closeSearch();
                    setTimeout(() => {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }, 200);
                }
            });
        });
    }

    function highlightMatch(text, query) {
        if (!query) return escapeHtml(text);
        const escaped = escapeHtml(text);
        const queryEscaped = escapeRegExp(query);
        const regex = new RegExp(`(${queryEscaped})`, 'gi');
        return escaped.replace(regex, '<mark style="background:rgba(14,165,233,0.25);color:var(--primary-light);border-radius:2px;padding:0 1px;">$1</mark>');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Event listeners
    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);

    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) closeSearch();
    });

    searchInput.addEventListener('input', function() {
        performSearch(this.value);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
        // Ctrl/Cmd + K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchOverlay.classList.contains('active')) {
                closeSearch();
            } else {
                openSearch();
            }
        }
    });

    // Search tag buttons
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const query = this.getAttribute('data-query');
            searchInput.value = query;
            performSearch(query);
        });
    });

    // === Scroll Progress Bar ===
    const scrollProgressBar = document.getElementById('scrollProgress');
    if (scrollProgressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgressBar.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // === FAQ Accordion ===
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all
                faqItems.forEach(i => i.classList.remove('active'));
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // === Hero Typing Effect ===
    const heroTitleGradient = document.querySelector('.hero-title-gradient');
    if (heroTitleGradient) {
        const phrases = ['堅不可摧的', '安全可靠的', '高效智能的', '值得信賴的'];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                heroTitleGradient.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 80;
            } else {
                heroTitleGradient.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2500; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 400; // Pause before next word
            }

            setTimeout(typeEffect, typingSpeed);
        }

        // Start typing after initial animation
        setTimeout(typeEffect, 3000);
    }

    // === Navbar Hide/Show on Scroll ===
    let lastScrollY = 0;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                if (currentScrollY > 600 && currentScrollY > lastScrollY + 5) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // === Initialize ===
    handleScroll();
});
