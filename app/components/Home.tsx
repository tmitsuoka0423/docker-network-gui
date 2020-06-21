import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home({ dockerNetworkList }: any) {
  const linkList = dockerNetworkList.map(dockerNetwork => (
    <div key={dockerNetwork.name}>
      <Link to={routes.DETAIL}>{dockerNetwork.name}</Link>
    </div>
  ));

  return (
    <div className={styles.container} data-tid="container">
      <div>$ docker network ls</div>
      {linkList}
    </div>
  );
}
