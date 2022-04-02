import React from 'react'
import LoadingImage from '../../images/loading.gif'
import style from './Loading.module.css'
const Loading = () => {
  return (
    <div className={style.loading}>
      <img src={LoadingImage} alt="Imagem para loading de um livro" />
    </div>
  )
}

export default Loading;