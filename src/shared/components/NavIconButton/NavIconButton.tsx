import styles from "./NavIconButton.module.css";

interface NavIconButtonProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

const NavIconButton = ({ children, label, href }: NavIconButtonProps) => {
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      className={styles.iconButton}
    >
      {children}
    </a>
  );
};

export default NavIconButton;
