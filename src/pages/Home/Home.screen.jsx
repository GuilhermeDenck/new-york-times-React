import { useEffect, useContext } from "react";
import { NewYorkContext } from '../../context/NewYork.context';
import Error from '../../components/Error/Error.component'
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
      <Error />
    </div>
  )
}

export default Home;