import React from "react";
import styles from "./index.module.css";

export function Panel(props) {
  let { className } = props;
  return (
    <>
      <div className={className ? [styles[className]].join(" ") : styles.pnl}>
        {props.children}
      </div>
    </>
  );
}
