import React from 'react'
import style from './SectionBanner.module.css';
function SectionBanner({date, title, text, author, img, alt}) {
  return (
    <div className={style.sectionBanner}>
      <small>{date}</small>
      <div className={style.noticeBanner}>
        <h2>{title}</h2>
        <p>{text}</p>
        <small>{author}</small>
      </div>
      <img src={img} alt={alt} />
      <hr />
    </div>
  )
}

export default SectionBanner;