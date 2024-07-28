import { Checkbox, Col, GetProp, Row, Typography } from "antd";
import styles from "./Cart.module.scss";
import { useCallback, useEffect, useState } from "react";
import { products } from "../../../data";
import { CheckBoxConfig } from "../components/CheckBoxConfig";
import { IProduct } from "../../../types/product";
import { ButtonConfig } from "../../../components/buttonconfig";
import { totalPrice } from "../../../utils/equation";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[any];

const { Text, Title } = Typography;

export function Cart() {
    const [total, setTotal] = useState<number>(0);
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

    const onChange: GetProp<typeof Checkbox.Group, "onChange"> = useCallback(
        (checkedValues) => {
            setCheckedList(checkedValues);
        },
        [checkedList, setCheckedList],
    );

    useEffect(() => {
        let prices = totalPrice(checkedList as IProduct[]);
        setTotal(prices);
    }, [checkedList]);

    return (
        <div className={styles.container}>
            <Row justify={"space-between"}>
                <Col span={15} className={styles.left}>
                    <Checkbox.Group
                        value={checkedList}
                        onChange={onChange}
                        className={styles.checkbox_group}
                    >
                        {products.slice(0, 3)?.map((item: IProduct) => (
                            <CheckBoxConfig
                                data={item}
                                key={item?._id}
                                checked={() => {
                                    const find_item = products?.find(
                                        (i: any) => i.id === item._id,
                                    );
                                    return find_item ? true : false;
                                }}
                            />
                        ))}
                    </Checkbox.Group>
                </Col>
                <Col span={8} className={styles.right}>
                    <Title level={4}>Your invoice</Title>
                    <Row>
                        <Col span={10}>
                            <Text>Price:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{Number(total)}$</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <Text>Shipping price:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>20$</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <Text>Total price:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{Number(total + 20)}$</Text>
                        </Col>
                    </Row>
                    <div className={styles.button}>
                        <ButtonConfig
                            lable={"Next step"}
                            className={"button-config"}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
