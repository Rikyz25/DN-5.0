import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {
  const titleClass =
    cohort.status === "ongoing" ? styles.titleOngoing : styles.titleCompleted;

  return (
    <div className={styles.box}>
      <h3 className={titleClass}>{cohort.name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Mentor</dt>
        <dd>{cohort.mentor}</dd>
        <dt>Start</dt>
        <dd>{cohort.start}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
