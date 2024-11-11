
const getStoredItems = (key) => {
    const itemsStr = localStorage.getItem(key);
    return itemsStr ? JSON.parse(itemsStr) : [];
};


const getStoreAddToCart = () => getStoredItems('cart');
const getStoreWishlist = () => getStoredItems('wishlist');

//  purchase history
const getPurchaseHistory = () => getStoredItems('purchaseHistory');


const addToCart = (id) => {
    const cartList = getStoreAddToCart();
    cartList.push(id); 
    localStorage.setItem('cart', JSON.stringify(cartList)); 
    console.log(`Item with ID ${id} added to the cart.`);

};



const addToWishlist = (id) => {
    const wishlist = getStoreWishlist();
    wishlist.push(id); 
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
    console.log(`Item with ID ${id} added to the wishlist.`);
};

// removecart 
const removeFromCart = (id) => {
    const cartList = getStoreAddToCart();
    const updatedCart = cartList.filter(itemId => itemId !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log(`Item with ID ${id} removed from the cart.`);
};

//  remove item wishlist
const removeFromWishlist = (id) => {
    const wishlist = getStoreWishlist();
    const updatedWishlist = wishlist.filter(itemId => itemId !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    console.log(`Item with ID ${id} removed from the wishlist.`);
};

//  clear cart ishlist
const clearCartAndWishlist = () => {
    localStorage.removeItem('cart');
    localStorage.removeItem('wishlist');
    console.log('Cart and Wishlist cleared after purchase.');
};


const handlePurchase = () => {
    
    console.log('Processing purchase...');

    const cartList = getStoreAddToCart();
    const allProducts = getStoredItems('allProduct');  
    console.log('Cart List:', cartList);  

    let totalPrice = 0;

    cartList.forEach((id) => {
        const product = allProducts.find((p) => p.product_id.toString() === id);
        if(product){
            console.log('adding product price', product.price)
            totalPrice += product.price || 0;
        }
    })

    savePurchase(totalPrice);
    
    clearCartAndWishlist();

};


const savePurchase = (totalPrice) => {
    const purchaseHistory = getPurchaseHistory();
    const currentCart = getStoreAddToCart();
    const timestamp = new Date().toISOString();
    const newPurchase = {
        items: currentCart,
        date: timestamp,
        totalPrice: totalPrice, 
    };

    console.log('Saving purchase with totalPrice:', totalPrice); 
    purchaseHistory.push(newPurchase);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
    console.log('Purchase saved to purchase history:', newPurchase);
};


export { 
    addToWishlist, 
    getStoreWishlist, 
    addToCart, 
    getStoreAddToCart, 
    getStoredItems,
    removeFromCart,
    removeFromWishlist,
    handlePurchase  
};
