/**
 * Concrete Cover Blocks - Main JavaScript
 * Fast, lightweight interactions
 */

(function() {
  'use strict';

  // DOM Ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initHeader();
    initMobileNav();
    initScrollAnimations();
    initFloatingButtons();
  }

  // Header scroll effect
  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Mobile navigation
  function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav-links');
    
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Close nav on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  }

  // Scroll animations using Intersection Observer
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  // Floating buttons interactions
  function initFloatingButtons() {
    const whatsappBtn = document.querySelector('.float-btn-whatsapp');
    const brochureBtn = document.querySelector('.float-btn-brochure');

    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your WhatsApp number (include country code, no + or spaces)
        const phoneNumber = '1234567890';
        const message = encodeURIComponent('Hi, I am interested in your concrete cover blocks. Please share more details.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      });
    }

    if (brochureBtn) {
      brochureBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual brochure PDF path
        const brochurePath = 'brochure.pdf';
        
        // Create temporary link and trigger download
        const link = document.createElement('a');
        link.href = brochurePath;
        link.download = 'concrete-cover-blocks-brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  }

  // Smooth scroll for anchor links
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

})();
