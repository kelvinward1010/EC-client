import { Checkbox, Col, Row } from "antd";
import styles from "./CheckBoxConfig.module.scss";
import ItemProduct from "./ItemProduct";
import { IProduct } from "../../../types/product";

interface CheckBoxConfigProps {
    data: IProduct;
    checked: () => boolean;
}

export const CheckBoxConfig: React.FC<CheckBoxConfigProps> = ({
    data,
    checked,
}) => {
    const isCheck = checked();
    return (
        <div className={styles.container}>
            <Row justify={"start"}>
                <Col span={2} className={styles.checkboxx}>
                    <Checkbox
                        checked={isCheck}
                        className="checkbox_fix"
                        value={data}
                    />
                </Col>
                <Col span={22} className={styles.children}>
                    <ItemProduct item={data} />
                </Col>
            </Row>
        </div>
    );
};
