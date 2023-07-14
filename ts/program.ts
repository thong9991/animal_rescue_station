import { ProductManager } from "./product-manager.js";
import { Product } from "./product.js";
import { productsData } from "./data.js";

export class Program {

    private productManager: ProductManager;
    private divList: HTMLElement;

    constructor() {
        this.productManager = new ProductManager();
        this.loadData(productsData);
        this.loadElement();
        this.initEvent();
    }

    private loadData(data: any) {
        console.log("load data")
        let products = [];
        for (let e of data) {
            //const e = productsData[i];
            //products.push(new Product(e.id, e.name, e.price, e.img));
            const newProduct = new Product(e.id, e.name, e.price, e.img);
            products.push(newProduct)
        }
        
        this.productManager.products = products;
        //productManager của cái Program
        //Chấm tới products là truy cập tới thuộc tính của products (là 1 cái mảng)

    }

    private loadElement() {
        this.divList = document.getElementById("product-list");
        console.log(this.divList);
    }

    private initEvent(){

    }


    private render() {
        console.log("reder func");
        for (let i = 0; i < this.productManager.products.length; i++) {
            const { id, name, price } = this.productManager.products[i];

            const divItem = document.createElement('div');
            divItem.className = 'pb-5';

            const content = document.createElement('div');
            content.className = "product-item position-relative bg-light d-flex flex-column text-center";

            const img = document.createElement('img');
            img.className = "img-fluid mb-4";
            img.src = `img/product-${id}.png`;

            const h6 = document.createElement('h6');
            h6.className = "text-uppercase";
            h6.innerHTML = name;

            const h5 = document.createElement('h5');
            h5.className = "text-primary mb-0";
            h5.innerHTML = `$${price.toString()}`;

            const actionButton = document.createElement("div");
            actionButton.className = "btn-action d-flex justify-content-center";

            const a1 =  document.createElement('a');
            a1.className = "btn btn-primary py-2 px-3";

            const cartIcon =  document.createElement('i');
            cartIcon.className = "bi bi-cart";

            const a2 =  document.createElement('a');
            a2.className = "btn btn-primary py-2 px-3";

            const eyeIcon =  document.createElement('i');
            eyeIcon.className = "bi bi-eye";

            content.appendChild(img);
            content.appendChild(h6);
            content.appendChild(h5);
            
            a1.appendChild(cartIcon);
            actionButton.appendChild(a1);

            a2.appendChild(eyeIcon);
            actionButton.appendChild(a2);

            content.appendChild(actionButton);


            divItem.appendChild(content);
            this.divList.appendChild(divItem);
        }
        $(".product-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 45,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });
        
    }
    /*
    <div class="pb-5">
        <div
            class="product-item position-relative bg-light d-flex flex-column text-center"
        >
            <img class="img-fluid mb-4" src="img/product-1.png" alt="" />
            <h6 class="text-uppercase">Quality Pet Foods</h6>
            <h5 class="text-primary mb-0">$199.00</h5>
            <div class="btn-action d-flex justify-content-center">
            <a class="btn btn-primary py-2 px-3" href=""
                ><i class="bi bi-cart"></i
            ></a>
            <a class="btn btn-primary py-2 px-3" href=""
                ><i class="bi bi-eye"></i
            ></a>
            </div>
        </div>
    </div>
    */

    private clear(){
        this.divList.innerHTML = "";
    }
    public run(): void {
        //console.log(this.bookManager);
        this.render();
        console.log(this.productManager);
    }
}

const p = new Program();
p.run();
