import { Col, Row, Typography } from "antd";
import styles from "./ProcessingFour.module.scss";
import { FieldAdressType } from "./ProcessingTwo";
import { IProductInCart } from "../../../../types/product";
import FormProduct from "./FormProduct";

const { Text, Title } = Typography;

interface ProcessingFourProps {
    personalinfomation: FieldAdressType;
    paymentmethod: { paymentmethod: string };
    productwillbuy: IProductInCart[];
    yourinvoice: {
        price: number;
        shipping_price: number;
        totalprice: number;
    };
}

function ProcessingFour({
    personalinfomation,
    paymentmethod,
    productwillbuy,
    yourinvoice,
}: ProcessingFourProps) {
    return (
        <div className={styles.container}>
            <div className={styles.start}>
                <div className={styles.left}>
                    <Row justify={"start"}>
                        <Col span={7} className={styles.label}>
                            <Text>Name:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{personalinfomation.name}</Text>
                        </Col>
                    </Row>
                    <Row justify={"start"}>
                        <Col span={7} className={styles.label}>
                            <Text>Phone:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{personalinfomation.phone}</Text>
                        </Col>
                    </Row>
                    <Row justify={"start"}>
                        <Col span={7} className={styles.label}>
                            <Text>Address:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{personalinfomation.address}</Text>
                        </Col>
                    </Row>
                    <Row justify={"start"}>
                        <Col span={7} className={styles.label}>
                            <Text>PaymentMethod:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{paymentmethod.paymentmethod}</Text>
                        </Col>
                    </Row>
                </div>
                <div className={styles.right}>
                    <Title level={5}>Your invoice</Title>
                    <Row>
                        <Col span={10}>
                            <Text>Price:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{Number(yourinvoice.price)}$</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <Text>Shipping price:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{yourinvoice.shipping_price}$</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <Text>Total price:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{Number(yourinvoice.totalprice)}$</Text>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.end}>
                {productwillbuy.map((item: IProductInCart) => (
                    <FormProduct key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default ProcessingFour;
