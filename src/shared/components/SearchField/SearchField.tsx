import styles from "./SearchField.module.css";

interface SearchFieldProps {
  placeholder: string;
  width?: number;
}

const SearchField = ({ placeholder, width }: SearchFieldProps) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={styles.field}
      style={width ? { width: `${width}px` } : {}}
    />
  );
};

export default SearchField;
