// ============================================
// Main JavaScript File
// ============================================

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const header = document.getElementById('header');
const waitlistModal = document.getElementById('waitlistModal');
const closeModal = document.getElementById('closeModal');
const successMessage = document.getElementById('successMessage');

// Waitlist Form Elements
const heroWaitlistForm = document.getElementById('heroWaitlistForm');
const finalWaitlistForm = document.getElementById('finalWaitlistForm');
const modalWaitlistForm = document.getElementById('modalWaitlistForm');

// Buttons that open modal
const joinWaitlistBtn = document.getElementById('joinWaitlistBtn');
const ctaWaitlistBtn = document.getElementById('ctaWaitlistBtn');
const benefitsWaitlistBtn = document.getElementById('benefitsWaitlistBtn');
const loginBtn = document.getElementById('loginBtn');

// FAQ Elements
const faqItems = document.querySelectorAll('.faq-item');

// ============================================
// Mobile Menu Toggle
// ============================================
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (menuToggle) {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// ============================================
// Header Scroll Effect
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Modal Functions
// ============================================
function openModal() {
    if (waitlistModal) {
        waitlistModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModalFunc() {
    if (waitlistModal) {
        waitlistModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Open modal buttons (will be set up in DOMContentLoaded with enhanced version)

// Close modal
if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

// Close modal when clicking outside
if (waitlistModal) {
    waitlistModal.addEventListener('click', (e) => {
        if (e.target === waitlistModal) {
            closeModalFunc();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && waitlistModal && waitlistModal.classList.contains('active')) {
        closeModalFunc();
    }
});

// ============================================
// Waitlist Form Submission
// ============================================
function showSuccessMessage() {
    if (successMessage) {
        successMessage.classList.add('active');
        setTimeout(() => {
            successMessage.classList.remove('active');
        }, 5000);
    }
}

function handleWaitlistSubmit(e, emailInput, nameInput = null, phoneInput = null) {
    e.preventDefault();
    
    const submitButton = e.target.querySelector('button[type="submit"]') || 
                        e.target.closest('form').querySelector('button[type="submit"]');
    
    // Add loading state
    if (submitButton) {
        addButtonLoading(submitButton);
    }
    
    const email = emailInput.value.trim();
    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        if (submitButton) {
            removeButtonLoading(submitButton);
        }
        return;
    }
    
    // Simulate form submission (replace with actual API call)
    console.log('Waitlist submission:', { email, name, phone });
    
    // Simulate API delay
    setTimeout(() => {
        // Show success message
        showSuccessMessage();
        
        // Close modal if open
        closeModalFunc();
        
        // Reset form
        e.target.reset();
        
        // Remove loading state
        if (submitButton) {
            removeButtonLoading(submitButton);
        }
    }, 1500); // Simulate 1.5s API call
    
    // In a real application, you would send this data to your backend
    // Example:
    // fetch('/api/waitlist', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, name, phone })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     showSuccessMessage();
    //     closeModalFunc();
    //     e.target.reset();
    //     removeButtonLoading(submitButton);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('Something went wrong. Please try again.');
    //     removeButtonLoading(submitButton);
    // });
}

// Hero waitlist form
if (heroWaitlistForm) {
    heroWaitlistForm.addEventListener('submit', (e) => {
        const emailInput = document.getElementById('heroEmail');
        handleWaitlistSubmit(e, emailInput);
    });
}

// Final CTA waitlist form
if (finalWaitlistForm) {
    finalWaitlistForm.addEventListener('submit', (e) => {
        const emailInput = document.getElementById('finalEmail');
        handleWaitlistSubmit(e, emailInput);
    });
}

// Modal waitlist form
if (modalWaitlistForm) {
    modalWaitlistForm.addEventListener('submit', (e) => {
        const emailInput = document.getElementById('modalEmail');
        const nameInput = document.getElementById('modalName');
        const phoneInput = document.getElementById('modalPhone');
        handleWaitlistSubmit(e, emailInput, nameInput, phoneInput);
    });
}

// ============================================
// FAQ Accordion (Enhanced with Accessibility)
// ============================================
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        // Click handler
        question.addEventListener('click', () => {
            toggleFAQItem(item, question);
        });
        
        // Keyboard handler (Enter and Space)
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQItem(item, question);
            }
        });
    }
});

function toggleFAQItem(item, question) {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(faqItem => {
        faqItem.classList.remove('active');
        const q = faqItem.querySelector('.faq-question');
        if (q) {
            q.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
    } else {
        question.setAttribute('aria-expanded', 'false');
    }
}

// ============================================
// Active Navigation Link on Scroll (Enhanced)
// ============================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    const headerHeight = header.offsetHeight;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    // Smooth highlight animation
                    link.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        link.style.transform = 'scale(1)';
                    }, 200);
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// Login Button Handler (Placeholder)
// ============================================
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        // In a real application, this would redirect to a login page
        alert('Login functionality will be available after launch.');
    });
}

// ============================================
// Form Input Animations
// ============================================
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ============================================
// Enhanced Intersection Observer with Stagger
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Stagger delay
        }
    });
}, observerOptions);

// Observe all animatable elements
const animateElements = document.querySelectorAll(
    '.value-card, .step-item, .benefit-item, .faq-item, .benefits-card, .cta-section'
);

animateElements.forEach((el, index) => {
    el.classList.add('fade-in-up');
    observer.observe(el);
});

// ============================================
// Scroll Progress Indicator
// ============================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============================================
// Enhanced Parallax Effect
// ============================================
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// ============================================
// Enhanced Form Input Animations
// ============================================
function initFormAnimations() {
    const inputs = document.querySelectorAll('input[type="email"], input[type="text"], input[type="tel"]');
    
    inputs.forEach(input => {
        // Add focus animation
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        // Add typing animation
        let typingTimeout;
        input.addEventListener('input', function() {
            clearTimeout(typingTimeout);
            this.style.transform = 'scale(1.01)';
            
            typingTimeout = setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// ============================================
// Button Loading State
// ============================================
function addButtonLoading(button) {
    if (button) {
        button.classList.add('loading');
        button.disabled = true;
    }
}

function removeButtonLoading(button) {
    if (button) {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// ============================================
// Enhanced Modal Animation
// ============================================
function openModalEnhanced() {
    if (waitlistModal) {
        waitlistModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation
        const modalContent = waitlistModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.animation = 'modalSlideIn 0.3s ease';
        }
    }
}

// Update original openModal to use enhanced version
function openModal() {
    openModalEnhanced();
}

// ============================================
// Initialize All Enhanced Features
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('RentEarn website loaded successfully!');
    
    // Initialize enhanced features
    initScrollProgress();
    initParallax();
    initFormAnimations();
    
    // Set initial active nav link
    updateActiveNavLink();
    
    // Update modal open function for enhanced buttons
    if (joinWaitlistBtn) {
        joinWaitlistBtn.addEventListener('click', openModalEnhanced);
    }
    if (ctaWaitlistBtn) {
        ctaWaitlistBtn.addEventListener('click', openModalEnhanced);
    }
    if (benefitsWaitlistBtn) {
        benefitsWaitlistBtn.addEventListener('click', openModalEnhanced);
    }
});

