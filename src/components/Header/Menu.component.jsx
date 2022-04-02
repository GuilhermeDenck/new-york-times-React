import { Link, useNavigate } from "react-router-dom"
import style from './Header.module.css'
import Logo from '../../images/logo.svg'

const Menu = () => {
  return (
      <nav className={style.nav}>
        <ul className={style.ul}>
            <Link to='/nyttop'><img src={Logo} alt="logo" /></Link>          
          <div>
            <Link to='/section/world'><li>World</li></Link>
            <Link to='/section/science'><li>Science</li></Link>
            <Link to='/section/tech'><li>Tech</li></Link>
            <Link to='/section/health'><li>Health</li></Link>
            <Link to='/section/politics'><li>Politics</li></Link>
          </div>
        </ul>
      </nav>
  )
}

export default Menu;