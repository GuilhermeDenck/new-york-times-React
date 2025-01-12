import { useEffect, useContext, useState } from "react";
import { NewYorkContext } from '../../context/NewYork.context';
import { Link } from "react-router-dom";

import moment from "moment";
import axios from "axios";

import Loading from '../../components/Loading/Loading.component'
import Error from '../../components/Error/Error.component'
import Card from "../../components/Card/Card.component";
import AsideCard from "../../components/AsideCard/AsideCard.component";
import AsideBanner from "../../components/AsideBanner/AsideBanner.component";
import TopNews from "../../components/TopNews/TopNews.component";

import cloud from '../../images/cloud.png'
import titleNY from '../../images/nytimes-wordmark.svg'
import style from './Home.module.css';
const Home = () => {

  const { getNewsHome, home, error, loading, setArticle, setLoading } = useContext(NewYorkContext);

  const [top, setTop] = useState([]);
  const [aside, setAside] = useState([]);
  const [cardAside, setCardAside] = useState([]);
  const [rest, setRest] = useState([]);
  
  const [temp, setTemp] = useState(0);
  const [max, setMax ] = useState(0);
  const [min, setMin] = useState(0);

  const getTempNewYork = async () => {
    try {
      const {data} = await axios.get('https://api.hgbrasil.com/weather?format=json-cors&key=6fc9ef6c');
      setTemp(data.results.temp);
      setMax(data.results.forecast[0].max);
      setMin(data.results.forecast[0].min);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    getNewsHome();
    getTempNewYork();
  }, [])

  useEffect(() => {
    setTop(home.slice(0, 10));
    setAside(home.slice(10, 20));
    setCardAside(home.slice(20, 28));
    setRest(home.slice(28));
  }, [home])

  if(loading) return <Loading /> 
  if(error) return <Error />

  return (
    <div>
      <div className={style.headerPage}>
        <p>{moment().format("ll")}</p>
        <img src={titleNY} alt='New York Times' />
        <div className={style.temp}>
          <img src={cloud} alt="cloud" />
          <p>{temp}°C</p>
          <div className={style.maxMin}>
            <small>{max}°</small>
            <small>{min}°</small>
          </div>
        </div>
      </div>      
      <div className={style.mainNotice}>
        <div  className={style.top}>
          {
            top.map(e => (
            <div key={e.uri.split('/')[3]}>
              <Link to={`/details/${e.uri.split('/')[3]}`} onClick={ () => setArticle(e)}>
                <TopNews 
                  title = {e.title}
                  abstract = {e.abstract}
                  url={e.url}
                  published_date={e.published_date}
                  byline={e.byline}
                  multimedia={e?.multimedia[1].url}
                  copyright={e?.multimedia[0].copyright}/>
              </Link>
              <hr />
            </div>
            ))
          }   
        </div>
        <div className={style.aside}>
          {
            aside.map( e => (
              <div key={e.uri.split('/')[3]}  >
                <Link to={`/details/${e.uri.split('/')[3]}`} onClick={ () => setArticle(e)}>
                  <AsideCard 
                    img={e?.multimedia[1].url} 
                    caption={e?.multimedia[1].caption} 
                    title={e.title} 
                    text={e.abstract} 
                    copy={e?.multimedia[0].copyright}/>
                </Link>
              </div>
            ))
          }
          {
            cardAside.map( e => (
              <div key={e.uri.split('/')[3]}  >
                <Link to={`/details/${e.uri.split('/')[3]}`} onClick={ () => setArticle(e)}>
                  <AsideBanner 
                    img={e?.multimedia[2].url} 
                    caption={e?.multimedia[2].caption} 
                    title={e.title}/>
                </Link>
                <hr />
              </div>
            ))
          }
        </div>
      </div>
      <div className={style.gridCards}>
          {
            rest.map(e => (
              <div key={e.uri.split('/')[3]}>
                <Link to={`/details/${e.uri.split('/')[3]}`} onClick={ () => setArticle(e)} >
                  <Card 
                    section={e.section}
                    image={e?.multimedia[2].url}
                    caption={e?.multimedia[2].caption}
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