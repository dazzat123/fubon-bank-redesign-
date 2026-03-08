/**
 * 富邦銀行 - Apple 風格網站
 * Fubon Bank - Apple Style Website
 * Main JavaScript
 */

(function() {
  'use strict';

  // ============================================
  // 導航欄滾動效果 (Navbar Scroll Effect)
  // ============================================
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    function handleScroll() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 初始化檢查
  }

  // ============================================
  // 手機版導航切換 (Mobile Navigation Toggle)
  // ============================================
  function initMobileNav() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const overlay = document.querySelector('.navbar-overlay');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
      
      if (overlay) {
        overlay.classList.toggle('active');
      }

      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // 點擊遮罩關閉
    if (overlay) {
      overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }

  // ============================================
  // 滾動動畫 (Scroll Animations)
  // ============================================
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // ============================================
  // 平滑滾動到錨點 (Smooth Scroll to Anchor)
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  }

  // ============================================
  // 卡片懸停效果增強 (Enhanced Card Hover)
  // ============================================
  function initCardHover() {
    const cards = document.querySelectorAll('.card, .feature-card, .product-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // ============================================
  // 數字動畫 (Number Counter Animation)
  // ============================================
  function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-counter]');
    
    if (counters.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));

    function animateCounter(element) {
      const target = parseInt(element.getAttribute('data-counter'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          element.textContent = target.toLocaleString('zh-HK');
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString('zh-HK');
        }
      }, 16);
    }
  }

  // ============================================
  // 表單驗證 (Form Validation)
  // ============================================
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            
            // 顯示錯誤訊息
            let error = input.parentElement.querySelector('.error-message');
            if (!error) {
              error = document.createElement('span');
              error.className = 'error-message';
              error.textContent = '此欄位為必填';
              input.parentElement.appendChild(error);
            }
          } else {
            input.classList.remove('error');
            const error = input.parentElement.querySelector('.error-message');
            if (error) error.remove();
          }
        });

        if (!isValid) {
          e.preventDefault();
        }
      });

      // 即時驗證
      form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', function() {
          if (this.hasAttribute('required') && !this.value.trim()) {
            this.classList.add('error');
          } else {
            this.classList.remove('error');
          }
        });
      });
    });
  }

  // ============================================
  // 輪播/幻燈片 (Carousel/Slider)
  // ============================================
  function initCarousel() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('.carousel-slide');
      const prevBtn = carousel.querySelector('.carousel-prev');
      const nextBtn = carousel.querySelector('.carousel-next');
      const indicators = carousel.querySelectorAll('.carousel-indicator');
      
      if (slides.length === 0) return;

      let currentIndex = 0;
      let autoPlayInterval;

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
        });

        indicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === index);
        });

        currentIndex = index;
      }

      function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }

      function prevSlide() {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
      }

      function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
      }

      function stopAutoPlay() {
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
        }
      }

      if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
      });

      if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
      });

      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSlide(index);
          stopAutoPlay();
          startAutoPlay();
        });
      });

      // 觸控支援
      let touchStartX = 0;
      let touchEndX = 0;

      carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
          nextSlide();
        } else if (touchEndX - touchStartX > 50) {
          prevSlide();
        }
      }

      // 懸停時暫停自動播放
      carousel.addEventListener('mouseenter', stopAutoPlay);
      carousel.addEventListener('mouseleave', startAutoPlay);

      startAutoPlay();
    });
  }

  // ============================================
  // 標籤頁切換 (Tab Switching)
  // ============================================
  function initTabs() {
    const tabContainers = document.querySelectorAll('.tab-container');

    tabContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab');
      const panels = container.querySelectorAll('.tab-panel');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.getAttribute('data-tab');

          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));

          tab.classList.add('active');
          container.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
        });
      });
    });
  }

  // ============================================
  // 手風琴/摺疊面板 (Accordion)
  // ============================================
  function initAccordion() {
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');

      if (!header || !content) return;

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // 關閉所有其他項目
        accordions.forEach(otherItem => {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content')?.style.setProperty('max-height', '0');
        });

        // 切換當前項目
        if (!isOpen) {
          item.classList.add('active');
          content.style.setProperty('max-height', content.scrollHeight + 'px');
        } else {
          content.style.setProperty('max-height', '0');
        }
      });
    });
  }

  // ============================================
  // 載入動畫 (Loading Animation)
  // ============================================
  function initLoader() {
    const loader = document.querySelector('.page-loader');
    
    if (!loader) return;

    window.addEventListener('load', () => {
      loader.classList.add('loaded');
      
      setTimeout(() => {
        loader.remove();
      }, 500);
    });
  }

  // ============================================
  // 視差滾動效果 (Parallax Scroll)
  // ============================================
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    function handleParallax() {
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-parallax') || 0.5;
        const yPos = -(window.pageYOffset * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    }

    window.addEventListener('scroll', handleParallax, { passive: true });
  }

  // ============================================
  // 工具提示 (Tooltips)
  // ============================================
  function initTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');

    tooltipTriggers.forEach(trigger => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = trigger.getAttribute('data-tooltip');
      
      trigger.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
      });

      trigger.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
      });

      trigger.parentElement?.appendChild(tooltip);
    });
  }

  // ============================================
  // 初始化所有功能 (Initialize All)
  // ============================================
  function init() {
    initNavbarScroll();
    initMobileNav();
    initScrollAnimations();
    initSmoothScroll();
    initCardHover();
    initCounterAnimation();
    initFormValidation();
    initCarousel();
    initTabs();
    initAccordion();
    initLoader();
    initParallax();
    initTooltips();
  }

  // DOM 載入完成後執行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 暴露全域函數（如需）
  window.FubonBank = {
    init,
    initNavbarScroll,
    initMobileNav,
    initScrollAnimations,
    initSmoothScroll
  };

})();
