import { Col, Rate, Row, Typography } from "antd";
import styles from "./ProductDetail.module.scss";
import { products } from "../../../data";
import { ButtonConfig } from "../../../components/buttonconfig";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import CommentBox from "../components/CommentBox";
import { useState } from "react";
import { ModalSmall } from "../../../components/modals/modalSmall";
import { useNavigate } from "react-router-dom";
import { signinUrl } from "../../../routes/urls";

const { Text } = Typography;

export function ProductDetail() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState<number>(1);
    const [openModalIsUser, setOpenModalIsUser] = useState<boolean>(false);

    const data = products[0];
    const current_user = true;

    const handleGoSignIn = () => {
        setOpenModalIsUser(false);
        navigate(signinUrl);
    };

    const handleAddToCart = () => {
        if (!current_user) {
            setOpenModalIsUser(true);
        } else {
            console.log("Add");
        }
    };

    return (
        <div className={styles.container}>
            {openModalIsUser && (
                <ModalSmall
                    message="You need to sign in to add!"
                    open={openModalIsUser}
                    setOpen={setOpenModalIsUser}
                    onClick={handleGoSignIn}
                    titleButton={"OK"}
                />
            )}
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
                        <ButtonConfig
                            lable={"Add to cart"}
                            onClick={handleAddToCart}
                        />
                    </div>
                </Col>
            </Row>

            <div className={styles.container_comments}>
                <CommentBox />
            </div>
        </div>
    );
}
