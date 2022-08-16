import React from "react";
import CTAButton from "../CTA/CTA";
import { Close } from "../Icons/Close";
import { Open } from "../Icons/Open";
import Rating from "../Rating/Rating";
import styles from "./HotelItem.module.css";
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
export default function HotelItem({
  title,
  location,
  rating,
  image,
  description,
  cta,
}: HotelItemProps) {
  const [readMore, setReadMore] = React.useState(false);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article className={[styles.hotelItem, "grid"].join(" ")}>
      <div className="grid">
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.hotelItemImage} />
          <a
            href="#"
            onClick={toggleReadMore}
            className={[styles.readMore, "textBlue"].join(" ")}
          >
            {readMore ? (
              <>
                Read less about this hotel <Open />
              </>
            ) : (
              <>
                Read more about this hotel <Close />
              </>
            )}
          </a>
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={[styles.heading, styles.textBlue].join(" ")}>
            {title}
          </h3>
          <p className={[styles.textSmall, styles.textGray].join(" ")}>
            {location}
          </p>
          <Rating numberOfStars={rating} />
          <section className={styles.textSmall}>
            <div>
              <strong>2</strong> Adults, <strong>1</strong> Children
            </div>
            <div>
              <strong>27th May 2019</strong> for 6 days
            </div>
            <div>
              Departing from <strong>LiverPool</strong>
            </div>
          </section>
          <CTAButton title={cta.title} amount={cta.amount} />
        </div>
        {readMore && (
          <div className="span-2">
            <div className={styles.hotelItemDescription}>{description}</div>
          </div>
        )}
      </div>
    </article>
  );
}
