import { produce } from "immer";
import { IProduct, IProductInCart } from "../types/product";

export function dataproduced(products: IProduct[]): IProductInCart[] {
    return produce(products as IProductInCart[], (draft) => {
        draft.forEach((item) => {
            item.quantityordered = 1;
        });
    });
}

export const searchProducts = (
    datasearch: {
        types: string[];
        stars: number[];
    },
    data: IProduct[],
): IProduct[] => {
    if (
        (datasearch?.types?.length <= 0 && datasearch?.stars?.length <= 0) ||
        (datasearch?.stars?.[0] == 0 && datasearch?.types?.[0] == "")
    ) {
        return data;
    }
    return data.filter(
        (product) =>
            datasearch?.types.includes(product.type) ||
            datasearch?.stars.includes(product.star),
    );
};
