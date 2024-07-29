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
        star: 5,
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
        star: 5,
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
        star: 5,
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
        star: 5,
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
        createdAt: "20/07/2024",
        updatedAt: "20/07/2024",
    },
];

export const dataInCart = dataproduced(products);
