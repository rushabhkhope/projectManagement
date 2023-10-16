import styles from "./index.module.css";
import Spinning from "../Loading/Spinning";
const Button = ({ className, ...props }) => {
  const { loading } = props;
  return (
    <button
      {...props}
      disabled={loading}
      className={[styles.btn, className].join(" ")}
    >
      {loading && <Spinning />}
      {props.children}
    </button>
  );
};

export default Button;
