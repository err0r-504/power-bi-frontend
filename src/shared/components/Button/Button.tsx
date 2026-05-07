import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
