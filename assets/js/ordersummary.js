window.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("You need to log in to view your order summary.");
        window.location.href = "login.html";
        return;
    }

    const orderKey = `${loggedInUser}_lastOrder`;
    const order = JSON.parse(localStorage.getItem(orderKey)) || [];
    const summaryContainer = document.querySelector(".order-summary-page");
    const totalSection = document.querySelector(".total-section");

    if (order.length === 0) {
        summaryContainer.innerHTML = "<p>No recent order found.</p>";
        return;
    }

    let total = 0;

    order.forEach(item => {
        const summaryItem = document.createElement("div");
        summaryItem.classList.add("summary-item");

        summaryItem.innerHTML = `
            <div class="summary-image">
                <img src="${item.image}" alt="${item.name}" style="max-width: 100%; max-height: 100%;" />
            </div>
            <div class="summary-details">
                <p><strong>${item.name}</strong></p>
                <p>Price: ${item.price}</p>
                <p>Size: ${item.size}</p>
            </div>
        `;

        summaryContainer.insertBefore(summaryItem, totalSection);
        total += parseFloat(item.price.replace('$', ''));
    });

    totalSection.innerHTML = `
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        <p><strong>Shipping:</strong> Free</p>
        <p><strong>Thank you for your purchase!</strong></p>
    `;
});