import { useEffect, useContext } from "react";
import TopNew from "../../components/Home/TopNew.component";
import { NewYorkContext } from '../../context/NewYork.context';

import style from './Home.module.css';
const Home = () => {

  const { getNewsHome, home } = useContext(NewYorkContext);

  console.log(home);

  useEffect(() => {
    getNewsHome();
  }, [])

  return (
    <div className={style.home}>
        <TopNew title = {home.title} abstract = {home.abstract} url={home.url} multimedia={home.multimedia} published_date={home.published_date} byline={home.byline} />
    </div>
  )
}

export default Home;