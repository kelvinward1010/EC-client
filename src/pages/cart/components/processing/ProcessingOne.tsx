import { Col, Row, Typography } from "antd";
import { IProductInCart } from "../../../../types/product";
import FormProduct from "./FormProduct";
import styles from "./ProcessingOne.module.scss";
import { totalPrice } from "../../../../utils/equation";

interface ProcessingOneProps {
    data: IProductInCart[];
}

const { Text, Title } = Typography;

function ProcessingOne({ data }: ProcessingOneProps) {
    let prices = totalPrice(data);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {data.map((item: IProductInCart) => (
                    <FormProduct key={item._id} data={item} />
                ))}
            </div>
            <div className={styles.right}>
                <Title level={4}>Your invoice</Title>
                <Row>
                    <Col span={10}>
                        <Text>Price:</Text>
                    </Col>
                    <Col span={10}>
                        <Text>{Number(prices)}$</Text>
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
                        <Text>{Number(prices + 20)}$</Text>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProcessingOne;
