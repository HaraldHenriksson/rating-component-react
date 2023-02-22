import styles from "./Rating.module.css";

export function Rating() {
  return (
    <div className={styles.panel}>
      <img className={styles.star} src="../icon-star.svg" />
      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.discription}>
        Please le us know how wo did with you support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        <button className={styles.rating}>1</button>
        <button className={styles.rating}>2</button>
        <button className={styles.rating}>3</button>
        <button className={styles.rating}>4</button>
        <button className={styles.rating}>5</button>
      </div>

      <button className={styles.submit}>Submit</button>
    </div>
  );
}
