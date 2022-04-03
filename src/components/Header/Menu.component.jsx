import { Link } from "react-router-dom"
import style from './Header.module.css'
import Logo from '../../images/logo.svg'

const Menu = () => {
  return (
      <nav className={style.nav}>
        <ul className={style.ul}>
            <Link to='/nyttop'><img src={Logo} alt="logo" /></Link>          
          <div>
            <Link to='/section/world'><li>World</li></Link>
            <Link to='/section/us'><li>U.S</li></Link>
            <Link to='/section/politics'><li>Politics</li></Link>
            <Link to='/section/nyregion'><li>N.Y.</li></Link>
            <Link to='/section/business'><li>Business</li></Link>
            <Link to='/section/opinion'><li>Opinion</li></Link>
            <Link to='/section/technology'><li>Tech</li></Link>
            <Link to='/section/science'><li>Science</li></Link>
            <Link to='/section/health'><li>Health</li></Link>
            <Link to='/section/sports'><li>Sports</li></Link>
            <Link to='/section/arts'><li>Arts</li></Link>
            <Link to='/section/books'><li>Books</li></Link>
            <Link to='/section/style'><li>Style</li></Link>
            <Link to='/section/food'><li>Food</li></Link>
            <Link to='/section/travel'><li>Travel</li></Link>
            <Link to='/section/magazine'><li>Magazine</li></Link>
            <Link to='/section/tmagazine'><li>T Magazine</li></Link>
            <Link to='/section/realestate'><li>Real Estate</li></Link>
            <Link to='/section/movies'><li>Vídeo</li></Link>

          </div>
        </ul>
      </nav>
  )
}

export default Menu;