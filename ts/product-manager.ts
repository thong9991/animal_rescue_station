import { Product } from "./product.js";
import { productsData } from "./data.js";

class ProductManager {
    private _products: Product[];
    
    constructor(...products: Product[]) {
        this._products = products;
    }

    get products() {
        return this._products;
    }

    set products(newProducts: Product[]) {
        this._products = newProducts;
    }
}
export {ProductManager};