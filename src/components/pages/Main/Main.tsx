import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { exec } from 'child_process';
import styles from './styles.scss';
import Button from '../../atoms/Button/Button';

const Main: React.FC = () => {
  let list;

  const [dockerNetworkList, setDockerNetworkList] = useState([
    {
      id: '',
      name: '',
      driver: '',
      scope: '',
    },
  ]);

  useEffect(() => {
    exec('docker network ls', (err, stdout) => {
      if (err) throw err;

      const dockerNetworkList = stdout
        .replace(/ +/g, ' ')
        .replace(/\n$/, '')
        .split('\n')
        .filter(row => {
          return !row.includes('NETWORK ID');
        })
        .map(row => {
          console.log(row);
          const cols = row.split(' ');
          return {
            id: cols[0],
            name: cols[1],
            driver: cols[2],
            scope: cols[3],
          };
        });
      setDockerNetworkList(dockerNetworkList);
    });
  }, []);

  if (dockerNetworkList.length === 0) {
    list = <div>no docker network found</div>;
  } else {
    list = dockerNetworkList.map(dockerNetwork => {
      return (
        <Link to={`/detail/${dockerNetwork.name}`} key={dockerNetwork.id}>
          <Button label={dockerNetwork.name}></Button>
        </Link>
      );
    });
  }

  return (
    <div className={styles.main}>
      <div>$ docker network ls</div>
      <div>{list}</div>
    </div>
  );
};

export default Main;
