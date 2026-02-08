document.addEventListener('DOMContentLoaded', () => {
    const curtain = document.getElementById('curtain');
    const loaderContent = document.getElementById('loader-content');
    const progressBar = document.getElementById('progress-bar');
    const heroContent = document.querySelector('.reveal-on-load');
    const heroImage = document.querySelector('.hero-image-container');
    const scrollTrigger = document.querySelector('.scroll-trigger-luxury');

    // دقيقة واحدة للتجربة (60 ثانية × 1000 ميلي ثانية)
    const IDLE_LIMIT = 1 * 60 * 1000;
    let idleTimeout;
    let isScrollingByClick = false;

    function resetIdleTimer() {
        clearTimeout(idleTimeout);
        idleTimeout = setTimeout(() => {
            // ما يرجعش للهيرو لو هو أصلاً فوق
            if (window.pageYOffset > 80) {
                isScrollingByClick = true;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrollingByClick = false;
                }, 1000);
            }
        }, IDLE_LIMIT);
    }

    // لودر البداية
    window.onload = () => {
        setTimeout(() => {
            progressBar.style.width = "100%";
        }, 300);

        setTimeout(() => {
            loaderContent.classList.add('fade-out-content');
            setTimeout(() => {
                curtain.classList.add('slide-up');
                document.body.classList.remove('loading-state');
                setTimeout(() => {
                    heroContent.classList.add('active');
                    resetIdleTimer(); // نبدأ عدّ الخمول أول ما الهيرو يشتغل
                }, 700);
            }, 900);
        }, 2800);
    };

    // إفكتات الاسكرول على الهيرو + إعادة ضبط المؤقت
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (scrolled < window.innerHeight) {
            requestAnimationFrame(() => {
                const blurVal = Math.min(scrolled * 0.04, 20);
                const scaleVal = 1.1 - (scrolled * 0.00015);
                heroImage.style.filter = `brightness(0.3) blur(${blurVal}px)`;
                heroImage.style.transform = `scale(${scaleVal}) translateZ(0)`;
                heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
                heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.9));
            });
        }

        resetIdleTimer();
    }, { passive: true });

    // ريفيل الكروت
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stagger-container')) {
                    const children = entry.target.querySelectorAll('.anim-item');
                    children.forEach((child, i) => {
                        child.style.transitionDelay = `${i * 120}ms`;
                        child.classList.add('reveal-active');
                    });
                } else {
                    entry.target.classList.add('reveal-active');
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document
        .querySelectorAll('.stagger-container, .artisan-item, .cinema-card')
        .forEach(el => revealObserver.observe(el));

    // النافبار + سكروول سباي
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    const spyOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isScrollingByClick) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, spyOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // سكروول سموز مع offset للمنيو
    const smoothScrollTo = (targetId) => {
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        const offset = 120;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        isScrollingByClick = true;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        setTimeout(() => {
            isScrollingByClick = false;
        }, 1000);

        resetIdleTimer();
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    // زر "اسحب للأعلى للاستكشاف" يودّي لقسم الحار
    if (scrollTrigger) {
        scrollTrigger.addEventListener('click', () => {
            smoothScrollTo('#hot');
        });
    }

    // أي تاتش/كليك/حركة ماوس/كيبورد = نعيد تشغيل المؤقت
    ['touchstart', 'touchmove', 'click', 'mousemove', 'keydown'].forEach(evt => {
        window.addEventListener(evt, resetIdleTimer, { passive: true });
    });

    // تسجيل الـ Service Worker (ملف منفصل اسمه sw.js)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(() => {});
        });
    }
});