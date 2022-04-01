import { useEffect, useContext } from "react";
import { NewYorkContext } from '../../context/NewYork.context';
import Logo from '../../images/logo.svg'
import titulo from '../../images/nytimes-wordmark.svg'

import style from './Home.module.css';
const Home = () => {

  const { getNewsHome, home } = useContext(NewYorkContext);

  console.log(home);

  useEffect(() => {
    getNewsHome();
  }, [])

  return (
    <div className={style.home}>
      <h1>Home</h1>
      <img src={Logo} alt="logo" />
      <img src={titulo} alt="titulo" />
    </div>
  )
}

export default Home;