/**
 * 바른보정 (BARUN RETOUCHING) JavaScript
 * Version: 1.0
 * Author: MiniMax Agent
 * Description: Premium Wedding Photo Retouching Website Interactions
 */

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavigation();
    initScrollReveal();
    initPortfolio();
    initBeforeAfterSliders();
    initTestimonialsSlider();
    initSmoothScroll();
    initContactForm();
});

/**
 * Navigation Module
 * Handles navbar scroll effect and mobile menu
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Check if mobile menu exists, if not create it
            let mobileMenu = document.querySelector('.mobile-menu');

            if (!mobileMenu) {
                mobileMenu = createMobileMenu(navMenu);
                document.body.appendChild(mobileMenu);

                // Close mobile menu when clicking on a link
                const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        mobileMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                        navToggle.setAttribute('aria-label', '메뉴 열기');
                    });
                });
            }

            mobileMenu.classList.toggle('active');
            navToggle.classList.toggle('active');

            // Update aria-label
            const isExpanded = mobileMenu.classList.contains('active');
            navToggle.setAttribute('aria-label', isExpanded ? '메뉴 닫기' : '메뉴 열기');
        });
    }
}

/**
 * Create Mobile Menu
 */
function createMobileMenu(originalMenu) {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';

    // Clone menu items
    const menuItems = originalMenu.querySelectorAll('li');
    const ul = document.createElement('ul');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = item.querySelector('a').cloneNode(true);
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Add CTA button
    const ctaButton = document.createElement('a');
    ctaButton.href = '#contact';
    ctaButton.className = 'btn btn-primary';
    ctaButton.textContent = '무료 견적 요청';
    ctaButton.addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.remove('active');
        document.getElementById('nav-toggle').classList.remove('active');
    });

    mobileMenu.appendChild(ul);
    mobileMenu.appendChild(ctaButton);

    return mobileMenu;
}

/**
 * Scroll Reveal Animation
 * Reveals elements as they enter the viewport
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }
}

/**
 * Portfolio Module
 * Handles portfolio filtering and grid layout
 */
function initPortfolio() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            portfolioItems.forEach(item => {
                const category = item.dataset.category;

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Before/After Slider Module
 * Interactive image comparison sliders
 */
function initBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.before-after-slider');

    sliders.forEach(slider => {
        const beforeImage = slider.querySelector('.before-image');
        const afterImage = slider.querySelector('.after-image');
        const handle = slider.querySelector('.slider-handle');

        if (!beforeImage || !afterImage || !handle) return;

        let isDragging = false;

        // Calculate position
        function getPositionX(event) {
            const rect = slider.getBoundingClientRect();
            const clientX = event.clientX || (event.touches && event.touches[0].clientX);
            return clientX - rect.left;
        }

        // Update slider position
        function updateSlider(x) {
            const rect = slider.getBoundingClientRect();
            let percentage = (x / rect.width) * 100;

            // Clamp percentage
            percentage = Math.max(0, Math.min(100, percentage));

            afterImage.style.width = percentage + '%';
            handle.style.left = percentage + '%';
        }

        // Mouse events
        slider.addEventListener('mousedown', function(e) {
            isDragging = true;
            updateSlider(getPositionX(e));
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            updateSlider(getPositionX(e));
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });

        // Touch events
        slider.addEventListener('touchstart', function(e) {
            isDragging = true;
            updateSlider(getPositionX(e));
        });

        document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            updateSlider(getPositionX(e));
        });

        document.addEventListener('touchend', function() {
            isDragging = false;
        });

        // Click to jump
        slider.addEventListener('click', function(e) {
            updateSlider(getPositionX(e));
        });
    });
}

/**
 * Testimonials Slider Module
 * Auto-playing testimonial carousel
 */
function initTestimonialsSlider() {
    const track = document.getElementById('testimonial-track');
    const slider = document.getElementById('testimonials-slider');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dotsContainer = document.getElementById('slider-dots');

    if (!track || !slider) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const cardsPerView = getCardsPerView();
    let currentIndex = 0;
    let autoPlayInterval;

    // Create dots
    function createDots() {
        dotsContainer.innerHTML = '';
        const dotCount = Math.max(1, cards.length - cardsPerView + 1);

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `후기 ${i + 1}로 이동`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Get cards per view based on screen size
    function getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 640) return 1;
        if (width <= 1024) return 2;
        return 3;
    }

    // Update slider position
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 30; // 30px = gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Update dots
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        const dotCount = Math.max(1, cards.length - cardsPerView + 1);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex && currentIndex < dotCount);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = Math.min(index, maxIndex);
        updateSlider();
        resetAutoPlay();
    }

    // Next slide
    function nextSlide() {
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
        updateSlider();
    }

    // Auto play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    slider.addEventListener('mouseleave', startAutoPlay);

    // Handle resize
    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            currentIndex = 0;
            createDots();
            updateSlider();
        }
    });

    // Initialize
    createDots();
    updateSlider();
    startAutoPlay();
}

/**
 * Smooth Scroll Module
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Contact Form Module
 * Handles form validation and submission
 */
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (!form) return;

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset errors
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(el => el.remove());

        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                showError(input, '필수 입력 항목입니다.');
                isValid = false;
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                showError(input, '올바른 이메일 형식을 입력해주세요.');
                isValid = false;
            } else if (input.type === 'tel' && !isValidPhone(input.value)) {
                showError(input, '올바른 연락처 형식을 입력해주세요.');
                isValid = false;
            }
        });

        if (isValid) {
            // Form is valid, let Netlify handle submission
            form.submit();
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Remove error when user starts typing
            const errorEl = this.parentNode.querySelector('.error-message');
            if (errorEl) {
                errorEl.style.opacity = '0';
                setTimeout(() => errorEl.remove(), 300);
            }
        });
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');

    if (isRequired && !value) {
        showError(field, '필수 입력 항목입니다.');
        return false;
    }

    if (field.type === 'email' && value && !isValidEmail(value)) {
        showError(field, '올바른 이메일 형식을 입력해주세요.');
        return false;
    }

    if (field.type === 'tel' && value && !isValidPhone(value)) {
        showError(field, '올바른 연락처 형식을 입력해주세요.');
        return false;
    }

    return true;
}

// Show error message
function showError(field, message) {
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) return;

    const errorEl = document.createElement('span');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    errorEl.style.cssText = 'color: #EF4444; font-size: 0.75rem; margin-top: 4px; display: block; opacity: 0; transition: opacity 0.3s ease;';

    field.parentNode.appendChild(errorEl);

    // Trigger animation
    setTimeout(() => {
        errorEl.style.opacity = '1';
    }, 10);
}

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation (Korean format)
function isValidPhone(phone) {
    const re = /^[\d\s-]{10,}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Add fadeIn keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/**
 * Utility Functions
 */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
