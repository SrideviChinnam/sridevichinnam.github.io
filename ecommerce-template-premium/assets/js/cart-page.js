/**
 * Cart Page JavaScript
 * Handles shopping cart page functionality
 */

// DOM Elements
const cartItemsList = document.getElementById('cartItemsList');
const itemCount = document.getElementById('itemCount');
const subtotal = document.getElementById('subtotal');
const shipping = document.getElementById('shipping');
const tax = document.getElementById('tax');
const total = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

let cart = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    displayCart();
    setupEventListeners();
});

/**
 * Load cart from localStorage
 */
function loadCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
}

/**
 * Save cart to localStorage
 */
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

/**
 * Display cart items
 */
function displayCart() {
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p class="empty-cart-message">Your cart is empty. <a href="shop.html">Continue Shopping</a></p>';
        itemCount.textContent = '0 items';
        updateTotals();
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
        }
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    itemCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
    
    cartItemsList.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
    
    // Add event listeners to cart items
    cart.forEach(item => {
        const decreaseBtn = document.querySelector(`.decrease-qty[data-id="${item.id}"]`);
        const increaseBtn = document.querySelector(`.increase-qty[data-id="${item.id}"]`);
        const removeBtn = document.querySelector(`.remove-item[data-id="${item.id}"]`);
        
        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => {
                updateQuantity(item.id, item.quantity - 1);
            });
        }
        
        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => {
                updateQuantity(item.id, item.quantity + 1);
            });
        }
        
        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                removeItem(item.id);
            });
        }
    });
    
    updateTotals();
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
    }
}

/**
 * Create HTML for cart item
 */
function createCartItemHTML(item) {
    return `
        <div class="cart-item-row">
            <div class="cart-item-image-wrapper">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'120\\' height=\\'120\\'%3E%3Crect width=\\'120\\' height=\\'120\\' fill=\\'%23667eea\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' font-size=\\'12\\' fill=\\'white\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'%3E${item.name}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="cart-item-details-wrapper">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-qty" data-id="${item.id}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
            <div class="cart-item-total">
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        </div>
    `;
}

/**
 * Update item quantity
 */
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeItem(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        displayCart();
        updateCartCount();
    }
}

/**
 * Remove item from cart
 */
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
    updateCartCount();
}

/**
 * Calculate and update totals
 */
function updateTotals() {
    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingAmount = subtotalAmount > 50 ? 0 : 10; // Free shipping over $50
    const taxAmount = subtotalAmount * 0.08; // 8% tax
    const totalAmount = subtotalAmount + shippingAmount + taxAmount;
    
    if (subtotal) subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
    if (shipping) shipping.textContent = shippingAmount === 0 ? 'Free' : `$${shippingAmount.toFixed(2)}`;
    if (tax) tax.textContent = `$${taxAmount.toFixed(2)}`;
    if (total) total.textContent = `$${totalAmount.toFixed(2)}`;
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
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shippingAmount = totalAmount > 50 ? 0 : 10;
            const taxAmount = totalAmount * 0.08;
            const finalTotal = totalAmount + shippingAmount + taxAmount;
            
            if (confirm(`Proceed to checkout?\n\nTotal: $${finalTotal.toFixed(2)}`)) {
                alert('Thank you for your purchase! This is a demo template.\n\nIn a real application, you would be redirected to a payment gateway.');
                cart = [];
                saveCart();
                displayCart();
                updateCartCount();
            }
        });
    }
}

// Export for use in other scripts
window.updateCartCount = function() {
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
};

