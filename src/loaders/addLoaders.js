import { getStoredCart } from "../assets/utilities/fakedb"

export const addLoaders=async ()=>{
    // get products
    const productData = await fetch('fakeData/products.json')
    const products = await productData.json()

    // get cart from localStorage
const savedCart= getStoredCart()
console.log(savedCart)
    return {products}
}