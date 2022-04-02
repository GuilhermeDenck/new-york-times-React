import moment from "moment"
import style from "./TopNewsSection.module.css"

function TopNewsSection({ title, abstract, multimedia, caption, kicker, published_date, byline, copyright, param }) {
  return (
      <>
    <div className={style[`topNewsSection${param}`]}>
        <div className={style.copyright}>
            <img src={multimedia} alt={caption} />
            <small>{copyright}</small>
        </div>
        <div>
            <p>{kicker}</p>
            <h2 className={style.text}>{title}</h2>
            <p className={style.text}>{abstract}</p>
            <span><small>{moment(published_date).startOf('hour').fromNow()}</small>{` - ${byline}`}</span>
        </div>
    </div>
    </>
  )
}

export default TopNewsSection