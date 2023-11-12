import React from 'react'
import styles from './Title.module.scss';

interface Props {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
 const Title = ({ children, level = 1 }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${styles.title} ${styles[`title_h${level}`]}`}>{children}</Tag>
};

export default Title;