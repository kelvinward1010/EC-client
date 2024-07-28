import { Col, Rate, Row, Typography } from "antd";
import styles from "./ProductDetail.module.scss";
import { products } from "../../../data";
import { ButtonConfig } from "../../../components/buttonconfig";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import CommentBox from "../components/CommentBox";
import { useState } from "react";

const { Text } = Typography;

export function ProductDetail() {
    const [quantity, setQuantity] = useState<number>(1);

    const data = products[0];
    const current_user = false;

    return (
        <div className={styles.container}>
            <Row justify={"space-between"} wrap={true}>
                <Col span={24} sm={10} className={styles.left}>
                    <img src={data?.image} alt="img" className={styles.img} />
                </Col>
                <Col span={24} sm={12} className={styles.right}>
                    <Typography.Title level={4} className={styles.title}>
                        {data?.name}
                    </Typography.Title>
                    <Text className={styles.description}>
                        {data?.description}
                    </Text>
                    <Text>Quantity: {data?.quantity}</Text>
                    <Text>Price: {data?.price}$</Text>
                    <Rate
                        allowHalf
                        defaultValue={data?.star}
                        className={styles.rate}
                    />
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
                    <div className={styles.add_cart}>
                        {current_user ? (
                            <ButtonConfig lable={"Add to cart"} />
                        ) : (
                            <ButtonConfig lable={"Sign in to add your cart"} />
                        )}
                    </div>
                </Col>
            </Row>

            <div className={styles.container_comments}>
                <CommentBox />
            </div>
        </div>
    );
}
