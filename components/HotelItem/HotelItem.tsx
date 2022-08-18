import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../CTA/CTA";
import { Close } from "../Icons/Close";
import { Open } from "../Icons/Open";
import Rating from "../Rating/Rating";
import styles from "./HotelItem.module.css";
import ItemFeature from "../ItemFeature/ItemFeature";
type HotelItemProps = {
  title: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  cta: {
    title: string;
    amount: number;
  };
};
function HotelItem({
  title,
  location,
  rating,
  image,
  description,
  cta,
}: HotelItemProps) {
  const [readMore, setReadMore] = React.useState(false);
  const toggleReadMore = (e: React.FormEvent) => {
    e.preventDefault();
    setReadMore(!readMore);
  };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <article className={[styles.hotelItem, "grid"].join(" ")}>
        <div className="grid">
          <section className={styles.imageWrapper}>
            <img src={image} alt={title} className={styles.hotelItemImage} />
            <a
              href="#"
              onClick={toggleReadMore}
              className={[styles.readMore, "textBlue"].join(" ")}
            >
              {readMore ? (
                <>
                  <strong> Read less </strong> about this hotel <Open />
                </>
              ) : (
                <>
                  <strong>Read more </strong> about this hotel <Close />
                </>
              )}
            </a>
          </section>
          <section className={styles.contentWrapper}>
            <header>
              <h3 className={[styles.heading, styles.textBlue].join(" ")}>
                {title}
              </h3>
            </header>
            <p className={[styles.textSmall, styles.textGray].join(" ")}>
              {location}
            </p>
            <Rating numberOfStars={rating} />
            <ItemFeature />
            <CTAButton title={cta.title} amount={cta.amount} />
          </section>
          {readMore && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={[styles.descriptionWrapper, "span-2"].join(" ")}
            >
              <h3 className="textBlue">Overview</h3>
              <p className={styles.hotelItemDescription}>{description}</p>
            </motion.div>
          )}
        </div>
      </article>
    </motion.div>
  );
}

export default motion(HotelItem);
