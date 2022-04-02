import React from 'react'
import style from './AsideCard.module.css'

const AsideCard = ({img, caption, title, text}) => {
  return (
    <div className={style.cardBox}>
      <img src={img} alt={caption} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default AsideCard;