import moment from "moment"

import style from './AsideNewsSection.module.css'
function AsideNewsSection({title, abstract, multimedia, caption, published_date, byline}) {
  return (
    <div className={style.card}>
        <h3>{title}</h3>
        <img src={multimedia} alt={caption} />
        <p>{abstract}</p>
        <span><small>{moment(published_date).startOf('hour').fromNow()}</small>{` - ${byline}`}</span>
    </div>
  )
}

export default AsideNewsSection