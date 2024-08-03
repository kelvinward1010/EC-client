import { Checkbox, Col, Row } from "antd";
import { CardProduct } from "../../../components/cardproduct/CardProduct";
import { products } from "../../../data";
import { IProduct } from "../../../types/product";
import styles from "./Search.module.scss";
import type { GetProp } from "antd";
import { useSearchParams } from "react-router-dom";
import { TYPESPRODUCTSCHECKBOX } from "../../../constant";

export function Search() {
    const [typesParams, setTypesParams] = useSearchParams();
    const keysSearchOnParams = typesParams.getAll("type");

    const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
        checkedValues,
    ) => {
        setTypesParams({ type: checkedValues as string[] });
    };

    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <Checkbox.Group
                    style={{ width: "100%" }}
                    onChange={onChange}
                    defaultValue={keysSearchOnParams}
                >
                    <Row wrap>
                        {TYPESPRODUCTSCHECKBOX.map((value, index) => (
                            <Col
                                span={8}
                                key={index}
                                style={{ minWidth: "100px" }}
                            >
                                <Checkbox checked={true} value={value.value}>
                                    {value.label}
                                </Checkbox>
                            </Col>
                        ))}
                    </Row>
                </Checkbox.Group>
            </div>
            <div className={styles.box2}>
                {products
                    ?.slice(0, 5)
                    .map((item: IProduct) => (
                        <CardProduct key={item?._id} item={item} />
                    ))}
            </div>
        </div>
    );
}
