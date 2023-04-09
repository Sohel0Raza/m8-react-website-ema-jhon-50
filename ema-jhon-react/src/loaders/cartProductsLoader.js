import { getShoppingCart } from "../../public/dataBase";

const cartProductsLoader = async() =>{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();
    
    //load data in database
    const storedCart = getShoppingCart()
    console.log('storedCart :', storedCart);

    const savedCart = [];
    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
        // NEED TO SEND TOW THINGS
        //  return [products, savedCart]
        //  return {products, savedCart}
    // console.log(products)
    return savedCart;
}
export default cartProductsLoader;