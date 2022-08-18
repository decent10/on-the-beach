import React from "react";
import { sortItemType } from "../../types";
import SortItem from "../SortItem/SortItem";
import styles from "./SortMenu.module.css";

type SortItemProps = {
  sortItems: sortItemType[];
  selectedItemIndex: number;
  onClick: (id: number) => void;
};

function SortMenu({ sortItems, selectedItemIndex, onClick }: SortItemProps) {
  return (
    <ul className={styles.sortNav}>
      {sortItems.map((item) => (
        <SortItem
          selectedItemIndex={selectedItemIndex}
          key={item.id}
          {...item}
          onClick={() => {
            onClick(item.id);
          }}
        />
      ))}
    </ul>
  );
}

export default SortMenu;
