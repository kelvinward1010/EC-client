import { Typography } from "antd";
import styles from "./CommentBox.module.scss";

const { Title } = Typography;

function CommentBox() {
    return (
        <div className={styles.container}>
            <Title level={4}>Comment</Title>
        </div>
    );
}

export default CommentBox;
