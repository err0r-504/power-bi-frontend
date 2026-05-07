import styles from "./NavLink.module.css";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

const NavLink = ({ children, href, active }: NavLinkProps) => {
  return (
    <a href={href} className={`${styles.link} ${active ? styles.active : ""}`}>
      {children}
    </a>
  );
};

export default NavLink;
