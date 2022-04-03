import React from 'react'
import style from './AsideCard.module.css'

const AsideCard = ({img, caption, title, text, copy}) => {
  return (
    <div className={style.cardBox}>
      <div>
        <img src={img} alt={caption} /> 
        <p>{copy}</p>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default AsideCard;