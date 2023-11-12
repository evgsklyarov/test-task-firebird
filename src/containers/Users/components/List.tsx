import React from 'react';

import styles from '../Users.module.scss';

interface Props {
  children: React.ReactNode;
}

const List = ({ children }: Props) => {
  return <ul className={styles['users-list']}>
    <li className={styles['users-list__header']}>
      <span className={styles['users-list__title']}>Name</span>
      <span className={styles['users-list__title']}>Username</span>
      <span className={styles['users-list__title']}>Email</span>
      <span className={`${styles['users-list__title']} ${styles['users-list__title_action']}`}>Action</span>
    </li>
    {children}
  </ul>;
};

export default List;
