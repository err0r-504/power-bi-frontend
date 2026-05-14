import { useNavigate } from "react-router-dom";
import SearchField from "../../shared/components/SearchField";
import Button from "../../shared/components/Button";
import styles from "./ReportsPage.module.css";
import filterIcon from "../../assets/icons/filter-icon.svg";
import sortIcon from "../../assets/icons/sort-icon.svg";
import uploadIcon from "../../assets/icons/upload-icon.svg";

const ReportsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (reportId: string) => {
    navigate(`/reports/${reportId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <SearchField placeholder="Поиск по отчетам..." width={600} />
        <div className={styles.buttons}>
          <Button>
            <img src={filterIcon} alt="" />
            <span>Фильтр</span>
          </Button>
          <Button>
            <img src={sortIcon} alt="" />
            <span>Сортировка</span>
          </Button>
          <Button>
            <img src={uploadIcon} alt="" />
            <span>Загрузить отчет</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
