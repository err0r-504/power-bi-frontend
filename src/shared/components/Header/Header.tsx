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
          <img src="./logo.png" alt="App logo" />
        </div>
        <nav className={styles.nav}>
          <NavLink href="/" active>
            Отчеты
          </NavLink>
          <NavLink href="/">Пользователи</NavLink>
          <NavLink href="/">Группы доступа</NavLink>
          <NavLink href="/">Категории</NavLink>
          <NavLink href="/">Журнал</NavLink>
        </nav>
        <div className={styles.actions}>
          <NavIconButton href="/" label="Уведомления">
            <img src={notificationIcon} alt="" />
          </NavIconButton>
          <NavIconButton href="/" label="Настройки">
            <img src={settingsIcon} alt="" />
          </NavIconButton>
          <NavIconButton href="/" label="Профиль">
            <img src={profileIcon} alt="" />
          </NavIconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
