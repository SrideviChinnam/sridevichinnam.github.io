/**
 * Cart Counter JavaScript
 * Updates cart count badge across all pages
 */

// Update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

/**
 * Get cart from localStorage
 */
function getCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        try {
            return JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart:', e);
            return [];
        }
    }
    return [];
}

/**
 * Get total items in cart
 */
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((count, item) => {
        return count + item.quantity;
    }, 0);
}

/**
 * Update cart count badge
 */
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const count = getCartItemCount();
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Export for use in other scripts
window.updateCartCount = updateCartCount;
window.getCart = getCart;

