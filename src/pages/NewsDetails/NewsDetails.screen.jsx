import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { NewYorkContext } from '../../context/NewYork.context';

const NewsDetails = () => {

  const { idNews } = useParams();

  const { article, erro, loading } = useContext(NewYorkContext);

  return (
    <div>NewsDetails</div>
  )
}

export default NewsDetails;