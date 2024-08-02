import { IProductInCart } from "../types/product";

export function joinProductNames(products: IProductInCart[]): string {
    const productNames = products.map((product) => product.name);
    const joinedNames = productNames.join(", ");
    return joinedNames;
}
