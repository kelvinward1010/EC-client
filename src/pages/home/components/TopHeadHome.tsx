import { Carousel, Flex } from "antd";
import styles from "./TopHeadHome.module.scss";
import { DoubleRightOutlined } from "@ant-design/icons";
import { TYPESPRODUCTS } from "../../../constant";
import { useNavigate } from "react-router-dom";
import { searchUrl } from "../../../routes/urls";

function TopHeadHome() {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(searchUrl);
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {TYPESPRODUCTS.map((type, index) => (
                    <Flex
                        className={styles.itemtype}
                        key={index}
                        justify={"space-between"}
                        align={"center"}
                        onClick={handleSearch}
                    >
                        <h5 className={styles.title}>{type}</h5>
                        <DoubleRightOutlined className={styles.icon} />
                    </Flex>
                ))}
            </div>
            <Carousel waitForAnimate className={styles.right} arrows autoplay>
                <div className={`${styles.box} ${styles.img1}`}></div>
                <div className={`${styles.box} ${styles.img2}`}></div>
                <div className={`${styles.box} ${styles.img3}`}></div>
            </Carousel>
        </div>
    );
}

export default TopHeadHome;
