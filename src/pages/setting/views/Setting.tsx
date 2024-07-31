import { KeyOutlined, UserSwitchOutlined } from "@ant-design/icons";
import styles from "./Setting.module.scss";
import { Tabs, TabsProps, Typography } from "antd";
import { Profile } from "../components/Profile";
import { ChangePassword } from "../components/ChangePassword";
import { useFollowWidth } from "../../../hooks/useFollowWidth";

const { Text } = Typography;

export function Setting() {
    const { windowWidth } = useFollowWidth(768);

    const items: TabsProps["items"] = [
        {
            key: "1",
            icon: <UserSwitchOutlined />,
            label: <Text>Profile</Text>,
            children: <Profile />,
            forceRender: true,
        },
        {
            key: "2",
            icon: <KeyOutlined />,
            label: <Text>Change password</Text>,
            children: <ChangePassword />,
            forceRender: true,
        },
    ];

    return (
        <div className={styles.container}>
            <Tabs
                defaultActiveKey="1"
                tabPosition={windowWidth > 768 ? "left" : "top"}
                items={items}
            />
        </div>
    );
}
