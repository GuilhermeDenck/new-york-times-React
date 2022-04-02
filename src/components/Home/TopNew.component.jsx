import React from 'react'

const TopNew = ({ title, abstract, url, multimedia, published_date, byline }) => {

  return (
    <a href={url}>
      <div>
        <h1>{title}</h1>
        <p>{abstract}</p>
        <span>{byline} - <small>{published_date}</small></span>
      </div>
      <div>
        {/* <img src={multimedia} alt="Imagem sobre a notícia" /> */}
      </div>
    </a>

  )
}

export default TopNew;