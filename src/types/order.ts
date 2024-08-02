import { IProductInCart } from "./product";

export interface IOrder {
    paymentmethod: string;
    idUser: string;
    personalinfomation: {
        name: string;
        phone: string;
        address: string;
    };
    products: IProductInCart[];
    yourinvoice: {
        price: number;
        shipping_price: number;
        totalprice: number;
    };
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}

export type IOrderInCart = Omit<IOrder, "createdAt" | "updatedAt">;
