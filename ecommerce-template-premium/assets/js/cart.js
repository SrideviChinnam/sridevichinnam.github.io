/**
 * Shopping Cart JavaScript
 * Handles cart functionality, localStorage, and cart UI
 */

// Cart state
let cart = [];

// DOM Elements
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    updateCartUI();
    setupCartEventListeners();
});

/**
 * Load cart from localStorage
 */
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart from storage:', e);
            cart = [];
        }
    }
}

/**
 * Save cart to localStorage
 */
function saveCartToStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

/**
 * Add product to cart
 */
function addToCartHandler(productId) {
    // Get product data
    const products = window.productsData || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
    showCartNotification();
    // Update cart count on all pages
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
}

/**
 * Remove item from cart
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

/**
 * Update item quantity in cart
 */
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCartToStorage();
        updateCartUI();
    }
}

/**
 * Calculate cart total
 */
function calculateCartTotal() {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

/**
 * Get total items in cart
 */
function getCartItemCount() {
    return cart.reduce((count, item) => {
        return count + item.quantity;
    }, 0);
}

/**
 * Update cart UI
 */
function updateCartUI() {
    // Update cart count badge
    const itemCount = getCartItemCount();
    cartCount.textContent = itemCount;
    cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
        
        // Add event listeners to quantity buttons
        cart.forEach(item => {
            const decreaseBtn = document.querySelector(`.decrease-qty[data-id="${item.id}"]`);
            const increaseBtn = document.querySelector(`.increase-qty[data-id="${item.id}"]`);
            const removeBtn = document.querySelector(`.cart-item-remove[data-id="${item.id}"]`);
            
            if (decreaseBtn) {
                decreaseBtn.addEventListener('click', () => {
                    updateCartQuantity(item.id, item.quantity - 1);
                });
            }
            
            if (increaseBtn) {
                increaseBtn.addEventListener('click', () => {
                    updateCartQuantity(item.id, item.quantity + 1);
                });
            }
            
            if (removeBtn) {
                removeBtn.addEventListener('click', () => {
                    removeFromCart(item.id);
                });
            }
        });
    }
    
    // Update cart total
    const total = calculateCartTotal();
    cartTotal.textContent = total.toFixed(2);
}

/**
 * Create HTML for cart item
 */
function createCartItemHTML(item) {
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'cart-item-image\\' style=\\'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white;\\'><i class=\\'fas fa-image\\'></i></div>'">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-qty" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase-qty" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

/**
 * Setup cart event listeners
 */
function setupCartEventListeners() {
    // Open cart sidebar
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close cart sidebar
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close cart on outside click
    cartSidebar.addEventListener('click', (e) => {
        if (e.target === cartSidebar) {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Checkout button - redirect to cart page
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }
    
    // Close cart on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Show cart notification
 */
function showCartNotification() {
    // Create notification element
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
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Make addToCartHandler available globally
window.addToCartHandler = addToCartHandler;

// Update cart count when cart changes
window.addEventListener('storage', () => {
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
});

