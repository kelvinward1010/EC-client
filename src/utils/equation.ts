import { IProduct } from "../types/product";

export const totalPrice = (data: IProduct[]) => {
    let total: number = 0;

    data?.forEach((item: IProduct) => {
        total += Number(item.price);
    });

    return total;
};
