import { Typography } from "antd";
import styles from "./CommentBox.module.scss";
import { Comments } from "./comments/comments";

const { Title } = Typography;

function CommentBox() {
    return (
        <div className={styles.container}>
            <Title level={4}>Comment</Title>
            <Comments />
        </div>
    );
}

export default CommentBox;
