import React from "react";
import styles from "./SideBar.module.css";

const SideBar = ({ data, handleHeaderChange, currentHeader }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Investor Relations</h2>
      <div className={styles.wrapper}>
        <ul className={styles.listWrapper}>
          {data.map((val, i) => (
            <li
              className={`${styles.list} ${
                currentHeader.header === val.header ? styles.active : ""
              }`}
              onClick={() => handleHeaderChange(val)}
              key={i}
            >
              {val.header}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;