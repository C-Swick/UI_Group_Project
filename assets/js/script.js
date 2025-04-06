const products = [
    {
        id: 1,
        name: "Nike Men's Air Max Nuaxis",
        price: "$84.99",
        image: "assets/images/Nike Men's Air Max Nuaxis.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Men's",
        color: "Grey",
        size: "10"
    },
    {
        id: 2,
        name: "ASICS Men's Jolt 4",
        price: "$39.99",
        image: "assets/images/ASICS Men's Jolt 4.png",
        brand: "ASICS",
        category: "Athletic", 
        gender: "Men's",
        color: "Grey",
        size: "9"
    },
    {
        id: 3,
        name: "Under Armour Men's Pursuit 3",
        price: "$80.99",
        image: "assets/images/Under Armour Men's Pursuit 3.png",
        brand: "Under Armour",
        category: "Running", 
        gender: "Men's",
        color: "White",
        size: "7"
    },
    {
        id: 4,
        name: "Nike Women's Run Swift 3",
        price: "$59.99",
        image: "assets/images/Nike Women's Run Swift 3.png",
        brand: "Nike",
        category: "Running", 
        gender: "Women's",
        color: "White",
        size: "6"
    },
    {
        id: 5,
        name: "Magellan Outdoors Men's Clive II",
        price: "$29.99",
        image: "assets/images/Magellan Outdoors Men's Clive II.png",
        brand: "Magellan",
        category: "Casual", 
        gender: "Men's",
        color: "Brown",
        size: "8"
    },
    {
        id: 6,
        name: "SKECHERS Men's Slade Bungee Lace Slip-In",
        price: "$34.97",
        image: "assets/images/SKECHERS Men's Slade Bungee Lace Slip-In.png",
        brand: "SKECHERS",
        category: "Casual", 
        gender: "Men's",
        color: "Black",
        size: "11"
    },
    {
        id: 7,
        name: "Converse Men's Chuck Taylor All-Star",
        price: "$59.99",
        image: "assets/images/Converse Men's Chuck Taylor All-Star.png",
        brand: "Converse",
        category: "Casual", 
        gender: "Men's",
        color: "Brown",
        size: "7"
    },
    {
        id: 8,
        name: "Birkenstock Men's Arizona Essentials EVA Sandals",
        price: "$49.99",
        image: "assets/images/Birkenstock Men's Arizona Essentials EVA Sandals.png",
        brand: "Birkenstock",
        category: "Casual", 
        gender: "Men's",
        color: "Green",
        size: "8"
    },
    {
        id: 9,
        name: "Birkenstock Men's Arizona Birkibuc Sandals",
        price: "$114.99",
        image: "assets/images/Birkenstock Men's Arizona Birkibuc Sandals.png",
        brand: "Birkenstock",
        category: "Casual", 
        gender: "Men's",
        color: "Brown",
        size: "10"
    },
    {
        id: 10,
        name: "Crocs Adults' Classic Clogs",
        price: "$39.99",
        image: "assets/images/Crocs Adults' Classic Clogs.png",
        brand: "Crocs",
        category: "Casual", 
        gender: "Both",
        color: "Blue",
        size: "9"
    },
    {
        id: 11,
        name: "Crocs Adults' Classic Glitter Clogs",
        price: "$49.99",
        image: "assets/images/Crocs Adults' Classic Glitter Clogs.png",
        brand: "Crocs",
        category: "Casual", 
        gender: "Both",
        color: "Pink",
        size: "6"
    },
    {
        id: 12,
        name: "Timberland Men's Allstone Shoes",
        price: "$69.99",
        image: "assets/images/Timberland Men's Allstone Shoes.png",
        brand: "Timberland",
        category: "Casual", 
        gender: "Men's",
        color: "Black",
        size: "13"
    },
    {
        id: 13,
        name: "Crocs Adults' Mellow Recovery Slides",
        price: "$29.99",
        image: "assets/images/Crocs Adults' Mellow Recovery Slides.png",
        brand: "Crocs",
        category: "Casual", 
        gender: "Both",
        color: "Red",
        size: "8"
    },
    {
        id: 14,
        name: "HEYDUDE Men's Wally Texas Canvas Slip-On Shoes",
        price: "$79.99",
        image: "assets/images/HEYDUDE Men's Wally Texas Canvas Slip-On Shoes.png",
        brand: "HEYDUDE",
        category: "Casual", 
        gender: "Men's",
        color: "White",
        size: "8"
    },
    {
        id: 15,
        name: "Under Armour Men's Charged Assert 10 Running Shoes",
        price: "$74.99",
        image: "assets/images/Under Armour Men's Charged Assert 10 Running Shoes.png",
        brand: "Under Armour",
        category: "Running", 
        gender: "Men's",
        color: "Blue",
        size: "11"
    },
    {
        id: 16,
        name: "adidas Men's GameCourt 2 Tennis Shoes",
        price: "$55.99",
        image: "assets/images/adidas Men's GameCourt 2 Tennis Shoes.png",
        brand: "Adidas",
        category: "Athletic", 
        gender: "Men's",
        color: "White",
        size: "10"
    },
    {
        id: 17,
        name: "New Balance Men's 696v5 Tennis Shoes",
        price: "$54.99",
        image: "assets/images/New Balance Men's 696v5 Tennis Shoes.png",
        brand: "New Balance",
        category: "Athletic", 
        gender: "Men's",
        color: "Grey",
        size: "10"
    },
    {
        id: 18,
        name: "ASICS Men's Gel-Dedicate 8 Tennis Shoes",
        price: "$89.99",
        image: "assets/images/ASICS Men's Gel-Dedicate 8 Tennis Shoes.png",
        brand: "ASICS",
        category: "Athletic", 
        gender: "Men's",
        color: "Black",
        size: "12"
    },
    {
        id: 19,
        name: "Nike Men's Kyrie Flytrap II Basketball Shoes",
        price: "$55.99",
        image: "assets/images/Nike Men's Kyrie Flytrap II Basketball Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Men's",
        color: "Black",
        size: "12"
    },
    {
        id: 20,
        name: "Nike Men's LeBron VII TB Basketball Shoes",
        price: "$75.99",
        image: "assets/images/Nike Men's LeBron VII TB Basketball Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Men's",
        color: "White",
        size: "10"
    },
    {
        id: 21,
        name: "adidas Adults' Trae Unlimited Basketball Shoes",
        price: "$65.99",
        image: "assets/images/adidas Adults' Trae Unlimited Basketball Shoes.png",
        brand: "adidas",
        category: "Athletic", 
        gender: "Both",
        color: "White",
        size: "9"
    },
    {
        id: 22,
        name: "adidas Men's Adilette Shower Slides",
        price: "$24.99",
        image: "assets/images/adidas Men's Adilette Shower Slides.png",
        brand: "adidas",
        category: "Casual", 
        gender: "Men's",
        color: "Red",
        size: "8"
    },
    {
        id: 23,
        name: "Magellan Outdoors Men's EVA Cushion Pool Slides",
        price: "$14.99",
        image: "assets/images/Magellan Outdoors Men's EVA Cushion Pool Slides.png",
        brand: "Magellan",
        category: "Casual", 
        gender: "Men's",
        color: "Green",
        size: "12"
    },
    {
        id: 24,
        name: "Magellan Outdoors Men's Lightweight Flip II Sport Slides",
        price: "$24.99",
        image: "assets/images/Magellan Outdoors Men's Lightweight Flip II Sport Slides.png",
        brand: "Magellan",
        category: "Casual", 
        gender: "Men's",
        color: "Brown",
        size: "7"
    },
    {
        id: 25,
        name: "Teva Men’s Winstead Sandals",
        price: "$59.99",
        image: "assets/images/Teva Men’s Winstead Sandals.png",
        brand: "Teva",
        category: "Casual", 
        gender: "Men's",
        color: "Black",
        size: "5"
    },
    {
        id: 26,
        name: "New Balance Men's 515 Retro Sneaker",
        price: "$49.99",
        image: "assets/images/New Balance Men's 515 Retro Sneaker.png",
        brand: "New Balance",
        category: "Athletic", 
        gender: "Men's",
        color: "White",
        size: "9"
    },
    {
        id: 27,
        name: "New Balance Men's 997H Shoes",
        price: "$49.99",
        image: "assets/images/New Balance Men's 997H Shoes.png",
        brand: "New Balance",
        category: "Athletic", 
        gender: "Men's",
        color: "Blue",
        size: "6"
    },
    {
        id: 28,
        name: "New Balance Men's 608 Training Shoes",
        price: "$64.99",
        image: "assets/images/New Balance Men's 608 Training Shoes.png",
        brand: "New Balance",
        category: "Athletic", 
        gender: "Men's",
        color: "White",
        size: "11"
    },
    {
        id: 29,
        name: "Wolverine Men’s Trade Wedge Waterproof Steel Toe Work Boots",
        price: "$134.99",
        image: "assets/images/Wolverine Men’s Trade Wedge Waterproof Steel Toe Work Boots.png",
        brand: "Wolverine",
        category: "Boots", 
        gender: "Men's",
        color: "Brown",
        size: "12"
    },
    {
        id: 30,
        name: "Ariat Men's Treadfast Waterproof Steel Toe 6 in Work Boots",
        price: "$159.99",
        image: "assets/images/Ariat Men's Treadfast Waterproof Steel Toe 6 in Work Boots.png",
        brand: "Ariat",
        category: "Boots", 
        gender: "Men's",
        color: "Brown",
        size: "10"
    },
    {
        id: 31,
        name: "Wolverine Men's Rancher EH Steel Toe Wellington Work Boots",
        price: "$129.99",
        image: "assets/images/Wolverine Men's Rancher EH Steel Toe Wellington Work Boots.png",
        brand: "Wolverine",
        category: "Boots", 
        gender: "Men's",
        color: "Red",
        size: "9"
    },
    {
        id: 31,
        name: "Brazos Men's Midnight II Soft Toe Boots",
        price: "$29.99",
        image: "assets/images/Brazos Men's Midnight II Soft Toe Boots.png",
        brand: "Brazos",
        category: "Boots", 
        gender: "Men's",
        color: "Black",
        size: "8"
    },
    {
        id: 31,
        name: "Xtratuf Men's Ankle Deck Boots",
        price: "$29.99",
        image: "assets/images/Xtratuf Men's Ankle Deck Boots.png",
        brand: "Xtratuf",
        category: "Boots", 
        gender: "Men's",
        color: "Blue",
        size: "10"
    },
    {
        id: 32,
        name: "LaCrosse Men's Grange Hunting Boots",
        price: "$119.99",
        image: "assets/images/LaCrosse Men's Grange Hunting Boots.png",
        brand: "LaCrosse",
        category: "Boots", 
        gender: "Men's",
        color: "Green",
        size: "11"
    },
    {
        id: 33,
        name: "Nike Women's Court Legacy Lift Platform Shoes",
        price: "$89.99",
        image: "assets/images/Nike Women's Court Legacy Lift Platform Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Women's",
        color: "Black",
        size: "4"
    },
    {
        id: 34,
        name: "Nike Women's Waffle Debut Shoes",
        price: "$89.99",
        image: "assets/images/Nike Women's Waffle Debut Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Women's",
        color: "Blue",
        size: "5"
    },
    {
        id: 35,
        name: "New Balance Women's 237 Lifestyle Shoes",
        price: "$49.99",
        image: "assets/images/New Balance Women's 237 Lifestyle Shoes.png",
        brand: "New Balance",
        category: "Athletic", 
        gender: "Women's",
        color: "Pink",
        size: "6"
    },
    {
        id: 36,
        name: "Nike Women's Run Swift 3 Running Shoes",
        price: "$57.99",
        image: "assets/images/Nike Women's Run Swift 3 Running Shoes.png",
        brand: "Nike",
        category: "Running", 
        gender: "Women's",
        color: "Blue",
        size: "8"
    },
    {
        id: 37,
        name: "adidas Women's X_PLR Path Shoes",
        price: "$57.99",
        image: "assets/images/adidas Women's X_PLR Path Shoes.png",
        brand: "adidas",
        category: "Athletic", 
        gender: "Women's",
        color: "Red",
        size: "5"
    },
    {
        id: 38,
        name: "Nike Women's Air Max SC Shoes",
        price: "$84.99",
        image: "assets/images/Nike Women's Air Max SC Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Women's",
        color: "Brown",
        size: "3"
    },
    {
        id: 39,
        name: "ASICS Women's Jolt 4 Shoes",
        price: "$39.99",
        image: "assets/images/ASICS Women's Jolt 4 Shoes.png",
        brand: "ASICS",
        category: "Athletic", 
        gender: "Women's",
        color: "Black",
        size: "8"
    },
    {
        id: 40,
        name: "adidas Women's Galaxy 7 Running Shoes",
        price: "$49.99",
        image: "assets/images/adidas Women's Galaxy 7 Running Shoes.png",
        brand: "adidas",
        category: "Running", 
        gender: "Women's",
        color: "Pink",
        size: "6"
    },
    {
        id: 41,
        name: "Brooks Women's Ghost 16 Running Shoes",
        price: "$109.99",
        image: "assets/images/Brooks Women's Ghost 16 Running Shoes.png",
        brand: "Brooks",
        category: "Running", 
        gender: "Women's",
        color: "Grey",
        size: "5"
    },
    {
        id: 42,
        name: "Nike Women's Journey Running Shoes",
        price: "$69.99",
        image: "assets/images/Nike Women's Journey Running Shoes.png",
        brand: "Nike",
        category: "Running", 
        gender: "Women's",
        color: "Yellow",
        size: "4"
    },
    {
        id: 43,
        name: "Nike Women’s Court Vision Low Next Nature Shoes",
        price: "$79.99",
        image: "assets/images/Nike Women’s Court Vision Low Next Nature Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Women's",
        color: "Red",
        size: "8"
    },
    {
        id: 44,
        name: "Reef Women's Cushion Vista Hi Flip-Flops",
        price: "$70.00",
        image: "assets/images/Reef Women's Cushion Vista Hi Flip-Flops.png",
        brand: "Reef",
        category: "Casual", 
        gender: "Women's",
        color: "White",
        size: "6"
    },
    {
        id: 45,
        name: "Crocs Women's Getaway Strappy Sandal",
        price: "$39.99",
        image: "assets/images/Crocs Women's Getaway Strappy Sandal.png",
        brand: "Crocs",
        category: "Casual", 
        gender: "Women's",
        color: "Purple",
        size: "5"
    },
    {
        id: 46,
        name: "Freely Women's Double Band EVA Slide",
        price: "$9.99",
        image: "assets/images/Freely Women's Double Band EVA Slide.png",
        brand: "Freely",
        category: "Casual", 
        gender: "Women's",
        color: "Black",
        size: "7"
    },
    {
        id: 47,
        name: "Birkenstock Women's Arizona Sandals",
        price: "$114.99",
        image: "assets/images/Birkenstock Women's Arizona Sandals.png",
        brand: "Birkenstock",
        category: "Casual", 
        gender: "Women's",
        color: "Brown",
        size: "4"
    },
    {
        id: 48,
        name: "OOFOS Women's OOlala Luxe Recovery Sandals",
        price: "$74.99",
        image: "assets/images/OOFOS Women's OOlala Luxe Recovery Sandals.png",
        brand: "OOFOS",
        category: "Casual", 
        gender: "Women's",
        color: "Blue",
        size: "6"
    },
    {
        id: 49,
        name: "Freely Women's Delilah Comfort Slides",
        price: "$9.99",
        image: "assets/images/Freely Women's Delilah Comfort Slides.png",
        brand: "Freely",
        category: "Casual", 
        gender: "Women's",
        color: "Pink",
        size: "5"
    },
    {
        id: 50,
        name: "Freely Women's Raffia Platform Sandals",
        price: "$29.99",
        image: "assets/images/Freely Women's Raffia Platform Sandals.png",
        brand: "Freely",
        category: "Casual", 
        gender: "Women's",
        color: "Blue",
        size: "8"
    },
    {
        id: 51,
        name: "Converse Women's Chuck Taylor All-Star High-Top Shoes",
        price: "$64.99",
        image: "assets/images/Converse Women's Chuck Taylor All-Star High-Top Shoes.png",
        brand: "Converse",
        category: "Casual", 
        gender: "Women's",
        color: "Blue",
        size: "6"
    },
    {
        id: 52,
        name: "SKECHERS Women's Summits Fun Flair Shoes",
        price: "$49.99",
        image: "assets/images/SKECHERS Women's Summits Fun Flair Shoes.png",
        brand: "SKECHERS",
        category: "Casual", 
        gender: "Women's",
        color: "Grey",
        size: "7"
    },
    {
        id: 53,
        name: "Converse Women's Chuck Taylor All-Star Shoreline Slip-On Shoes",
        price: "$59.99",
        image: "assets/images/Converse Women's Chuck Taylor All-Star Shoreline Slip-On Shoes.png",
        brand: "Converse",
        category: "Casual", 
        gender: "Women's",
        color: "Pink",
        size: "8"
    },
    {
        id: 54,
        name: "Nike Women's Zoom Court Lite 3 Tennis Shoes",
        price: "$54.99",
        image: "assets/images/Nike Women's Zoom Court Lite 3 Tennis Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Women's",
        color: "White",
        size: "9"
    },
    {
        id: 55,
        name: "Mizuno Women's Wave Luminous 2 Court Shoes",
        price: "$114.99",
        image: "assets/images/Mizuno Women's Wave Luminous 2 Court Shoes.png",
        brand: "Mizuno",
        category: "Athletic", 
        gender: "Women's",
        color: "White",
        size: "7"
    },
    {
        id: 56,
        name: "adidas Women's adizero Ubersonic 4 Tennis Shoes",
        price: "$104.99",
        image: "assets/images/adidas Women's adizero Ubersonic 4 Tennis Shoes.png",
        brand: "adidas",
        category: "Athletic", 
        gender: "Women's",
        color: "Yellow",
        size: "6"
    },
    {
        id: 57,
        name: "Nike Women's Air Zoom GT Cut Academy Basketball Shoes",
        price: "$69.99",
        image: "assets/images/Nike Women's Air Zoom GT Cut Academy Basketball Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Women's",
        color: "White",
        size: "5"
    },
    {
        id: 58,
        name: "Nike Women's Renew Elevate 3 Basketball Shoes",
        price: "$64.99",
        image: "assets/images/Nike Women's Renew Elevate 3 Basketball Shoes.png",
        brand: "Nike",
        category: "Athletic", 
        gender: "Women's",
        color: "Black",
        size: "9"
    },
    {
        id: 59,
        name: "Magellan Outdoors Women's Short Rubber Boots",
        price: "$34.99",
        image: "assets/images/Magellan Outdoors Women's Short Rubber Boots.png",
        brand: "Magellan",
        category: "Boots", 
        gender: "Women's",
        color: "White",
        size: "8"
    },
    {
        id: 60,
        name: "Xtratuf Women's Ankle Deck Boots",
        price: "$104.99",
        image: "assets/images/Xtratuf Women's Ankle Deck Boots.png",
        brand: "Xtratuf",
        category: "Boots", 
        gender: "Women's",
        color: "Green",
        size: "5"
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
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
        </div>
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button onclick="viewProductDetails(${product.id})">View Product Details</button>
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

function viewProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        location.href = "product.html";
    }
}

function loadProductDetails() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!product) {
        alert("No product selected.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").alt = product.name;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-gender").textContent = product.gender;
    document.getElementById("product-category").textContent = product.category;
    document.getElementById("product-color").textContent = product.color;
    document.getElementById("product-size").textContent = product.size;
}

