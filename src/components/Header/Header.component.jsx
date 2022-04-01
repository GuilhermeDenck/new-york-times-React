import React from 'react'
import Menu from './Menu.component';
import style from './Header.module.css';


const Header = () => {
  return (
    <header className={style.header}>
      <Menu />
    </header>
  )
}

export default Header;