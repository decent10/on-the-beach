import React from "react";
import Star from "../Star";
import styles from "./Rating.module.css";
type RatingProps = {
  numberOfStars: number;
};
export default function Rating({ numberOfStars = 5 }: RatingProps) {
  return (
    <section className={styles.wrapper}>
      {[...Array(numberOfStars)].map((_, index) => (
        <Star
          whileHover={{
            scale: 1.1,
            width: "20px",
            height: "20px",
          }}
          key={index}
          width={18}
          height={18}
        />
      ))}
    </section>
  );
}
