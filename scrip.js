// Over flow menu
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// Add movies to cart
document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.querySelector('.cart-items-container');
    const cartBtn = document.querySelector('#cart-btn');
    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.search-form');

    function addItemToCart(name, price, image) {
        // Check if the item is already in the cart
        const existingItem = Array.from(cartContainer.querySelectorAll('.cart-item .content h3')).find(item => item.textContent === name);
        if (existingItem) {
            alert('This item is already in the cart.');
            return;
        }

        // Create cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span class="fas fa-times"></span>
            <img src="${image}" alt="">
            <div class="content">
                <h3>${name}</h3>
                <div class="price">$${price}/-</div>
            </div>
        `;
        cartContainer.insertBefore(cartItem, cartContainer.querySelector('.btn'));
        cartContainer.classList.add('active');

        // Add event listener for remove icon
        cartItem.querySelector('.fas').addEventListener('click', function() {
            cartItem.remove();
            if (cartContainer.querySelectorAll('.cart-item').length === 0) {
                cartContainer.classList.remove('active');
            }
        });
    }

    // Add event listeners for "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');
            addItemToCart(name, price, image);
        });
    });

    // Add event listeners for rented movies "Add to Cart" icons
    document.querySelectorAll('.rented .fa-shopping-cart').forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            const name = icon.getAttribute('data-name');
            const price = icon.getAttribute('data-price');
            const image = icon.getAttribute('data-image');
            addItemToCart(name, price, image);
        });
    });

    // Toggle cart visibility
    cartBtn.addEventListener('click', function() {
        cartContainer.classList.toggle('active');
        if (navbar) navbar.classList.remove('active');
        if (searchForm) searchForm.classList.remove('active');
    });
});



// Remove message
document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.fas.fa-times');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = button.closest('tr');
            row.remove();
        });
    });
});


// Remove device
document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.fas.fa-times');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = button.closest('tr');
            row.remove();
        });
    });
});