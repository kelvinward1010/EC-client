import TopHeadHome from "../components/TopHeadHome";
import styles from "./Home.module.scss";

export function Home() {
    return (
        <div className={styles.container}>
            <TopHeadHome />
        </div>
    );
}
