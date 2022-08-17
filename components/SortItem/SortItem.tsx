import React from "react";
import styles from "./SortItem.module.css";
type SortItemProps = {
  id: number;
  label: string;
  icon: React.ReactNode;
  selectedItemIndex: number;
  active: boolean;
  onClick: () => void;
};
const SortItem = ({
  id,
  label,
  icon,
  onClick,
  selectedItemIndex,
}: SortItemProps) => {
  const isSelected = selectedItemIndex === id;
  return (
    <li
      onClick={onClick}
      className={[
        styles.sortItem,
        "textBlue",
        isSelected ? styles.active : "",
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
