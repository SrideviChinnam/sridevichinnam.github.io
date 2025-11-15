/**
 * Main JavaScript File
 * Handles navigation, product display, modals, and general interactions
 */

// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium quality wireless headphones with noise cancellation and long battery life.",
        price: 99.99,
        image: "https://via.placeholder.com/400x400?text=Headphones",
        badge: "New"
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with fitness tracking and health monitoring capabilities.",
        price: 199.99,
        image: "https://via.placeholder.com/400x400?text=Smart+Watch",
        badge: "Popular"
    },
    {
        id: 3,
        name: "Laptop Backpack",
        description: "Durable and stylish backpack designed for laptops up to 15 inches with multiple compartments.",
        price: 49.99,
        image: "https://via.placeholder.com/400x400?text=Backpack",
        badge: null
    },
    {
        id: 4,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with precision tracking and long battery life.",
        price: 29.99,
        image: "https://via.placeholder.com/400x400?text=Mouse",
        badge: "Sale"
    },
    {
        id: 5,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader support.",
        price: 39.99,
        image: "https://via.placeholder.com/400x400?text=USB+Hub",
        badge: null
    },
    {
        id: 6,
        name: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with customizable keys and premium switches.",
        price: 129.99,
        image: "https://via.placeholder.com/400x400?text=Keyboard",
        badge: "New"
    },
    {
        id: 7,
        name: "Phone Case",
        description: "Protective phone case with shock absorption and clear design.",
        price: 19.99,
        image: "https://via.placeholder.com/400x400?text=Phone+Case",
        badge: null
    },
    {
        id: 8,
        name: "Tablet Stand",
        description: "Adjustable tablet stand with 360-degree rotation and stable base.",
        price: 24.99,
        image: "https://via.placeholder.com/400x400?text=Tablet+Stand",
        badge: "Sale"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupEventListeners();
    setupSmoothScrolling();
});

/**
 * Display products in the grid
 */
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

/**
 * Create a product card element
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-image\\'></i>'">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    // Add click event to open product modal
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart-btn')) {
            openProductModal(product);
        }
    });
    
    // Add to cart button
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id);
    });
    
    return card;
}

/**
 * Open product modal with details
 */
function openProductModal(product) {
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
            <div class="product-image" style="height: 400px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-image\\' style=\\'font-size: 4rem;\\'></i>'">
            </div>
            <div>
                <h2 style="margin-bottom: 1rem; font-size: 2rem;">${product.name}</h2>
                <p style="color: #6b7280; margin-bottom: 1.5rem; line-height: 1.8;">${product.description}</p>
                <div style="margin-bottom: 1.5rem;">
                    <span style="font-size: 2rem; font-weight: 700; color: #2563eb;">$${product.price.toFixed(2)}</span>
                </div>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                    <label style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <span style="font-weight: 600;">Quantity:</span>
                        <input type="number" id="modalQuantity" value="1" min="1" style="padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 8px; width: 100px;">
                    </label>
                </div>
                <button class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1.1rem;" data-product-id="${product.id}" id="modalAddToCart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    
    // Add to cart from modal
    const modalAddToCart = document.getElementById('modalAddToCart');
    modalAddToCart.addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('modalQuantity').value) || 1;
        for (let i = 0; i < quantity; i++) {
            addToCart(product.id);
        }
        closeProductModal();
    });
}

/**
 * Close product modal
 */
function closeProductModal() {
    productModal.classList.remove('active');
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', closeProductModal);
    }
    
    // Close modal on outside click
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                closeProductModal();
            }
        });
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            if (searchTerm === '') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );
                displayProducts(filteredProducts);
            }
        });
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Newsletter form submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}!`);
            newsletterForm.reset();
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Add product to cart (called from cart.js)
 */
function addToCart(productId) {
    if (typeof addToCartHandler === 'function') {
        addToCartHandler(productId);
    }
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Export products for use in cart.js
if (typeof window !== 'undefined') {
    window.productsData = products;
}

