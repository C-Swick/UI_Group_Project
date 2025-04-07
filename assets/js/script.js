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
        size: "10",
        description: "Step into comfort and style with the Nike Men's Air Max Nuaxis Shoes. \
        Breathable mesh uppers and synthetic overlays offer lightweight support and durability. \
        Featuring Air Max cushioning technology in the heels, the shoes provide responsive impact \
        absorption and all-day comfort, making them ideal for urban adventures and active lifestyles alike."
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
        size: "9",
        description: "Feel confident and comfortable with the ASICS Men's Jolt 4 Shoes. \
        The engineered mesh upper construction offers breathability, and the solid rubber \
        outsoles with flex grooves ensure long-lasting use and optimal movement."
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
        size: "7",
        description: "Enjoy going wherever your run takes you wearing the Under Armour Men's \
        Pursuit 3 Running Shoes. The performance mesh uppers offer lightweight, breathable wear."
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
        size: "6",
        description: "Support your feet through your morning run with the Nike Women's Run Swift \
        3 Running Shoes. Mesh panels in the uppers provide cooling ventilation while flywire cables\
        lock your feet in place."
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
        size: "8",
        description: "Elevate your everyday look with Magellan Outdoors Men's Clive II Shoes. \
        Perfect for backyard hangouts and casual outings, they feature flexible man made and \
        textile uppers with easy slip-on style."
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
        size: "11",
        description: "Combine comfort and style with the SKECHERS Men's Slade Bungee Lace Slip-In Shoes. \
        The Air-Cooled Memory Foam insoles boost breathability to help your feet feel cool in the heat, \
        and the mesh and synthetic uppers promote durability."
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
        size: "7",
        description: "Slip on a new style with the Converse Men's Chuck Taylor All-Star Malden Street Low \
        Top Shoes. The premium canvas material ensures breathability, while OrthoLite cushioning provides comfort."
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
        size: "8",
        description: "The Arizona EVA sandal is a lightweight, water-friendly sandal molded after \
        the iconic cork original you know and love. Providing true comfort and support, these are \
        perfect for your beach and pool adventures."
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
        size: "10",
        description: "Birkenstock's two-strap classic, the Arizona features their iconic original \
        contoured cork footbed for all day support. Featuring a synthetic leather upper, it's perfect \
        for casual errands, post-hike adventures, or anywhere in between."
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
        size: "9",
        description: "The Crocs™ Adults' Classic Clogs feature a loose-fit design and are made from \
        fully molded Croslite™ thermoplastic material that forms to your feet to create a comfortable, custom fit."
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
        size: "6",
        description: "Stay comfortable in style with the Crocs Adults' Classic Glitter Clogs. These \
        classic clogs feature a lightweight cushioned construction with Crocs Comfort™ for a comfortable wear. \
        The ventilation ports add breathability and help shed water and debris, while the allover built-in \
        glitter design adds a stylish look."
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
        size: "13",
        description: "Conquer what life throws at you with the Timberland Men's Allstone Shoes. The Premium \
        Timberland leather uppers afford durability, while the ground-contact EVA midsoles provide comfort. \
        The lace closures offer a secure fit."
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
        size: "8",
        description: "Slide into style and comfort with the Crocs Adults' Mellow Recovery Slides. \
        The LiteRide foam footbeds provide a comfortable feel, while the upper windows offer improved \
        breathability. The contemporary uppers deliver a stylish look."
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
        size: "8",
        description: "Hit the beach in style with the HEYDUDE Men's Wally Hey20 Slip-on Shoes. \
        These slip-on shoes have pull tabs on the heels so you can put them on quickly. \
        The mesh uppers, foam insoles and padded collars provide a comfortable beach fit, \
        and the traction pods on the outsoles help you keep your footing."
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
        size: "11",
        description: "Step out for a run sporting the Under Armour Men's Charged Assert 10 \
        Running Shoes. The rubber outsoles are durable enough to remain resilient no matter \
        what terrain you run on, and the mesh uppers with synthetic overlays provide added comfort."
    },
    {
        id: 16,
        name: "Adidas Men's GameCourt 2 Tennis Shoes",
        price: "$55.99",
        image: "assets/images/adidas Men's GameCourt 2 Tennis Shoes.png",
        brand: "Adidas",
        category: "Athletic", 
        gender: "Men's",
        color: "White",
        size: "10",
        description: "Play your best game in the adidas Men's GameCourt 2 Tennis Shoes. \
        EVA midsoles energize your steps with responsive cushioning, while padded heels provide stability."
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
        size: "10",
        description: "The New Balance Men's 696v5 Tennis Shoes are sleek, comfortable and ready to play. \
        The uppers have a low-cut design and are crafted from performance man-made materials. \
        The durable soles are non-marking and help you move efficiently on the court."
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
        size: "12",
        description: "Move side to side with ease in the ASICS Men's Gel-Dedicate 8 Tennis Shoes. \
        These flexible shoes help you feel centered and move confidently during long tennis matches. \
        Synthetic leather uppers with overlays and laces keep your feet locked in and supported, \
        while wrap-up outsoles keep your feet stable."
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
        size: "12",
        description: "Tear up the court during games and practices when you sport the Nike Men's Kyrie \
        Flytrap II Basketball Shoes. Featuring Nike™ Zoom technology, these shoes deliver a controlled \
        feel while you run, dribble and pivot and are inspired by NBA player Kyrie Irving."
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
        size: "10",
        description: "Step out onto the court with the Nike Men's LeBron VII TB Basketball Shoes. \
        The breathable, lightweight upper construction features cooling and air movement, while the \
        LeBron design makes it clear you're a true fan."
    },
    {
        id: 21,
        name: "Adidas Adults' Trae Unlimited Basketball Shoes",
        price: "$65.99",
        image: "assets/images/adidas Adults' Trae Unlimited Basketball Shoes.png",
        brand: "Adidas",
        category: "Athletic", 
        gender: "Both",
        color: "White",
        size: "9",
        description: "Wear the adidas Adults' Trae Unlimited Basketball Shoes for comfort while playing \
        your favorite sport. Featuring textile uppers and lining to create a unique look, these shoes \
        are made with recycled materials. The shoes also come with rubber outsoles to provide traction."
    },
    {
        id: 22,
        name: "Adidas Men's Adilette Shower Slides",
        price: "$24.99",
        image: "assets/images/adidas Men's Adilette Shower Slides.png",
        brand: "Adidas",
        category: "Casual", 
        gender: "Men's",
        color: "Red",
        size: "8",
        description: "After an intense day, your feet will thank you for the adidas Men's Adilette Shower \
        Slides. With cloudfoam footbeds that are contoured to your foot's natural shape and movement, these \
        slides are easy to slip on comfortable and relaxed feeling."
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
        size: "12",
        description: "Lounge by the pool with the Magellan Outdoors Men's EVA Cushion Pool Slides. \
        The EVA uppers provide a soft feel, while the comfort footbeds offers increased cushioning."
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
        size: "7",
        description: "Slide into comfort with the Magellan Outdoors Men's Lightweight Flip II Sport \
        Slides. The PU uppers offer durability, while the footbeds provide cushioned comfort. The \
        slip on design allows for easy on/off."
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
        size: "5",
        description: "Find a spot by the water and enjoy your day wearing the Teva Men’s Winstead \
        Sandals. The webbed uppers provide a lightweight, breathable wear, and the water-friendly \
        design helps ensure your feet stay comfortable when moving in the water."
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
        size: "9",
        description: "Complete your casual look with the New Balance Men's 515 Retro Sneaker. \
        Featuring a heritage-inspired design, these shoes have suede leather uppers. \
        Solid-rubber outsoles provide support."
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
        size: "6",
        description: "Kick up your everyday wardrobe with the New Balance Men's 997H Shoes. \
        These retro-inspired shoes feature stylish leather uppers for a classy look. \
        The lightweight cushioning delivers durability and day-long comfort."
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
        size: "11",
        description: "Hit the weights with the New Balance Men's 608 Training Shoes. \
        The synthetic uppers afford durability, while the PU insoles provide comfort. \
        The lace closures offer a snug fit."
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
        size: "12",
        description: "Built for wet conditions and long hours, the Wolverine Men's Trade Wedge \
        Steel Toe Boots keep you comfortable and protected. The steel toe provides safety \
        without sacrificing flexibility, while waterproof materials shield your feet from the elements."
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
        size: "10",
        description: "Get to work with the Ariat Men's Treadfast Waterproof Steel Toe Work Boots.\
        The full-grain leather uppers afford durability, while the Duratread outsoles are oil \
        and slip resistant for lasting wear."
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
        size: "9",
        description: "You've got a big job ahead, and you need the right boots to get you through. \
        With the Wolverine Men's Rancher EH Steel Toe Wellington Waterproof Work Boots, you'll \
        stay protected from tough site conditions, thanks to the electrical hazard (EH) rating and steel toes."
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
        size: "8",
        description: "Feel confident performing high-demanding tasks wearing the Brazos Men's Midnight II \
        Soft Toe Boots. The PVC waterproof upper construction helps keep your feet dry all day, and the \
        PU molded removable footbeds deliver a snug and comfortable feel."
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
        size: "10",
        description: "Gear up for a day out on the water with the Xtratuf Men's Ankle Deck Boots. \
        Hand laid rubber construction provides durability for long-lasting use, and the waterproof \
        design ensures you feet stay dry throughout the day."
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
        size: "11",
        description: "Keep your feet comfortable and protected during the hunting trip with the \
        LaCrosse Men's 18 in Grange Mossy Oak Country DNA Hunting Boots. The ZXT rubber construction \
        delivers a stretchy and waterproof design that lasts, and the EVA footbeds offer comfort during \
        the hunt. "
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
        size: "4",
        description: "Put your stylish side on display on and off the court whenever you pull on and lace \
        up the Nike Women's Court Legacy Lift Platform Shoes. The layered uppers create a classic look and \
        fit. The pillowed heels and tongues add a soft feel."
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
        size: "5",
        description: "Get retro with the Nike Women's Waffle Debut Shoes. These classic sneakers feature a \
        nylon suede upper that offer a modern look. The lifted foam midsole provides a comfortable ride, \
        while the rubber waffle outsole offers excellent traction and durability."
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
        size: "6",
        description: "Slip into the New Balance Women's 237 Lifestyle Shoes and head out in comfort. \
        The suede, mesh and nylon uppers deliver softness and flex, while the brand details express \
        an eye-catching appearance."
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
        size: "8",
        description: "Support your feet through your morning run with the Nike Women's Run Swift 3 Running Shoes. \
        Mesh panels in the uppers provide cooling ventilation while flywire cables lock your feet in place. \
        Foam midsoles cushion your feet for softness at every step, and the rubber outsoles feature flex \
        grooves to promote natural motion."
    },
    {
        id: 37,
        name: "Adidas Women's X_PLR Path Shoes",
        price: "$57.99",
        image: "assets/images/adidas Women's X_PLR Path Shoes.png",
        brand: "Adidas",
        category: "Athletic", 
        gender: "Women's",
        color: "Red",
        size: "5",
        description: "Enjoy comfortable cushioning with every step in the adidas Women's X_PLR Path Shoes. \
        Suitable for either casual wear or exercise, these versatile shoes deliver an athletic look and feel."
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
        size: "3",
        description: "Show off your casual, sporty style in the Nike Women's Air Max SC Shoes. These \
        shoes feature leather, textile and mesh uppers for a durability and long-lasting comfort. \
        The Max Air units deliver lightweight cushioning with every step, while the rubber outsoles \
        are designed with flex grooves to provide traction and durability."
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
        size: "8",
        description: "Feel confident and comfortable with the ASICS Women's Jolt 4 Shoes. \
        The engineered mesh upper construction offers breathability, and the solid rubber \
        outsoles with flex grooves ensure long-lasting use and optimal movement."
    },
    {
        id: 40,
        name: "Adidas Women's Galaxy 7 Running Shoes",
        price: "$49.99",
        image: "assets/images/adidas Women's Galaxy 7 Running Shoes.png",
        brand: "Adidas",
        category: "Running", 
        gender: "Women's",
        color: "Pink",
        size: "6",
        description: "Ditch the schedule, chase the day! The adidas Women's Galaxy 7 \
        Running Shoes are your comfy companions for wherever life takes you. The \
        breathable mesh upper keeps your feet cool on the move, while the Cloudfoam \
        midsole delivers a springy, cushioned ride."
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
        size: "5",
        description: "Go for your new personal best when you wear the Brooks Women's \
        Ghost 16 Running Shoes. The super-soft, nitrogen-infused DNA LOFT v3 cushioning \
        delivers lightweight comfort, while the engineered air mesh uppers provide a \
        combination of stretch, structure and breathability. "
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
        size: "4",
        description: "Lace up for plush comfort with the Nike Women's Journey Running Shoes. \
        These running shoes feature ultra-soft cushioning that absorbs shock with every stride, \
        keeping your feet happy on every run. "
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
        size: "8",
        description: "Show off your 80's style in the Nike Women’s Court Vision Low Next Nature Shoes. \
        These shoes feature durable synthetic uppers with a low-top style for a modern, 80's look. \
        The perforated toes and sides keep your feet cool, while the rubber outsoles deliver sturdy traction."
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
        size: "6",
        description: "The Reef Women's Cushion Vista Hi Sandals are a versatile choice for women seeking a \
        comfortable and stylish summer sandal. They combine a trendy platform design with superior cushioning, \
        water-resistant materials, and a durable construction, making them ideal for everyday wear, light \
        adventures, or poolside relaxation."
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
        size: "5",
        description: "Escape in style with the Crocs Women's Getaway Strappy Sandal. These chic sandals \
        feature a trendy strappy design that adds flair to any outfit. Made with Crocs' signature \
        comfort technology, they offer support and cushioning for all-day wear."
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
        size: "7",
        description: "Enjoy casual comfort with the Freely Women's Double Band EVA Slide. \
        The EVA uppers offer durability, while the footbeds provide a comfortable feel. \
        The slip-on design allows for easy on and off."
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
        size: "4",
        description: "Birkenstock's two-strap classic, the Arizona features their iconic \
        original contoured cork footbed for all day support. Featuring a synthetic leather \
        upper, it's perfect for casual errands, post-hike adventures, or anywhere in between."
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
        size: "6",
        description: "Step to it with the OOFOS Women's OOlala Luxe Recovery Sandals. The synthetic \
        uppers afford durability, while the OOfoam™ recovery technology helps reduce stress on your \
        feet, knees and back. The moisture and bacteria resistant design ensures a fresh feel. \
        Indulge your feet in luxurious recovery."
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
        size: "5",
        description: "If you need a pair of slides that offer cool style without sacrificing comfort, \
        turn to the Freely Women's Delilah Comfort Slides. These slides are made from a single piece \
        of EVA to help provide long-lasting comfort without adding bulk, and the textured footbeds \
        provide grip to help you walk confidently."
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
        size: "8",
        description: "Enjoy a casual, stylish look with the Freely Women's Raffia Platform Sandals. \
        The textile uppers afford durability, while the adjustable buckles with hook-and-loop closures \
        offer a secure fit."
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
        size: "6",
        description: "Step into style with the Converse Women's Chuck Taylor All-Star High-Top Shoes. \
        The canvas material is lightweight and durable, and the textile linings provide a comfortable \
        feel. The high-top design offers ankle support."
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
        size: "7",
        description: "Get ready for your next outing with the SKECHERS Women's Summits Fun Flair Shoes. \
        The vegan mesh uppers promote breathability, while the Memory Foam cushioned insoles provide \
        comfort. The flexible outsoles offer traction, and the stretch laces deliver a slip-on fit."
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
        size: "8",
        description: "Step into a world of style with the Converse Women's Chuck Taylor All-Star \
        Shoreline Slip-On Shoes. The canvas material is durable, and the textile linings provide \
        comfort. The fixed laces, stretchy collars and heel loops offer easy on and off, and the \
        OrthoLite cushioning adds comfort."
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
        size: "9",
        description: "Step onto the court ready to play with the Nike Women's Zoom Court Lite 3 \
        Tennis Shoes. The leather uppers provide flexibility and durability, while the data-\
        informed outsoles offer grip and additional durability. The Zoom Air units in the \
        forefoot deliver increased response, and the plush padded collars ensure a snug fit."
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
        size: "7",
        description: "Take your game to the next level in the Mizuno Women's Wave Luminous 2 Court Shoes. \
        The knit uppers supply a soft, lightweight feel. The DynamotionFit Bootie construction encourages \
        a snug fit for stability."
    },
    {
        id: 56,
        name: "Adidas Women's adizero Ubersonic 4 Tennis Shoes",
        price: "$104.99",
        image: "assets/images/adidas Women's adizero Ubersonic 4 Tennis Shoes.png",
        brand: "Adidas",
        category: "Athletic", 
        gender: "Women's",
        color: "Yellow",
        size: "6",
        description: "Stay game ready on the court in the adidas Women's adizero Ubersonic 4 Tennis Shoes. \
        The Primegreen engineered stretch woven uppers with ADIWEAR™ elements provide durability, \
        lightweight, secure wear and an ecofriendly design."
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
        size: "5",
        description: "Show off your basketball skills with the Nike Adults' Air Zoom GT \
        Cut Academy Basketball Shoes. The mesh upper construction offers ventilation for \
        all-day comfort, and the Air Zoom technology provides a soft feel with every jump."
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
        size: "9",
        description: "Cruise down the court in the Nike Women's Renew Elevate 3 Basketball Shoes. \
        The foam construction provides comfort, while the lace closures offer a secure fit. \
        The logos deliver a stylish look."
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
        size: "8",
        description: "Rain won't keep you from exploring the great outdoors with the Magellan \
        Outdoors Women's Short Rubber Boots. The rubber uppers are waterproof, and the rubber \
        outsoles are slip-resistant. Memory foam footbeds cradle and cushion your feet with every step."
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
        size: "5",
        description: "Prepare for rainy days with the Xtratuf Women's Ankle Deck Boots. \
        These boots have slip-resistant outsoles to help keep your footing secure and steady, \
        while the EVA foam insoles provide comfort that lasts throughout the day. 100% waterproof \
        for maximum protection."
    }
];

const productsPerPage = 15;
let currentPage = 1;
let filteredResults = null;

var searchBar = document.getElementById('searchbar') || document.querySelector('.search-bar');

function loadProductGrid(page = 1) {
    const container = document.getElementById("product-grid");
    if (!container) return;

    container.innerHTML = "";

    const itemsToDisplay = filteredResults || products;
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const currentProducts = itemsToDisplay.slice(start, end);

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

    updatePagination(itemsToDisplay.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePagination(totalItems) {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;

    pagination.innerHTML = "";
    const totalPages = Math.ceil(totalItems / productsPerPage);

    if (currentPage > 1) {
        const prev = document.createElement("button");
        prev.textContent = "Previous";
        prev.onclick = () => {
            currentPage--;
            loadProductGrid(currentPage);
        };
        pagination.appendChild(prev);
    }

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

    if (currentPage < totalPages) {
        const next = document.createElement("button");
        next.textContent = "Next";
        next.onclick = () => {
            currentPage++;
            loadProductGrid(currentPage);
        };
        pagination.appendChild(next);
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
    document.getElementById("product-description").textContent = product.description;
}

function performSearch() {
    const query = document.getElementById('searchbar').value.trim();
    if (query === "") {
        filteredResults = null;
    } else {
        const searchRegex = new RegExp(query, 'i');
        filteredResults = products.filter(product =>
            searchRegex.test(product.name) ||
            searchRegex.test(product.brand) ||
            searchRegex.test(product.size)
        );
    }
    currentPage = 1;
    loadProductGrid(currentPage);
}

//Handle search bar enter key (on any page)
function handleSearchKeyPress(e) {
    if (e.key === "Enter") {
        const query = e.target.value.trim();
        if (query !== "") {
            localStorage.setItem("searchQuery", query);
            window.location.href = "index.html";
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const isOnIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/index");

    if (isOnIndex) {
        const storedQuery = localStorage.getItem("searchQuery");
        if (storedQuery) {
            const input = document.getElementById("searchbar");
            if (input) input.value = storedQuery;

            const searchRegex = new RegExp(storedQuery, 'i');
            filteredResults = products.filter(product =>
                searchRegex.test(product.name) ||
                searchRegex.test(product.brand) ||
                searchRegex.test(product.size)
            );
            localStorage.removeItem("searchQuery");
        }

        loadProductGrid(currentPage);
    }
    if (isOnIndex) {
        populateFilters();
        const loggedInUser = localStorage.getItem("loggedInUser");
        const savedFilters = JSON.parse(localStorage.getItem(loggedInUser ? `filters_${loggedInUser}` : "filters_guest"));
        if (savedFilters) {
            for (const [filter, values] of Object.entries(savedFilters)) {
                values.forEach(val => {
                const checkbox = document.querySelector(`input[data-filter="${filter}"][value="${val}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
        applyFilters();
        }
    }
});

const isOnIndex = window.location.pathname.endsWith("index.html") || 
                  window.location.pathname === "/" || 
                  window.location.pathname.endsWith("/index");

if (searchBar) {
    //Live search only on index.html
    if (isOnIndex) {
        searchBar.addEventListener('keyup', performSearch);
    }

    //Enter key search on all pages
    searchBar.addEventListener('keypress', handleSearchKeyPress);
}

function getUniqueOptions(attribute) {
    const all = products.map(p => p[attribute]);
    const unique = [...new Set(all)];
    //Sort numerically for the size and price dropdown
    if (attribute === "size" || attribute === "price") {
        return unique.sort((a, b) => {
            const numA = attribute === "price" ? parseFloat(a.replace('$', '')) : parseFloat(a);
            const numB = attribute === "price" ? parseFloat(b.replace('$', '')) : parseFloat(b);
            return numA - numB;
        });
    } else {
        //Sort alphabetically for every other filter
        return unique.sort((a, b) => a.localeCompare(b));
    }
}


function toggleDropdown(filter) {
    const dropdown = document.getElementById(`${filter}-dropdown`);
    const isVisible = dropdown.style.display === 'block';
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
    if (!isVisible) dropdown.style.display = 'block';
}

function populateFilters() {
    const filters = ['category', 'brand', 'size', 'color', 'gender', 'price'];
    filters.forEach(filter => {
        const dropdown = document.getElementById(`${filter}-dropdown`);
        const options = getUniqueOptions(filter);

        dropdown.innerHTML = options.map(opt => `
            <label><input type="checkbox" value="${opt}" data-filter="${filter}" onchange="applyFilters()"> ${opt}</label>
        `).join('');
    });
}

function applyFilters() {
    const filters = {};
    document.querySelectorAll('.dropdown input[type="checkbox"]:checked').forEach(input => {
        const filterName = input.dataset.filter;
        if (!filters[filterName]) filters[filterName] = [];
        filters[filterName].push(input.value);
    });

    const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            localStorage.setItem(`filters_${loggedInUser}`, JSON.stringify(filters));
        } else {
            localStorage.setItem("filters_guest", JSON.stringify(filters));
        }

    filteredResults = products.filter(product => {
        return Object.entries(filters).every(([key, values]) => values.includes(product[key]));
    });

    currentPage = 1;
    loadProductGrid();
}

function clearFilters() {
    document.querySelectorAll('.dropdown input[type="checkbox"]').forEach(cb => cb.checked = false);
    localStorage.removeItem("activeFilters");
    filteredResults = null;
    loadProductGrid();
}

document.addEventListener('click', function (event) {
    const isDropdownButton = event.target.closest('.filter-group > button');
    const isInsideDropdown = event.target.closest('.dropdown');

    if (!isDropdownButton && !isInsideDropdown) {
        document.querySelectorAll('.dropdown').forEach(drop => {
            drop.style.display = 'none';
        });
    }
});