import { Outlet } from "react-router-dom";
import Header from "../../../shared/components/Header";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
