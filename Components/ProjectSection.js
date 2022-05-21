import styles from "../styles/ProjectSection.module.css"

export default function ProjectSection() {
  return (
    <div className={styles.container}>
      <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <h4>Bright Agronomie</h4>
          <span className={styles.chev}>&rsaquo;</span>
        </div>
      </div>
    </div>
  );
}
