import React from 'react'
import styles from './Paragraph.module.scss';

interface Props {
  children: React.ReactNode;
  style?: 'primary' | 'secondary';
}
const Paragraph = ({ children, style = 'primary' }: Props) => 
  <p className={`${styles.paragraph} ${styles[`paragraph_${style}`]}`}>{children}</p>;

  export default Paragraph;
  