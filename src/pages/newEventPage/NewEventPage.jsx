import styles from './NewEventPage.module.css';

const NewEventPage = () => {
  return (
    <div className={styles.newEventPage}>
      {/* 헤더  */}
      <div className={styles.header}>
        <h1 className={styles.backLink}>그룹으로 돌아가기</h1>
        <div className={styles.headerIndicator}></div>
      </div>

      {/* 메인 제목 */}
      <h2 className={styles.mainTitle}>새 이벤트</h2>

      {/* 폼 */}
      <div className={styles.formContainer}>
        {/* 이벤트 이름 */}
        <div className={styles.formGroup}>
          <label className="form-label">
            이벤트 이름 <span className="required">*</span>
          </label>
          <input type="text" name="eventName" className={styles.formInput} placeholder="이벤트 이름을 입력하세요" />
        </div>

        {/* 이벤트 시간 */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            이벤트 시간 <span className="required">*</span>
          </label>
          <input type="datetime-local" name="eventTime" className={styles.formInput} />
        </div>

        {/* 이벤트 장소 */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            이벤트 장소 <span className="required">*</span>
          </label>
          <input type="text" name="eventLocation" className={styles.formInput} placeholder="장소를 입력하세요" />
        </div>

        {/* 이벤트 설명 */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>이벤트 설명</label>
          <textarea
            name="eventDescription"
            rows="6"
            className={styles.formTextarea}
            placeholder="이벤트에 대한 설명을 입력하세요"
          />
        </div>

        {/* 생성 버튼 */}
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton}>생성</button>
        </div>
      </div>
    </div>
  );
};

export default NewEventPage;
