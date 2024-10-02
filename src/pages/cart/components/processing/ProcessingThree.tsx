import styles from "./ProcessingThree.module.scss";
import { Radio, RadioChangeEvent } from "antd";
import { cashpaymentImg, onlinepaymentImg } from "../../../../assets/images";
import { PAYMENTMETHODS } from "../../../../constant/config";

interface ProcessingThreeProps {
    valuePayment: string;
    setValuePayment: (value: string) => void;
}

function ProcessingThree({
    valuePayment,
    setValuePayment,
}: ProcessingThreeProps) {
    const onChange = (e: RadioChangeEvent) => {
        setValuePayment(e.target.value);
    };

    return (
        <div className={styles.container}>
            <Radio.Group
                className={styles.radiomain}
                onChange={onChange}
                value={valuePayment}
            >
                {PAYMENTMETHODS.map((method, idx) => (
                    <Radio key={idx} value={method.value}>
                        {method.label}
                    </Radio>
                ))}
            </Radio.Group>
            <div className={styles.paymentmethodpreview}>
                <img
                    src={
                        valuePayment === PAYMENTMETHODS[0].value
                            ? cashpaymentImg
                            : onlinepaymentImg
                    }
                    alt=""
                />
            </div>
        </div>
    );
}

export default ProcessingThree;
