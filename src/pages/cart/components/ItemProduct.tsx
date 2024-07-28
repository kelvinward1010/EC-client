import { Col, Image, Row, Typography } from "antd";
import styles from "./ItemProduct.module.scss";
import { IProduct } from "../../../types/product";
import { ButtonConfig } from "../../../components/buttonconfig";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productUrl } from "../../../routes/urls";

interface ItemProductProps {
    item: IProduct;
}

const { Text } = Typography;

function ItemProduct({ item }: ItemProductProps) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className={styles.container}>
            <Row>
                <Col span={6} className={styles.left}>
                    <Image height={150} src={item?.image} />
                </Col>
                <Col span={17} className={styles.right}>
                    <Row justify={"space-between"}>
                        <Col span={14}>
                            <Text
                                className={styles.name}
                                onClick={() =>
                                    navigate(`${productUrl}/${item._id}`)
                                }
                            >
                                {item?.name}
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
                            <Text>{item?.price}$</Text>
                        </Col>
                    </Row>
                    <Row justify={"space-between"}>
                        <Col span={14}>
                            <Text>Number of item in stock:</Text>
                        </Col>
                        <Col span={9}>
                            <Text>{item?.quantity} items</Text>
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
                                    onClick={() => setQuantity(quantity - 1)}
                                />
                                <Text className={styles.quantity_number}>
                                    {quantity}
                                </Text>
                                <ButtonConfig
                                    icon={<PlusOutlined />}
                                    onClick={() => setQuantity(quantity + 1)}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default ItemProduct;
