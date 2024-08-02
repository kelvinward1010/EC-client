import { Col, Modal, Row, Typography } from "antd";
import styles from "./ModalDetail.module.scss";
import { IOrder } from "../../../../types/order";
import { IProductInCart } from "../../../../types/product";
import FormProduct from "../FormProduct";
import { useFollowWidth } from "../../../../hooks/useFollowWidth";

interface ModalDetailProps {
    ComponentElement?: React.ReactNode;
    title?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    data: IOrder;
}

const { Title, Text } = Typography;

export function ModalDetail({
    title,
    open,
    setOpen,
    ComponentElement,
    data,
}: ModalDetailProps) {
    const { products, personalinfomation, paymentmethod, yourinvoice } = data;
    const handleCancel = () => setOpen(false);
    const { windowWidth } = useFollowWidth(1024);

    return (
        <div>
            {ComponentElement}
            <Modal
                title={title}
                width={windowWidth > 1024 ? "70%" : "100%"}
                open={open}
                onCancel={handleCancel}
                footer={false}
                className={styles.containerModal}
            >
                <Text strong>Trạng thái đơn hàng: </Text>
                <div className={styles.center}>
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
                                    <Text>{paymentmethod}</Text>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.right}>
                            <Title level={5}>Your invoice</Title>
                            <Row justify={"start"}>
                                <Col span={7} className={styles.label}>
                                    <Text>Price:</Text>
                                </Col>
                                <Col span={10}>
                                    <Text>{Number(yourinvoice.price)}$</Text>
                                </Col>
                            </Row>
                            <Row justify={"start"}>
                                <Col span={7} className={styles.label}>
                                    <Text>Shipping price:</Text>
                                </Col>
                                <Col span={10}>
                                    <Text>{yourinvoice.shipping_price}$</Text>
                                </Col>
                            </Row>
                            <Row justify={"start"}>
                                <Col span={7} className={styles.label}>
                                    <Text>Total price:</Text>
                                </Col>
                                <Col span={10}>
                                    <Text>
                                        {Number(yourinvoice.totalprice)}$
                                    </Text>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={styles.end}>
                        {products.map((item: IProductInCart) => (
                            <FormProduct key={item._id} data={item} />
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
