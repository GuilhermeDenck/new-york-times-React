import moment from 'moment'
import React from 'react'
import style from './TopNew.module.css'

const TopNew = ({ title, abstract, url, multimedia, published_date, byline, copyright}) => {

  return (
    <div className={style.topNew}>
      <a href={url}>
        <div className={style.cardInfo}>
          <div className={style.cardInfoLeft}>
            <h1>{title}</h1>
            <p>{abstract}</p>
            <br/>
            <p>{byline}</p>
            <small>{moment(published_date).format('DD/MM/YYYY')}</small>
          </div>
          <div className={style.copy}>
            <img src={multimedia} alt="Imagem sobre a notícia" />
            <p>{copyright}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default TopNew;