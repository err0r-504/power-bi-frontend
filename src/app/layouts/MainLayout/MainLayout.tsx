import Header from "../../../shared/components/Header";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main className={styles.main}></main>
    </div>
  );
};

export default MainLayout;
