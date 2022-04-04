import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NewYorkContext } from '../../context/NewYork.context';

import moment from 'moment';

import Author from '../../images/user.svg'
import style from './NewsDetails.module.css';
const NewsDetails = () => {

  const [assets, setAssets] = useState({});

  const { article } = useContext(NewYorkContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(Object.keys(article).length === 0) return navigate('/nyttop');

    setAssets(article.multimedia[0]);
  }, []);

  return (
      <div className={style.newsDetails}>
        <h1>{article.title}</h1>
        <div className={style.bannerAuthor}>
          <img src={Author} alt="Foto do author"/>
          <p>{article.byline ? article.byline : 'Autor anônimo'}</p>
        </div>
        <small>{moment(article.published_date).format('ll')}</small>
        <img src={assets.url} alt={assets.caption} />
        <p>{article.abstract}</p>
      </div> 
  )
}

export default NewsDetails;