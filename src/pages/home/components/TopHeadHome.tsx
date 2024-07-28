import styles from "./TopHeadHome.module.scss";

function TopHeadHome() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>Left</div>
            <div className={styles.right}>Right</div>
        </div>
    );
}

export default TopHeadHome;
