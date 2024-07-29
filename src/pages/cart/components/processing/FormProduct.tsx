import { Col, Image, Row, Typography } from "antd";
import { IProductInCart } from "../../../../types/product";
import styles from "./FormProduct.module.scss";
import { useNavigate } from "react-router-dom";
import { productUrl } from "../../../../routes/urls";

const { Text } = Typography;

interface FormProductProps {
    data: IProductInCart;
}

function FormProduct({ data }: FormProductProps) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
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
                                    navigate(`${productUrl}/${data._id}`)
                                }
                            >
                                {data?.name}
                            </Text>
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
                            <Text>Quantity:</Text>
                        </Col>
                        <Col span={9}>
                            <Text>{data?.quantityordered}</Text>
                        </Col>
                    </Row>
                    <Row justify={"space-between"}>
                        <Col span={14}>
                            <Text>Total:</Text>
                        </Col>
                        <Col span={9}>
                            <Text>
                                {Number(data?.price * data.quantityordered)}
                            </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default FormProduct;
