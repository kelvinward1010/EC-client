import { produce } from "immer";
import { IProduct, IProductInCart } from "../types/product";

export function dataproduced(products: IProduct[]): IProductInCart[] {
    return produce(products as IProductInCart[], (draft) => {
        draft.forEach((item) => {
            item.quantityordered = 1;
        });
    });
}
