import { Checkbox, Col, Image, Row, Typography } from "antd";
import styles from "./CheckBoxConfig.module.scss";
import { IProductInCart } from "../../../types/product";
import { useNavigate } from "react-router-dom";
import { productUrl } from "../../../routes/urls";
import { ButtonConfig } from "../../../components/buttonconfig";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

interface CheckBoxConfigProps {
    data: IProductInCart;
    checked: () => boolean;
    setData: any;
    setCheckList: any;
    checkedList: IProductInCart[];
}

const { Text } = Typography;

export const CheckBoxConfig: React.FC<CheckBoxConfigProps> = ({
    data,
    checked,
    setData,
    setCheckList,
    checkedList,
}) => {
    const isCheck = checked();
    const navigate = useNavigate();

    const increaseQuantity = (id: string) => {
        const find_item = checkedList.findIndex((item) => item._id === id);
        if (find_item !== -1) {
            const deletedData = checkedList.filter((item) => item._id !== id);
            setCheckList(deletedData);
        }

        setData((prevData: any[]) => {
            return prevData.map(
                (item: {
                    _id: string;
                    quantityordered: number;
                    quantity: number;
                }) => {
                    if (
                        item._id === id &&
                        item.quantityordered < item.quantity
                    ) {
                        return {
                            ...item,
                            quantityordered: item.quantityordered + 1,
                        };
                    }
                    return item;
                },
            );
        });
    };

    const decreaseQuantity = (id: string) => {
        const find_item = checkedList.findIndex((item) => item._id === id);
        if (find_item !== -1) {
            const deletedData = checkedList.filter((item) => item._id !== id);
            setCheckList(deletedData);
        }

        setData((prevData: any[]) => {
            return prevData.map(
                (item: { _id: string; quantityordered: number }) => {
                    if (item._id === id && item.quantityordered > 1) {
                        return {
                            ...item,
                            quantityordered: item.quantityordered - 1,
                        };
                    }
                    return item;
                },
            );
        });
    };

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
                    <div className={styles.containerdata}>
                        <Row>
                            <Col span={6} className={styles.left}>
                                <Image height={150} src={data?.image} />
                            </Col>
                            <Col span={17} className={styles.right}>
                                <Row justify={"space-between"}>
                                    <Col span={14}>
                                        <Text
                                            className={styles.name}
                                            onClick={() =>
                                                navigate(
                                                    `${productUrl}/${data._id}`,
                                                )
                                            }
                                        >
                                            {data?.name}
                                        </Text>
                                    </Col>
                                    <Col span={9}>
                                        <ButtonConfig
                                            lable={"remove"}
                                            className="button-delete"
                                        />
                                    </Col>
                                </Row>
                                <Row justify={"space-between"}>
                                    <Col span={14}>
                                        <Text>Price:</Text>
                                    </Col>
                                    <Col span={9}>
                                        <Text>{data?.price}$</Text>
                                    </Col>
                                </Row>
                                <Row justify={"space-between"}>
                                    <Col span={14}>
                                        <Text>Number of item in stock:</Text>
                                    </Col>
                                    <Col span={9}>
                                        <Text>{data?.quantity} items</Text>
                                    </Col>
                                </Row>
                                <Row justify={"space-between"}>
                                    <Col span={14}>
                                        <Text>Quantity:</Text>
                                    </Col>
                                    <Col span={9}>
                                        <div className={styles.quantity}>
                                            <ButtonConfig
                                                icon={<MinusOutlined />}
                                                onClick={() =>
                                                    decreaseQuantity(data._id)
                                                }
                                            />
                                            <Text
                                                className={
                                                    styles.quantity_number
                                                }
                                            >
                                                {data.quantityordered}
                                            </Text>
                                            <ButtonConfig
                                                icon={<PlusOutlined />}
                                                onClick={() =>
                                                    increaseQuantity(data._id)
                                                }
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
