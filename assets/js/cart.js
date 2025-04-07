//Add item to the cart
function addToCart() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("You need to log in to add items to the cart.");
        window.location.href = "login.html";
        return;
    }

    const product = {
        id: Date.now(), //unique ID for the cart item
        name: document.getElementById("product-name").textContent,
        image: document.getElementById("product-image").src,
        price: document.getElementById("product-price").textContent,
        size: document.getElementById("product-size").textContent,
        brand: document.getElementById("product-brand").textContent,
        gender: document.getElementById("product-gender").textContent,
        category: document.getElementById("product-category").textContent,
        color: document.getElementById("product-color").textContent,
    };

    const cartKey = `${loggedInUser}_cart`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push(product);
    localStorage.setItem(cartKey, JSON.stringify(cart));

    alert("Item added to cart!");
}

//Display the cart
window.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.includes("cart.html")) return;

    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("You need to log in to view your cart.");
        window.location.href = "login.html";
        return;
    }

    const cartKey = `${loggedInUser}_cart`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const cartContainer = document.querySelector(".cart-items");
    const totalPriceElement = document.querySelector(".total-price");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceElement.textContent = `Total: $0.00`;
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div class="cart-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="cart-details">
                <p><strong>${item.name}</strong></p>
                <p>Price: ${item.price}</p>
                <p>Size: ${item.size}</p>
                <p>Gender: ${item.gender}</p>
                <p>Category: ${item.category}</p>
                <p>Color: ${item.color}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);

        total += parseFloat(item.price.replace('$', ''));
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;

    //Checkout button
    const checkoutBtn = document.querySelector(".checkout-btn");
    checkoutBtn.addEventListener("click", (e) => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        localStorage.setItem(`${loggedInUser}_lastOrder`, JSON.stringify(cart));
        
        //Clear cart
        localStorage.removeItem(cartKey);
        window.location.href = "order-summary.html";
    });

    //Enable checkout button based on shipping form 
    const shippingForm = document.getElementById("shipping-form");
    if (shippingForm) {
        shippingForm.addEventListener("input", () => {
            checkoutBtn.disabled = !shippingForm.checkValidity();
        });

        //Set checkout button initial state based on shipping form
        checkoutBtn.disabled = !shippingForm.checkValidity();
    }
});

//Remove item from cart
function removeFromCart(itemId) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const cartKey = `${loggedInUser}_cart`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));

    window.location.reload();
}