import styles from "./index.module.css";
const TextInput = ({ className, ...props }) => {
  return <input {...props} className={[styles.textBox, className].join(" ")} />;
};

export default TextInput;
