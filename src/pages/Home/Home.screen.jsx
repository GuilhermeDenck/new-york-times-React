import { useEffect, useContext } from "react";
import { NewYorkContext } from '../../context/NewYork.context';

import Loading from '../../components/Loading/Loading.component'
import Error from '../../components/Error/Error.component'
import style from './Home.module.css';
const Home = () => {

  const { getNewsHome, home, error, loading } = useContext(NewYorkContext);

  useEffect(() => {
    getNewsHome();
  }, [])


  if(loading) return <Loading /> 
  if(error) return <Error />
  return (
    <div className={style.home}>
      <h1>1. Gostaríamos que sua página possuísse 4 setores de notícias: Ciência & Tecnologia, Saúde, Política e Mundo. Conforme os setores do The New York Times science, technology, health, politics e world.</h1>
    </div>
  )
}

export default Home;