import React from 'react';
import styles from './styles.scss';

interface IProps {
  title: string;
  children: string;
}

const Card: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.card}>
      <div>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
