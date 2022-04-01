import { Link, useNavigate } from "react-router-dom"
import style from './Header.module.css'
import Logo from '../../images/logo.svg'

const Menu = () => {
  return (
      <nav className={style.nav}>
        <ul className={style.ul}>
            <Link to='/nyttop'><img src={Logo} alt="logo" /></Link>          
          <div>
            <Link to='/section'><li>World</li></Link>
            <Link to='/section'><li>Food</li></Link>
            <Link to='/section'><li>Tech</li></Link>
            <Link to='/section'><li>Business</li></Link>
          </div>
        </ul>
      </nav>
  )
}

export default Menu;