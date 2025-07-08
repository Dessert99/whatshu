import styles from './groupCard.module.css';

const groupCard = (props) => {
  return (
    <article className={styles.groupCard}>
      <header className={styles.groupCard__header}>
        <p className={styles.groupCard__title}>{props.title}</p>
        <p className={styles.groupCard__subtitle}>{props.subTitle}</p>
      </header>
      <section className={styles.groupCard__infos}>
        <div className={styles.groupCard__info}>
          <p className={styles.groupCard__infoLabel}>그룹원</p>
          <p className={styles.groupCard__infoValue}>{props.memberCount}</p>
        </div>
        <div className={styles.groupCard__info}>
          <p className={styles.groupCard__infoLabel}>미 완료 이벤트</p>
          <p className={styles.groupCard__infoValue}>{props.todoCount}</p>
        </div>
        <div className={styles.groupCard__info}>
          <p className={styles.groupCard__infoLabel}>완료 이벤트</p>
          <p className={styles.groupCard__infoValue}>{props.doneCount}</p>
        </div>
      </section>
      <footer className={styles.groupCard__footer}>
        <button className={styles.groupCard__button}>그룹 상세 보기</button>
      </footer>
    </article>
  );
};

export default groupCard;
