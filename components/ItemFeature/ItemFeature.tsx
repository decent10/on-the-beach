import React from "react";
import styles from "./ItemFeature.module.css";
function ItemFeature() {
  return (
    <section className={[styles.featureSection, styles.textSmall].join(" ")}>
      <div>
        <strong>2</strong> Adults, <strong>1</strong> Children
      </div>
      <div>
        <strong>27th May 2019</strong> for 6 days
      </div>
      <div>
        Departing from <strong>Liver Pool</strong>
      </div>
    </section>
  );
}

export default ItemFeature;
