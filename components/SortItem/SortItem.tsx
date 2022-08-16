import React from "react";
import styles from "./SortItem.module.css";
type SortItemProps = {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
};
const SortItem = ({ label, icon, active, onClick }: SortItemProps) => {
  return (
    <li
      onClick={onClick}
      className={[
        styles.sortItem,
        "textBlue",
        active ? styles.active : "",
      ].join(" ")}
    >
      <span>
        {" "}
        Sort by <strong>{label}</strong>
      </span>
      {icon}
    </li>
  );
};

export default SortItem;
