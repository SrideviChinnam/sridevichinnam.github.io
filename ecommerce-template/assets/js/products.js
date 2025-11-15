/**
 * Products Page JavaScript
 * Handles product display, filtering, and search on shop.html
 */

// Sample product data with local placeholder images
// Note: Sample SVG images are included. Replace with actual product photos for production.
// See IMAGE-GUIDELINES.md for detailed instructions.
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium quality wireless headphones with noise cancellation and long battery life.",
        price: 99.99,
        image: "assets/images/products/sample-1.svg",
        badge: "New",
        category: "electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with fitness tracking and health monitoring capabilities.",
        price: 199.99,
        image: "assets/images/products/sample-2.svg",
        badge: "Popular",
        category: "electronics"
    },
    {
        id: 3,
        name: "Laptop Backpack",
        description: "Durable and stylish backpack designed for laptops up to 15 inches with multiple compartments.",
        price: 49.99,
        image: "assets/images/products/sample-3.svg",
        badge: null,
        category: "fashion"
    },
    {
        id: 4,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with precision tracking and long battery life.",
        price: 29.99,
        image: "assets/images/products/sample-1.svg",
        badge: "Sale",
        category: "electronics"
    },
    {
        id: 5,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader support.",
        price: 39.99,
        image: "assets/images/products/sample-2.svg",
        badge: null,
        category: "electronics"
    },
    {
        id: 6,
        name: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with customizable keys and premium switches.",
        price: 129.99,
        image: "assets/images/products/sample-3.svg",
        badge: "New",
        category: "electronics"
    },
    {
        id: 7,
        name: "Phone Case",
        description: "Protective phone case with shock absorption and clear design.",
        price: 19.99,
        image: "assets/images/products/sample-1.svg",
        badge: null,
        category: "electronics"
    },
    {
        id: 8,
        name: "Tablet Stand",
        description: "Adjustable tablet stand with 360-degree rotation and stable base.",
        price: 24.99,
        image: "assets/images/products/sample-2.svg",
        badge: "Sale",
        category: "home"
    },
    {
        id: 9,
        name: "Yoga Mat",
        description: "Premium non-slip yoga mat with carrying strap and alignment lines.",
        price: 34.99,
        image: "assets/images/products/sample-3.svg",
        badge: null,
        category: "sports"
    },
    {
        id: 10,
        name: "Running Shoes",
        description: "Comfortable running shoes with breathable mesh and cushioned sole.",
        price: 79.99,
        image: "assets/images/products/sample-1.svg",
        badge: "New",
        category: "sports"
    },
    {
        id: 11,
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness and color temperature.",
        price: 44.99,
        image: "assets/images/products/sample-2.svg",
        badge: null,
        category: "home"
    },
    {
        id: 12,
        name: "Coffee Maker",
        description: "Programmable coffee maker with thermal carafe and auto shut-off.",
        price: 89.99,
        image: "assets/images/products/sample-3.svg",
        badge: "Popular",
        category: "home"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

let filteredProducts = [...products];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupEventListeners();
    // Export products for cart functionality
    window.productsData = products;
});

/**
 * Display products in the grid
 */
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found.</p>';
        return;
    }
    
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
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    // Add click event to open product modal
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart-btn') && !e.target.closest('.add-to-cart-btn')) {
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
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'%3E%3Crect width=\\'400\\' height=\\'400\\' fill=\\'%23667eea\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' font-size=\\'24\\' fill=\\'white\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'%3E${product.name}%3C/text%3E%3C/svg%3E'">
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
            filterProducts();
        });
    }
    
    // Category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            filterProducts();
        });
    }
    
    // Sort filter
    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            filterProducts();
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
 * Filter and sort products
 */
function filterProducts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const category = categoryFilter ? categoryFilter.value : 'all';
    const sortBy = sortFilter ? sortFilter.value : 'default';
    
    // Filter by search term
    let filtered = products.filter(product => {
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    // Sort products
    if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    filteredProducts = filtered;
    displayProducts(filtered);
}

/**
 * Add product to cart
 */
function addToCart(productId) {
    // Load cart handler from cart.js if available
    if (typeof addToCartHandler === 'function') {
        addToCartHandler(productId);
        showCartNotification();
    } else {
        // Fallback: add directly to localStorage
        const product = products.find(p => p.id === productId);
        if (product) {
            const cart = getCart();
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
            if (typeof updateCartCount === 'function') {
                updateCartCount();
            }
            showCartNotification();
        }
    }
}

/**
 * Get cart from localStorage
 */
function getCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        try {
            return JSON.parse(savedCart);
        } catch (e) {
            return [];
        }
    }
    return [];
}

/**
 * Show cart notification
 */
function showCartNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 4000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = 'Item added to cart!';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

