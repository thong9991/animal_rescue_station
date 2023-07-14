class ProductManager {
    constructor(...products) {
        this._products = products;
    }
    get products() {
        return this._products;
    }
    set products(newProducts) {
        this._products = newProducts;
    }
}
export { ProductManager };
