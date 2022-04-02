import React from 'react'

import style from './CardHome.module.css';
function CardHome({keyCard, section, image, caption, title }) {

  const upperCaseText = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <a>
      <div key={keyCard} className={style.cardBoxHome}>
        <p className={style.sectionBox}>{upperCaseText}</p>
        <div className={style.cardBox}>
          <img src={image} alt={caption} />
          <p>{title}</p>
        </div>
      </div>
    </a>
  )
}

export default CardHome;