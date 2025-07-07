import React from 'react';
import './NewEventPage.module.css';

const NewEventPage = () => {
  return (
    <div className="new-event-page">
      {/* 헤더  */}
      <div className="header">
        <h1 className="back-link">그룹으로 돌아가기</h1>
        <div className="header-indicator"></div>
      </div>

      {/* 메인 제목 */}
      <h2 className="main-title">새 이벤트</h2>

      {/* 폼 */}
      <div className="form-container">
        {/* 이벤트 이름 */}
        <div className="form-group">
          <label className="form-label">
            이벤트 이름 <span className="required">*</span>
          </label>
          <input type="text" name="eventName" className="form-input" placeholder="이벤트 이름을 입력하세요" />
        </div>

        {/* 이벤트 시간 */}
        <div className="form-group">
          <label className="form-label">
            이벤트 시간 <span className="required">*</span>
          </label>
          <input type="datetime-local" name="eventTime" className="form-input" />
        </div>

        {/* 이벤트 장소 */}
        <div className="form-group">
          <label className="form-label">
            이벤트 장소 <span className="required">*</span>
          </label>
          <input type="text" name="eventLocation" className="form-input" placeholder="장소를 입력하세요" />
        </div>

        {/* 이벤트 설명 */}
        <div className="form-group">
          <label className="form-label">이벤트 설명</label>
          <textarea
            name="eventDescription"
            rows="6"
            className="form-textarea"
            placeholder="이벤트에 대한 설명을 입력하세요"
          />
        </div>

        {/* 생성 버튼 */}
        <div className="button-container">
          <button className="submit-button">생성</button>
        </div>
      </div>
    </div>
  );
};

export default NewEventPage;
