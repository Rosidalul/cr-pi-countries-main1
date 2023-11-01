import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className={style.container}>
        <div className={style.div}>
      <h3 className={style.title}>Bienvenido:</h3>

      <h1 className={style.heading} >Countries Web</h1>
      <p className={style.description}>Rosi</p>


      <Link to="/home">
        <button className={style.button}>Enter</button>
      </Link>
      </div>
    </div>
  );
}

export default Landing;