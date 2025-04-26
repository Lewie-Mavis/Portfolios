// Global variable for the cart
var cart = [];

// Function to add items to the cart
function addToCart(bookTitle, bookPrice) {
    cart.push({ title: bookTitle, price: bookPrice });
    updateCart();
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the specified index
    updateCart();
}

// Function to update the cart display
function updateCart() {
    var cartItemsContainer = document.getElementById('unique-cart-items-list'); // Corrected ID
    var cartTotal = document.getElementById('unique-cart-total'); 

    // Clear the current cart display
    cartItemsContainer.innerHTML = ''; 

    // If the cart is empty, show a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.textContent = '0.00';
    } else {
        // Display the items in the cart
        var total = 0;
        var cartHtml = '<ul class="unique-cart-items-list">'; // Added specific class for cart list
        cart.forEach(function(item, index) {
            cartHtml += `<li class="unique-cart-item">${item.title} - Ksh ${item.price} 
                <button onclick="removeFromCart(${index})" class="unique-remove-button">Remove</button>
            </li>`; 
            total += item.price;
        });
        cartHtml += '</ul>';
        cartItemsContainer.innerHTML = cartHtml;
        cartTotal.textContent = total.toFixed(2);  // Display combined total price in the cart section
    }
}

// Checkout function (no modal, just scroll to Payment Options section)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add some items before proceeding to checkout.");
    } else {
        var total = 0;
        cart.forEach(function(item) {
            total += item.price;
        });

        // Scroll to Payment Options section
        var paymentOptionsSection = document.getElementById('payment-options');
        paymentOptionsSection.scrollIntoView({ behavior: 'smooth' });
    }
}
