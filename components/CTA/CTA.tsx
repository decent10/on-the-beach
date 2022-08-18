import React from "react";
import { motion } from "framer-motion";
import styles from "./CTA.module.css";
type CTAProps = {
  title: string;
  amount: number;
};
export default function CTAButton({ title, amount }: CTAProps) {
  return (
    <motion.a
      href="#"
      className={[styles.button, "textBlue"].join(" ")}
      whileHover={{
        scale: 0.98,
        cursor: "pointer",
        translateX: 5,
        translateY: 5,
      }}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.amountWrapper}>
        <span className={styles.amount}>
          £ {amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </span>
      </span>
    </motion.a>
  );
}
