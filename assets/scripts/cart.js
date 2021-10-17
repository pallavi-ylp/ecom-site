function getCartItems(){
    let productFromSession = sessionStorage.getItem('itemInCart')
    if(productFromSession == null) {
        productFromSession = []

    }
    else {
        productFromSession = JSON.parse(productFromSession)
    }
    return productFromSession
}

function addProductToCart(id, category) { 
    let productFromSession = getCartItems()
    productFromSession.push([id,category])
    sessionStorage.setItem('itemInCart' , JSON.stringify(productFromSession))
}




