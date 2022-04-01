import React from 'react'
import { useParams } from 'react-router-dom';
const SectionsNews = () => {

  const {typeNews} = useParams();
  console.log(typeNews);

  return (
    <div>SectionsNews</div>
  )
}

export default SectionsNews;