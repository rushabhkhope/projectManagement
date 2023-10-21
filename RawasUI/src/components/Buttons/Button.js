import React from "react";
import { generateBtnClass, generateRoundedClass } from "./buttonsUtils";
import "../../public/stylesheets/button.css";
import Spinner from "../Spinner/Spinner";
const Buttons = ({
  children,
  color,
  variant,
  rounded,
  className,
  loading,
  ...props
}) => {
  const colorClass = generateBtnClass(color, variant);
  const roundedClass = generateRoundedClass(rounded);
  return (
    <button
      className={["btn", colorClass, roundedClass, className].join(" ")}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner color={color} />}
      {children}
    </button>
  );
};

export default Buttons;
