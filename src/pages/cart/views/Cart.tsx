import { Checkbox, Col, GetProp, Row, Typography } from "antd";
import styles from "./Cart.module.scss";
import { useCallback, useEffect, useState } from "react";
import { dataInCart } from "../../../data";
import { CheckBoxConfig } from "../components/CheckBoxConfig";
import { IProductInCart } from "../../../types/product";
import { ButtonConfig } from "../../../components/buttonconfig";
import { totalPrice } from "../../../utils/equation";
import { sessionService } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";
import { processUrl } from "../../../routes/urls";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[any];

const { Text, Title } = Typography;

export function Cart() {
    const navigate = useNavigate();
    const [total, setTotal] = useState<number>(0);
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
    const [data, setData] = useState<IProductInCart[]>([]);

    const onChange: GetProp<typeof Checkbox.Group, "onChange"> = useCallback(
        (checkedValues) => {
            setCheckedList(checkedValues);
        },
        [checkedList, setCheckedList],
    );

    const handleNextStep = () => {
        sessionService.setStorage("datatobuy", checkedList);
        navigate(processUrl);
    };

    useEffect(() => {
        let prices = totalPrice(checkedList as IProductInCart[]);
        setTotal(prices);
    }, [checkedList]);

    useEffect(() => {
        setData(dataInCart);
    }, []);

    return (
        <div className={styles.container}>
            <Row justify={"space-between"}>
                <Col span={15} className={styles.left}>
                    <Checkbox.Group
                        value={checkedList}
                        onChange={onChange}
                        className={styles.checkbox_group}
                    >
                        {data.slice(0, 3)?.map((item: IProductInCart) => (
                            <CheckBoxConfig
                                data={item}
                                key={item?._id}
                                checked={() => {
                                    const find_item = checkedList?.find(
                                        (i: any) => i.id === item._id,
                                    );
                                    return find_item ? true : false;
                                }}
                                setData={setData}
                                setCheckList={setCheckedList}
                                checkedList={checkedList as IProductInCart[]}
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
                            disabled={checkedList.length > 0 ? false : true}
                            lable={"Next step"}
                            className={"button-config"}
                            onClick={handleNextStep}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
