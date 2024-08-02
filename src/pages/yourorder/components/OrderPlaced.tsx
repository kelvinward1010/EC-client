import { dataOrdered } from "../../../data";
import FormOrderProduct from "./FormOrderProduct";
import styles from "./OrderPlaced.module.scss";

function OrderPlaced() {
    return (
        <div className={styles.container}>
            {dataOrdered.map((i, idx) => (
                <FormOrderProduct data={i} key={idx} />
            ))}
        </div>
    );
}

export default OrderPlaced;
