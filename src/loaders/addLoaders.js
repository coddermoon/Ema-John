import { getStoredCart } from "../assets/utilities/fakedb"

export const addLoaders=async ()=>{
    // get products
    const productData = await fetch('fakeData/products.json')
    const products = await productData.json()

    // get cart from localStorage
const savedCart= getStoredCart()
const initialCart=[] 
for (const id in savedCart){
 
const addedProduct= products.find(product=>product.id===id)
if (addedProduct) {
    const quantity = savedCart[id];
            addedProduct.quantity = quantity;

    initialCart.push(addedProduct)
}

}

console.log( initialCart)
    return {products,initialCart}
}