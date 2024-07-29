import { IProductInCart } from "../types/product";

export const totalPrice = (data: IProductInCart[]): number => {
    return data.reduce((acc, item) => {
        const itemTotal = Number(item.price) * Number(item.quantityordered);
        return acc + itemTotal;
    }, 0);
};
