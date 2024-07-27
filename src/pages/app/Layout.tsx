import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "./components/header/Header";
import { Footer } from "./components/Footer";

interface Props {
    children?: React.ReactNode;
}

export function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.main}>
                <Outlet />
                {children}
            </div>
            <Footer />
        </div>
    );
}
