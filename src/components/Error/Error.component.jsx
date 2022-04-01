import React from 'react'
import ErrorImage from '../../images/error.gif'
import style from './Error.module.css'
const Error = () => {
  return (
    <div className={style.error}>
      <div className={style.errorBox}>
        <img src={ErrorImage} alt="Imagem para error de um aviso" />
        <h3>Erro na requisição</h3>
      </div>
    </div>
  )
}

export default Error;