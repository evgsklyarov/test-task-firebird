import React from 'react';
import style from './Loader.module.scss';

const Loader = () => (
  <div className={style.loader}>
    <div className={style.loader__spinner} />
  </div>
);

export default Loader;
