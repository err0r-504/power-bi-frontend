import { useNavigate } from "react-router-dom";

const ReportsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (reportId: string) => {
    navigate(`/reports/${reportId}`);
  };

  return "Страница каталога отчетов";
};

export default ReportsPage;
