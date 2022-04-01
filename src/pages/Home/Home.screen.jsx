import { useEffect, useContext } from "react";
import { NewYorkContext } from '../../context/NewYork.context';

import Loading from '../../components/Loading/Loading.component'
import Error from '../../components/Error/Error.component'
import style from './Home.module.css';
const Home = () => {

  const { getNewsHome, home, error, loading } = useContext(NewYorkContext);

  console.log(home);

  useEffect(() => {
    getNewsHome();
  }, [])


  if(loading) return <Loading /> 
  if(error) return <Error />
  return (
    <div className={style.home}>
      <h1>Home</h1>
    </div>
  )
}

export default Home;