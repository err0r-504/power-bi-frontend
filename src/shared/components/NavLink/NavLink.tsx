import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  end?: boolean;
}

const NavLink = ({ children, to, end }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
