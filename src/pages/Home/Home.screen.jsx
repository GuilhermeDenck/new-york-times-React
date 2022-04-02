import { useEffect, useContext } from "react";
import TopNew from "../../components/Home/TopNew.component";
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
        <TopNew title = {home.title} abstract = {home.abstract} url={home.url} published_date={home.published_date} byline={home.byline} />
    </div>
  )
}

export default Home;