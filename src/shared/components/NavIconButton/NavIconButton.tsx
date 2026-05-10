import { Link } from "react-router-dom";
import styles from "./NavIconButton.module.css";

interface NavIconButtonProps {
  children: React.ReactNode;
  label: string;
  to: string;
}

const NavIconButton = ({ children, label, to }: NavIconButtonProps) => {
  return (
    <Link
      to={to}
      title={label}
      aria-label={label}
      className={styles.iconButton}
    >
      {children}
    </Link>
  );
};

export default NavIconButton;
