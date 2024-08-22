import { IOrder } from "../types/order";
import { IProduct } from "../types/product";
import { dataproduced } from "../utils/data";

export const products: IProduct[] = [
    {
        _id: "1",
        name: "Product name",
        description: "Product description",
        image: "https://dosi-in.com/images/detailed/505/dosiin-hugu-ao-so-mi-tay-ngan-nam-nu-hugu-the-stamps-vai-lua-thoang-mat-505377505377.jpg",
        quantity: 100,
        price: 100,
        star: 1,
        type: "Fashion",
        createdAt: "20/07/2024",
        updatedAt: "20/07/2024",
    },
    {
        _id: "2",
        name: "Product name",
        description: "Product description",
        image: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
        quantity: 100,
        price: 100,
        star: 2,
        type: "Toys",
        createdAt: "20/07/2024",
        updatedAt: "20/07/2024",
    },
    {
        _id: "3",
        name: "Product name",
        description: "Product description",
        image: "https://m.media-amazon.com/images/I/61O19dYBtCL._AC_UY1100_.jpg",
        quantity: 100,
        price: 100,
        star: 3,
        type: "Book",
        createdAt: "20/07/2024",
        updatedAt: "20/07/2024",
    },
    {
        _id: "4",
        name: "Product name",
        description: "Product description",
        image: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
        quantity: 100,
        price: 100,
        star: 4,
        type: "Electronic",
        createdAt: "20/07/2024",
        updatedAt: "20/07/2024",
    },
    {
        _id: "5",
        name: "Product name",
        description: "Product description",
        image: "https://m.media-amazon.com/images/I/61O19dYBtCL._AC_UY1100_.jpg",
        quantity: 100,
        price: 100,
        star: 5,
        type: "Appliances",
        createdAt: "20/07/2024",
        updatedAt: "20/07/2024",
    },
];

export const dataInCart = dataproduced(products);

export const dataOrdered: IOrder[] = [
    {
        paymentmethod: "Thanh toán khi nhận hàng",
        idUser: "????",
        personalinfomation: {
            name: "Kelvin",
            phone: "037837458",
            address: "Ha Noi Capital",
        },
        products: dataInCart.slice(0, 2),
        yourinvoice: {
            price: 120,
            shipping_price: 10,
            totalprice: 130,
        },
        completed: false,
        createdAt: "20/07/2024",
        updatedAt: "20/07/2024",
    },
    {
        paymentmethod: "Thanh toán online",
        idUser: "????",
        personalinfomation: {
            name: "Kelvin",
            phone: "037837458",
            address: "Ha Noi Capital",
        },
        products: dataInCart.slice(0, 2),
        yourinvoice: {
            price: 320,
            shipping_price: 10,
            totalprice: 330,
        },
        completed: false,
        createdAt: "22/07/2024",
        updatedAt: "22/07/2024",
    },
];
