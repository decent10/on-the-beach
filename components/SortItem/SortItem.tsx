import React from "react";
import { motion } from "framer-motion";
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
    <motion.li
      whileHover={{
        scale: 0.98,
      }}
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
    </motion.li>
  );
};

export default SortItem;
