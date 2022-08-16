import React from "react";
import styles from "./CTA.module.css";
type CTAProps = {
  title: string;
  amount: number;
};
export default function CTAButton({ title, amount }: CTAProps) {
  return (
    <button className={[styles.button, "textBlue"].join(" ")}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.amountWrapper}>
          <div className={styles.amount}>
            £ {amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </div>
        </div>
      </div>
    </button>
  );
}
