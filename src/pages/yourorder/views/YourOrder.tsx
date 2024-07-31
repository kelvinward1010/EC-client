import { Tabs, TabsProps, Typography } from "antd";
import { useFollowWidth } from "../../../hooks/useFollowWidth";
import styles from "./YourOrder.module.scss";
import { FileDoneOutlined, OrderedListOutlined } from "@ant-design/icons";
import OrderCompleted from "../components/OrderCompleted";
import OrderPlaced from "../components/OrderPlaced";

const { Text } = Typography;

export function YourOrder() {
    const { windowWidth } = useFollowWidth(768);

    const items: TabsProps["items"] = [
        {
            key: "1",
            icon: <OrderedListOutlined />,
            label: <Text>Ordered placed</Text>,
            children: <OrderPlaced />,
            forceRender: true,
        },
        {
            key: "2",
            icon: <FileDoneOutlined />,
            label: <Text>Order completed</Text>,
            children: <OrderCompleted />,
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
