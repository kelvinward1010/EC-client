import { Card, Col, Rate, Row, Typography } from "antd";
import styles from "./CardProduct.module.scss";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types/product";
import { productUrl } from "../../routes/urls";

const { Meta } = Card;
const { Text } = Typography;

interface CardProductProps {
    item: IProduct;
}

export const CardProduct: React.FC<CardProductProps> = ({ item }) => {
    const navigate = useNavigate();

    const description = (
        <div>
            <Row justify={"space-between"}>
                <Col span={8}>
                    <Text>Price:</Text>
                </Col>
                <Col span={16}>
                    <Text className={styles.price}>{item.price}$</Text>
                </Col>
            </Row>
            <Row justify={"space-between"}>
                <Col span={8}>
                    <Text>Stars:</Text>
                </Col>
                <Col span={16}>
                    <Rate allowHalf defaultValue={item.star} />
                </Col>
            </Row>
            <Row justify={"space-between"}>
                <Col span={8}>
                    <Text>Created:</Text>
                </Col>
                <Col span={16}>
                    <Text>{item.createdAt}</Text>
                </Col>
            </Row>
        </div>
    );

    return (
        <div className={styles.container}>
            <Card
                hoverable
                style={{
                    width: 250,
                    height: "auto",
                }}
                cover={
                    <img alt="image-product" height={300} src={item.image} />
                }
                onClick={() => navigate(`${productUrl}/${item._id}`)}
            >
                <Meta title={item.name} description={description} />
            </Card>
        </div>
    );
};
