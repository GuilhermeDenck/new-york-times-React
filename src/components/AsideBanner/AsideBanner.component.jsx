import React from 'react'
import style from './AsideBanner.module.css'
const AsideBanner = ({title, img, caption}) => {
  return (
    <div className={style.banner}>
      <h3>{title}</h3>
      <img src={img} alt={caption} />
    </div>
  )
}

export default AsideBanner;