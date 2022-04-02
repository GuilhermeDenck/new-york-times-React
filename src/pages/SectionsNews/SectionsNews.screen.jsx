import { useEffect, useContext } from 'react'
import { NewYorkContext } from '../../context/NewYork.context';
import { useParams, useNavigate, Link } from 'react-router-dom';

import moment from 'moment';

import Loading from '../../components/Loading/Loading.component';
import Error from '../../components/Error/Error.component';
import SectionBanner from '../../components/SectionBanner/SectionBanner.component';
import style from './SectionsNews.module.css';
const SectionsNews = () => {

  const {typeNews} = useParams();

  const upperCaseText = typeNews.charAt(0).toUpperCase() + typeNews.slice(1);

  const { getNewsWorld, getNewsScience, getNewsTech, getNewsHealth, getNewsPolitics, news, error, loading, setArticle } = useContext(NewYorkContext);
  const navigate = useNavigate();

  useEffect(() => {
    switch (typeNews) {
      case 'world':
        getNewsWorld();
      break;
      case 'science':
        getNewsScience();
      break;
      case 'tech':
        getNewsTech();
      break;
      case 'health':
        getNewsHealth();
      break;
      case 'politics':
        getNewsPolitics();
      break;
      default:
        navigate('/nyttop');
      break;
    }

  }, [typeNews])
  
  console.log(news.multimedia);
  if(loading) return <Loading />
  if(error) return <Error />
  return (
    <div>
      <h1 className={style.titlePage}>{upperCaseText}</h1>
      <hr />
      <div className={style.menuTopLatest}>
        <button> Latest </button>
      </div>
        {
          news.map( e => (
            console.log(e.title),
            <div key={e.uri.split('/')[3]}>
              <Link to={`/details/${e.uri.split('/')[3]}`} onClick={ () => setArticle(e)}>
                <SectionBanner date={moment(e.published_date).format("ll")} title={ e.title ? e.title : 'Sem titulo'} text={e.abstract ? e.abstract : 'Sem informção'} author={e.byline} img={ e.multimedia ? e.multimedia[1].url : null } alt={e.multimedia ? e.multimedia[1].caption : null}/>
              </Link>
            </div>
          ))
        }
      <div>
      </div>
    </div>
  )
}

export default SectionsNews;