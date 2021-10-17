let products = [
    { id: 101, category: 'men', name: 'T-Shirt Full Sleeve', price: 650, freeDelivery: false },
    { id: 102, category: 'men', name: 'T-Shirt', price: 2000, freeDelivery: true },
    { id: 103, category: 'men', name: 'Jacket', price: 6000, freeDelivery: false },
    { id: 104, category: 'men', name: 'Sharvani', price: 1000, freeDelivery: true },
    { id: 105, category: 'men', name: 'T-Shirt Half Sleeve', price: 1500, freeDelivery: true },
    { id: 106, category: 'men', name: 'Jeans', price: 4000, freeDelivery: true },
    { id: 107, category: 'men', name: 'Belt', price: 600, freeDelivery: false },
    { id: 108, category: 'men', name: 'Shoes Puma', price: 5000, freeDelivery: true },
    { id: 109, category: 'men', name: 'Jeans Short', price: 2000, freeDelivery: true },
    { id: 110, category: 'men', name: 'Shoes Adidas', price: 1300, freeDelivery: true },
    { id: 111, category: 'men', name: 'Sneakers', price: 1300, freeDelivery: true },
    { id: 112, category: 'men', name: 'shirt_full_Sleeve', price: 2500, freeDelivery: false },
    { id: 113, category: 'men', name: 'shirt_half_Sleeve', price: 850, freeDelivery: true },
    { id: 114, category: 'men', name: 'bags', price: 1100, freeDelivery: true },
    { id: 115, category: 'men', name: 'hats', price: 900, freeDelivery: true },
    { id: 116, category: 'men', name: 'sandals', price: 780, freeDelivery: true },
    { id: 117, category: 'men', name: 'backpack', price: 1800, freeDelivery: true },
    { id: 118, category: 'men', name: 'sunglass', price: 660, freeDelivery: true },
    { id: 101, category: 'women', name: 'silkSaree', price: 6000, freeDelivery: true },
    { id: 102, category: 'women', name: 'KanjeevaramSaree', price: 2000, freeDelivery: true },
    { id: 103, category: 'women', name: 'CottonSaree', price: 600, freeDelivery: false },
    { id: 104, category: 'women', name: 'Kurta', price: 1000, freeDelivery: true },
    { id: 105, category: 'women', name: 'tshirts', price: 1500, freeDelivery: true },
    { id: 106, category: 'women', name: 'leggings', price: 400, freeDelivery: true },
    { id: 107, category: 'women', name: 'earings', price: 600, freeDelivery: false },
    { id: 108, category: 'women', name: 'bangle', price: 500, freeDelivery: true },
    { id: 109, category: 'women', name: 'jeans', price: 2000, freeDelivery: true },
    { id: 110, category: 'women', name: 'shoes', price: 1300, freeDelivery: true },
    { id: 111, category: 'women', name: 'sneakers', price: 1300, freeDelivery: true },
    { id: 112, category: 'women', name: 'dupatta', price: 300, freeDelivery: false },
    { id: 113, category: 'women', name: 'backpack', price: 800, freeDelivery: true },
    { id: 114, category: 'women', name: 'bags', price: 1100, freeDelivery: true },
    { id: 115, category: 'women', name: 'hats', price: 900, freeDelivery: true },
    { id: 116, category: 'women', name: 'sandals', price: 780, freeDelivery: true },
    { id: 117, category: 'women', name: 'sunglass', price: 660, freeDelivery: true },
    { id: 101, category: 'electronics', name: 'Samsung Mobile', price: 12000, freeDelivery: true, cod: false },
    { id: 102, category: 'electronics', name: 'iPhone', price: 48000, freeDelivery: true, cod: false },
    { id: 103, category: 'electronics', name: 'Charger', price: 2000, freeDelivery: false, cod: true },
    { id: 104, category: 'electronics', name: 'Bluetooth', price: 3999, freeDelivery: false, cod: true },
    { id: 105, category: 'electronics', name: 'Memory card', price: 1299, freeDelivery: false, cod: true },
    { id: 106, category: 'electronics', name: 'Docker', price: 1500, freeDelivery: true, cod: true },
    { id: 107, category: 'electronics', name: 'Motorola Mobile', price: 15000, freeDelivery: true, cod: false },
    { id: 108, category: 'electronics', name: 'RealMe Mobile', price: 17000, freeDelivery: true, cod: false },
    { id: 109, category: 'electronics', name: 'Samsung TV', price: 12000, freeDelivery: true, cod: false },
    { id: 110, category: 'electronics', name: 'Lenovo laptop', price: 85000, freeDelivery: true, cod: false },
    { id: 111, category: 'electronics', name: 'Acer ', price: 24000, freeDelivery: true, cod: false },
    { id: 112, category: 'electronics', name: 'Acer Predator', price: 112000, freeDelivery: true, cod: false },
    { id: 113, category: 'electronics', name: 'Dell laptop', price: 12000, freeDelivery: true, cod: false },
    { id: 114, category: 'electronics', name: 'Thinkpad', price: 90000, freeDelivery: true, cod: false },
    { id: 115, category: 'electronics', name: 'WashingMachine', price: 50000, freeDelivery: true, cod: false },
    { id: 116, category: 'electronics', name: 'Refrigerator_single_Door', price: 30000, freeDelivery: true, cod: false },
    { id: 117, category: 'electronics', name: 'Refrigerator_double_Door', price: 90000, freeDelivery: true, cod: false },
]

function getAllProducts() {
    let storedProducts = sessionStorage.getItem('products')
    if (storedProducts != null) {
        return JSON.parse(storedProducts)
    }

    var fetchedProducts = products; // API call should be made here.
    sessionStorage.setItem('products', JSON.stringify(fetchedProducts))
    return fetchedProducts
}

function getProductsForCategory(category) {
    let products = getAllProducts()
    return products.filter(x => x.category == category)
}

function getProduct(category, productId) {
    let products = getAllProducts(category)
    return products.find(x => x.id == productId && x.category == category)
}

function populateProductListing(tagId, products) {
    var parentTag = document.getElementById(tagId);
    var newTd = function (content) {
        let tdTag = document.createElement('td');
        tdTag.textContent = content;
        return tdTag;
    }

    products.forEach(p => {
        let isDeliveryFree = p.freeDelivery ? 'Free Delivery Eligible' : 'Free Deliver Not Eligible'

        let trTag = document.createElement('tr');
        trTag.appendChild(newTd(p.id));
        trTag.appendChild(newTd(p.name));
        trTag.appendChild(newTd(p.price));
        trTag.appendChild(newTd(isDeliveryFree));

        let details = document.createElement('a')
        details.setAttribute('id', 'details')
        let editText = document.createTextNode('Details')
        details.appendChild(editText)
        details.href = `product_details.html?id=${p.id}&category=${p.category}`
        trTag.appendChild(details);
        parentTag.appendChild(trTag);
    })
}

function getParameterByName(param) {
    let queryString = window.location.search
    let queryParams = new URLSearchParams(queryString)

    return queryParams.get(param)
}

function currentProduct() {
    let productId = getParameterByName('id')
    let productCategory = getParameterByName('category')

    return getProduct(productCategory, productId);
}
