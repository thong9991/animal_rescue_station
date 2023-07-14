
export class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _img: string;

    constructor(id, name, price, img) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._img = img;
    }
    // Getter for the ID of the book
    get id() {
        return this._id;
    }
    // Setter for the ID of the book
    set id(id) {
        this._id = id;
    }
    // Getter for the name of the book
    get name() {
        return this._name;
    }
    // Setter for the name of the book
    set name(name) {
        this._name = name;
    }
    // Getter for the price of the book
    get price() {
        return this._price;
    }
    // Setter for the price of the book
    set price(price) {
        this._price = price;
    }
    // Getter for the provider of the book
    get img() {
        return this._img;
    }
    // Setter for the provider of the book
    set img(img) {
        this._img = img;
    }
}
