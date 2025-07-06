import { useState } from 'react';

const groupCard = () => {
  return (
    <article className="groupCard">
      <header className="groupCard__header">
        <h2 className="groupCard__title"></h2>
        <p className="groupCard__subtitle"></p>
      </header>
      <section className="groupCard__infos">
        <div className="groupCard__info">
          <div className="groupCard__info-label"></div>
          <div className="groupCard__info-value"></div>
        </div>
        <div className="groupCard__info">
          <div className="groupCard__info-label"></div>
          <div className="groupCard__info-value"></div>
        </div>
        <div className="groupCard__info">
          <div className="groupCard__info-label"></div>
          <div className="groupCard__info-value"></div>
        </div>
      </section>
      <footer className="groupCard__footer">
        <button className="groupCard__button">그룹 상세 보기</button>
      </footer>
    </article>
  );
};

export default groupCard;
