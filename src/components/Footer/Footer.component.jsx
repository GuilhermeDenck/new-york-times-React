import { Link } from 'react-router-dom'
import style from './Footer.module.css'

import homeIcon from '../../images/newspaper.svg'
import gamesIcon from '../../images/gamepad.svg'
import cookingIcon from '../../images/utensils.svg'
import titleNY from '../../images/nytimes-wordmark.svg'

const Footer = () => {
  return (
    <div className={style.footer}>
      <hr/>
      <div className={style.footerTitle}>
        <img src={titleNY} alt="" />
        <Link to='/'><span>Go to Home Page »</span></Link>
      </div>
      <div className={style.links}>
        <div className={style.news}>
          <h4>NEWS</h4>
          <Link to='/nyttop'><p>Home</p></Link>
          <Link to='/section/world'><p>World</p></Link>
          <Link to='/section/us'><p>U.S</p></Link>
          <Link to='/section/politics'><p>Politics</p></Link>
          <Link to='/section/nyregion'><p>N.Y.</p></Link>
          <Link to='/section/business'><p>Business</p></Link>
          <Link to='/section/opinion'><p>Opinion</p></Link>
          <Link to='/section/technology'><p>Tech</p></Link>
          <Link to='/section/science'><p>Science</p></Link>
          <Link to='/section/health'><p>Health</p></Link>
          <Link to='/section/sports'><p>Sports</p></Link>
          <Link to='/section/arts'><p>Arts</p></Link>
          <Link to='/section/books'><p>Books</p></Link>
          <Link to='/section/style'><p>Style</p></Link>
          <Link to='/section/food'><p>Food</p></Link>
          <Link to='/section/travel'><p>Travel</p></Link>
          <Link to='/section/magazine'><p>Magazine</p></Link>
          <Link to='/section/tmagazine'><p>T Magazine</p></Link>
          <Link to='/section/realestate'><p>Real Estate</p></Link>
          <Link to='/section/movies'><p>Vídeo</p></Link>
        </div>
        <div className={style.subscribe}>
          <h4>SUBSCRIBE</h4>
          <ul className={style.item}>
            <li>
              <img src={homeIcon} alt="" />
              <span>Home Delivery</span>
            </li>
            <li>
              <img src={homeIcon} alt="" />
              <span>Digital Subscriptions</span>
            </li>
            <li>
              <img src={gamesIcon} alt="" />
              <span>Games</span>
            </li>
            <li>
            <img src={cookingIcon} alt="" />
              <span>Cooking</span>
            </li>
          </ul>
          <a href="#"><p>Email Newsletters</p></a>
          <a href="#"><p>Corporate Subscriptions</p></a>
          <a href="#"><p>Education Rate</p></a>
          <hr/>
          <p></p>
          <a href="#"><p>Mobile Applications</p></a>
          <a href="#"><p>Replica Edition</p></a>
          <a href="#"><p>International</p></a>
          <a href="#"><p>Canada</p></a>
          <a href="#"><p>Español</p></a>
          <a href="#"><p>中文网</p></a>
        </div>  
      </div>
      <div className={style.footerBottom}>
        <a href="https://www.nytimes.com/" target="_blank" rel='noreferrer'>
          <p>&copy; 2022 The New York Times Company</p>
        </a>
      </div>
    </div>
  )
}

export default Footer;