import React from 'react';

import style from './Error.module.scss';

interface Props {
  message?: string;
}

const Error = ({ message = 'Something went wrong' }: Props) => (
  <div className={style.error}>
    <span className={style.error__emoji}>😥</span>
    <p className={style.error__message}>{message}</p>
  </div>
);

export default Error;
