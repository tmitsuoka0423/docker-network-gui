import React from 'react';
import styles from './styles.scss';

interface IProps {
  label: string;
  onClick?: () => {};
}

const Button: React.FC<IProps> = (props: IProps) => {
  return <button className={styles.button}>{props.label}</button>;
};

export default Button;
