import { dataOrdered } from "../../../data";
import FormOrderProduct from "./FormOrderProduct";
import styles from "./OrderCompleted.module.scss";

function OrderCompleted() {
    return (
        <div className={styles.container}>
            {dataOrdered.map((i, idx) => (
                <FormOrderProduct data={i} key={idx} />
            ))}
        </div>
    );
}

export default OrderCompleted;
