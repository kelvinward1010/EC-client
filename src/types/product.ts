export type IProduct = {
    _id: string;
    name: string;
    image: string;
    description: string;
    quantity: number;
    price: number;
    star: number;
    type: string;
    createdAt: string;
    updatedAt: string;
};

export interface IProductInCart extends IProduct {
    quantityordered: number;
}
