import { useEffect, useContext } from "react";
import { NewYorkContext } from '../../context/NewYork.context';

import Loading from '../../components/Loading/Loading.component'
import Error from '../../components/Error/Error.component'
import style from './Home.module.css';


import CardHome from "../../components/CardHome/CardHome.component";
const Home = () => {

  const { getNewsHome, home, error, loading } = useContext(NewYorkContext);

  useEffect(() => {
    getNewsHome();
  }, [])
  
  if(loading) return <Loading /> 
  if(error) return <Error />

  return (
    <div className={style.home}>
      <div className={style.gridCards}>
        {
          home.map(e => (
            <CardHome 
              keyCard={e.short_url}
              section={e.section}
              image={e.multimedia[2].url}
              caption={e.multimedia[2].caption}
              title={e.title}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home;