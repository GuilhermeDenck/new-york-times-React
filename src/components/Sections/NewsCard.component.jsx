import moment from 'moment'
import React from 'react'

const NewsCard = ({ title, abstract, url, multimedia, published_date, byline, copyright}) => {

  return (
    <div>
      <a href={url}>
        <img src={multimedia} alt="Imagem sobre a notícia" />
        <p>{copyright}</p>
        <h1>{title}</h1>
        <p>{abstract}</p>
        <br/>
        <p>{byline}</p>
        <small>{moment(published_date).format('DD/MM/YYYY')}</small>          
      </a>
    </div>
  )
}

export default NewsCard;
