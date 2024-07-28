import { Typography } from "antd";
import styles from "./HotProduct.module.scss";
import { products } from "../../../data";
import { IProduct } from "../../../types/product";
import { CardProduct } from "../../../components/cardproduct/CardProduct";

const { Title } = Typography;

function HotProduct() {
    return (
        <div className={styles.container}>
            <Title className={styles.titlefix} level={4}>
                Hot Products
            </Title>
            <div className={styles.center}>
                {products
                    ?.slice(0, 5)
                    .map((item: IProduct) => (
                        <CardProduct key={item?._id} item={item} />
                    ))}
            </div>
        </div>
    );
}

export default HotProduct;
