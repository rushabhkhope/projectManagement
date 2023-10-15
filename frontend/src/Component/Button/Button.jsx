import styles from "./index.module.css";
const Button = ({ className, ...props }) => {
  return (
    <button {...props} className={[styles.btn, className].join(" ")}>
      {props.children}
    </button>
  );
};

export default Button;
