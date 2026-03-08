/**
 * 富邦銀行 - 主 JavaScript 文件
 * Fubon Bank - Main JavaScript
 */

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAccordion();
  initMobileMenu();
  initSmoothScroll();
  initFormValidation();
});

// ============================================
// Navigation Dropdown
// ============================================
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item.has-dropdown');
  
  navItems.forEach(item => {
    const dropdown = item.querySelector('.nav-dropdown');
    const link = item.querySelector('.nav-link');
    
    if (!dropdown || !link) return;
    
    // Desktop: hover-based
    // Mobile: click-based handled in mobile menu
    
    // Add keyboard navigation
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown(item);
      }
      
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      closeAllDropdowns();
    }
  });
}

function toggleDropdown(item) {
  const dropdown = item.querySelector('.nav-dropdown');
  const isOpen = item.classList.contains('open');
  
  closeAllDropdowns();
  
  if (!isOpen && dropdown) {
    item.classList.add('open');
    dropdown.style.opacity = '1';
    dropdown.style.visibility = 'visible';
    dropdown.style.transform = 'translateY(0)';
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-item.open').forEach(item => {
    item.classList.remove('open');
    const dropdown = item.querySelector('.nav-dropdown');
    if (dropdown) {
      dropdown.style.opacity = '0';
      dropdown.style.visibility = 'hidden';
      dropdown.style.transform = 'translateY(8px)';
    }
  });
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Update aria-expanded
    const isExpanded = menu.classList.contains('active');
    toggle.setAttribute('aria-expanded', isExpanded);
  });
  
  // Close menu when clicking on a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// Accordion / FAQ
// ============================================
function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const triggers = accordion.querySelectorAll('.accordion-trigger');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        
        // Close all other items (optional - remove for multi-open)
        accordion.querySelectorAll('.accordion-item').forEach(otherItem => {
          const otherTrigger = otherItem.querySelector('.accordion-trigger');
          const otherContent = otherItem.querySelector('.accordion-content');
          
          if (otherItem !== item) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherContent.setAttribute('hidden', '');
          }
        });
        
        // Toggle current item
        trigger.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
          content.setAttribute('hidden', '');
        } else {
          content.removeAttribute('hidden');
        }
      });
    });
  });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================
// Form Validation
// ============================================
function initFormValidation() {
  const forms = document.querySelectorAll('form[novalidate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!validateForm(form)) {
        e.preventDefault();
      }
    });
    
    // Real-time validation
    form.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });
      
      input.addEventListener('input', () => {
        if (input.classList.contains('has-error')) {
          validateField(input);
        }
      });
    });
  });
}

function validateForm(form) {
  let isValid = true;
  
  form.querySelectorAll('.form-input[required]').forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(input) {
  const value = input.value.trim();
  const type = input.type;
  let isValid = true;
  let errorMessage = '';
  
  // Required validation
  if (input.required && !value) {
    isValid = false;
    errorMessage = '此欄位為必填';
  }
  
  // Email validation
  if (isValid && type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = '請輸入有效的電子郵件地址';
    }
  }
  
  // Phone validation (HK format)
  if (isValid && type === 'tel' && value) {
    const phoneRegex = /^[5-9]\d{7}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      isValid = false;
      errorMessage = '請輸入有效的香港流動電話號碼';
    }
  }
  
  // Update UI
  const formGroup = input.closest('.form-group');
  if (formGroup) {
    // Remove existing error
    const existingError = formGroup.querySelector('.form-error');
    if (existingError) {
      existingError.remove();
    }
    
    if (!isValid) {
      input.classList.add('has-error');
      const errorEl = document.createElement('span');
      errorEl.className = 'form-error';
      errorEl.textContent = errorMessage;
      formGroup.appendChild(errorEl);
    } else {
      input.classList.remove('has-error');
    }
  }
  
  return isValid;
}

// ============================================
// Login Tab Switching
// ============================================
function initLoginTabs() {
  const tabs = document.querySelectorAll('.tab');
  const forms = document.querySelectorAll('.login-form');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      
      // Update tab states
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show/hide forms
      forms.forEach(form => {
        if (form.id === `${targetTab}-login`) {
          form.style.display = 'block';
        } else {
          form.style.display = 'none';
        }
      });
    });
  });
}

// Initialize login tabs if on login page
if (document.querySelector('.login-page')) {
  initLoginTabs();
}

// ============================================
// Utility Functions
// ============================================

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

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ============================================
// Analytics (Placeholder)
// ============================================
function trackEvent(category, action, label) {
  // Placeholder for analytics integration
  // Can be connected to Cloudflare Web Analytics, Google Analytics, etc.
  console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Track page views
if (window.location.pathname) {
  trackEvent('Page', 'View', window.location.pathname);
}

// ============================================
// Error Handling
// ============================================
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Can integrate with error tracking service
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// ============================================
// Console Welcome Message
// ============================================
console.log(`
╔════════════════════════════════════════╗
║   富邦銀行 Fubon Bank                  ║
║   Apple-Style Redesign                 ║
║                                        ║
║   Built with ❤️ using HTML, CSS, JS   ║
║   Deployed on Cloudflare Pages         ║
╚════════════════════════════════════════╝
`);
