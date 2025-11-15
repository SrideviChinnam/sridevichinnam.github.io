/**
 * Home Page JavaScript
 * Handles home page functionality
 */

// Sample product data for featured products with local placeholder images
// Note: Sample SVG images are included. Replace with actual product photos for production.
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium quality wireless headphones with noise cancellation and long battery life.",
        price: 99.99,
        image: "assets/images/products/sample-1.svg",
        badge: "New"
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with fitness tracking and health monitoring capabilities.",
        price: 199.99,
        image: "assets/images/products/sample-2.svg",
        badge: "Popular"
    },
    {
        id: 3,
        name: "Laptop Backpack",
        description: "Durable and stylish backpack designed for laptops up to 15 inches with multiple compartments.",
        price: 49.99,
        image: "assets/images/products/sample-3.svg",
        badge: null
    },
    {
        id: 4,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with precision tracking and long battery life.",
        price: 29.99,
        image: "assets/images/products/sample-1.svg",
        badge: "Sale"
    },
    {
        id: 5,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader support.",
        price: 39.99,
        image: "assets/images/products/sample-2.svg",
        badge: null
    },
    {
        id: 6,
        name: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with customizable keys and premium switches.",
        price: 129.99,
        image: "assets/images/products/sample-3.svg",
        badge: "New"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const newsletterForm = document.getElementById('newsletterForm');

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (productsGrid) {
        displayProducts(products.slice(0, 6)); // Show only 6 featured products
    }
    setupEventListeners();
});

/**
 * Display products in the grid
 */
function displayProducts(productsToShow) {
    if (!productsGrid) return;
    
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
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'%3E%3Crect width=\\'400\\' height=\\'400\\' fill=\\'%23667eea\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' font-size=\\'24\\' fill=\\'white\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'%3E${product.name}%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <a href="shop.html" class="add-to-cart-btn">
                    <i class="fas fa-shopping-cart"></i> View Product
                </a>
            </div>
        </div>
    `;
    
    return card;
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
    
    // Search redirect
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                window.location.href = 'shop.html';
            }
        });
    }
    
    // Newsletter form
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

