import React from 'react'
import ErrorImage from '../../images/error.gif'
import style from './Error.module.css'
const Error = () => {
  return (
    <div className={style.error}>
      <img src={ErrorImage} alt="Imagem para error de um aviso" />
    </div>
  )
}

export default Error;