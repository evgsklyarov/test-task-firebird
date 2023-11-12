import React from 'react'
import styles from 'components/Button/Button.module.scss';

interface Props {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  style?: 'primary' | 'secondary';
}
const Button = ({
  title,
  onClick,
  disabled = false,
  style = 'primary'
}: Props) => (
  <button
    className={`${styles.button} ${styles[`button_${style}`]}`}
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </button>
)

export default Button;
