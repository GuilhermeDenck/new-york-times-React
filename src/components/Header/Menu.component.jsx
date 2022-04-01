import { Link, useNavigate } from "react-router-dom"
import Style from './Header.module.css'


const Menu = () => {
  return (
      <nav>
        <ul className={Style.ul}>
          <div>
            <Link to='/nyttop'><i>icone</i></Link>
          </div>
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