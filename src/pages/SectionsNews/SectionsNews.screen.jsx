import { useEffect, useContext } from 'react'
import { NewYorkContext } from '../../context/NewYork.context';
import { useParams, useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading/Loading.component';
import Error from '../../components/Error/Error.component';
const SectionsNews = () => {

  const {typeNews} = useParams();

  const { getNewsWorld, getNewsScience, getNewsTech, getNewsHealth, getNewsPolitics, news, error, loading } = useContext(NewYorkContext);
  const navigate = useNavigate();

  console.log(news);

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

  if(loading) return <Loading />
  if(error) return <Error />

  return (
    <div>
  
    </div>
  )
}

export default SectionsNews;