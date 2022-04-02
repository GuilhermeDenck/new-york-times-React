import { useEffect, useContext } from "react";
import { NewYorkContext } from '../../context/NewYork.context';
import { Link } from "react-router-dom";

import Loading from '../../components/Loading/Loading.component'
import Error from '../../components/Error/Error.component'
import Card from "../../components/Card/Card.component";

import style from './Home.module.css';
const Home = () => {

  const { getNewsHome, home, error, loading, setArticle } = useContext(NewYorkContext);

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
            <div key={e.uri.split('/')[3]}>
              <Link to={`/details/${e.uri.split('/')[3]}`} onClick={ () => setArticle(e)} >
                <Card 
                  keyCard={e.uri}
                  section={e.section}
                  image={e.multimedia[2].url}
                  caption={e.multimedia[2].caption}
                  title={e.title}
                />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;