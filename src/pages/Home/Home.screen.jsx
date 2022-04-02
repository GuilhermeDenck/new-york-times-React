import { useEffect, useContext } from "react";
import TopNew from "../../components/Home/TopNew.component";
import { NewYorkContext } from '../../context/NewYork.context';

import Loading from '../../components/Loading/Loading.component'
import Error from '../../components/Error/Error.component'
import Card from "../../components/Card/Card.component";

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
      {home.map(e => 
      (<TopNew  title = {e.title} abstract = {e.abstract} url={e.url} published_date={e.published_date} byline={e.byline} multimedia={e.multimedia[1].url} copyright={e.multimedia[0].copyright}/>)
      )}
      <div className={style.gridCards}>
        {
          home.map(e => (
            <Card 
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