import { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, serIsSubmitted] = useState(false);

  function handleRatingClicked(rating: number) {
    setSelectedRating(rating);
  }

  return (
    <form className={styles.panel}>
      <img className={styles.star} src="../icon-star.svg" />
      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.discription}>
        Please le us know how wo did with you support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            onClick={() => handleRatingClicked(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>

      <button disabled={selectedRating === undefined} className={styles.submit}>
        Submit
      </button>
    </form>
  );
}
