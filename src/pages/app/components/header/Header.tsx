import { Avatar, Badge, Dropdown, Input, Typography } from "antd";
import styles from "./Header.module.scss";
import {
    SearchOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { ButtonConfig } from "../../../../components/buttonconfig";
import { useNavigate } from "react-router-dom";
import {
    cartUrl,
    layoutUrl,
    signinUrl,
    signupUrl,
} from "../../../../routes/urls";

const { Text } = Typography;

function Header() {
    const navigate = useNavigate();
    const user = false;

    const goSignup = () => navigate(signupUrl);
    const goSignin = () => navigate(signinUrl);
    const goHome = () => navigate(layoutUrl);
    const goCart = () => navigate(cartUrl);

    const items = [
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        lable="Your card"
                    />
                </>
            ),
            key: "0",
        },
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        lable="Sign Out"
                    />
                </>
            ),
            key: "1",
        },
    ];

    const unUser = [
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        lable="Sign In"
                        onClick={goSignin}
                    />
                </>
            ),
            key: "0",
        },
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        lable="Sign Up"
                        onClick={goSignup}
                    />
                </>
            ),
            key: "1",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Text onClick={goHome} className={styles.textLogo} strong>
                    Ecormerce
                </Text>
            </div>
            <div className={styles.center}>
                <Input
                    placeholder="Search title product..."
                    prefix={<SearchOutlined />}
                    className={styles.inputsearch}
                />
            </div>
            <div className={styles.right}>
                <Badge status={"processing"} count={5} className={styles.cart}>
                    <ShoppingCartOutlined
                        onClick={goCart}
                        className={styles.iconcart}
                    />
                </Badge>
                <Dropdown
                    menu={{
                        items: user ? items : unUser,
                    }}
                    trigger={["click"]}
                >
                    <Avatar className={styles.avatar} icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;
