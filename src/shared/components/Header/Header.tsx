import { Link } from "react-router-dom";
import NavLink from "../NavLink";
import NavIconButton from "../NavIconButton";
import notificationIcon from "../../../assets/icons/notification-icon.svg";
import settingsIcon from "../../../assets/icons/settings-icon.svg";
import profileIcon from "../../../assets/icons/profile-icon.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="./logo.png" alt="App logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <NavLink to="/" end>
            Отчеты
          </NavLink>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/groups">Группы доступа</NavLink>
          <NavLink to="/categories">Категории</NavLink>
          <NavLink to="/audit">Журнал</NavLink>
        </nav>
        <div className={styles.actions}>
          <NavIconButton to="/notifications" label="Уведомления">
            <img src={notificationIcon} alt="" />
          </NavIconButton>
          <NavIconButton to="/settings" label="Настройки">
            <img src={settingsIcon} alt="" />
          </NavIconButton>
          <NavIconButton to="/profile" label="Профиль">
            <img src={profileIcon} alt="" />
          </NavIconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
