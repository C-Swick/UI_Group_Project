const products = [
    {
        id: 1,
        name: "Test 1",
        price: "$89.99",
        image: "image",
        brand: "Nike",
        size: "10"
    },
    {
        id: 2,
        name: "Test 2",
        price: "$74.99",
        image: "image",
        brand: "Adidas",
        size: "9"
    },
    {
        id: 3,
        name: "Test 3",
        price: "$80.99",
        image: "image",
        brand: "Nike",
        size: "7"
    },
    {
        id: 4,
        name: "Test 4",
        price: "$99.99",
        image: "image",
        brand: "Adidas",
        size: "6"
    },
    {
        id: 5,
        name: "Test 5",
        price: "$33.99",
        image: "image",
        brand: "Adidas",
        size: "5"
    },
    {
        id: 5,
        name: "Test 5",
        price: "$119.99",
        image: "image",
        brand: "New Balance",
        size: "11"
    }
];

const productsPerPage = 15;
let currentPage = 1;

function loadProductGrid(page = 1) {
    const container = document.getElementById("product-grid");
    if (!container) return;
  
    container.innerHTML = "";
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const currentProducts = products.slice(start, end);
  
    currentProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <div class="product-image">Image</div>
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button onclick="location.href='product.html?id=${product.id}'">View Product Details</button>
      `;
      container.appendChild(card);
    });
  
    updatePagination();
  }
  
function updatePagination() {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;
  
    pagination.innerHTML = "";
    const totalPages = Math.ceil(products.length / productsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            loadProductGrid(i);
        };
        if (i === currentPage) btn.style.fontWeight = "bold";
        pagination.appendChild(btn);
    }
}