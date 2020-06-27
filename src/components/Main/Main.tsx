import React, { useState, useEffect } from 'react';
import styles from './styles.scss';
import { ipcRenderer } from 'electron';
import Button from '../atoms/Button/Button';

const Main: React.FC = () => {
  const [dockerNetworkList, setDockerNetworkList] = useState([
    { id: 'aaa', name: 'aaaa' },
    { id: 'bbb', name: 'bbbb' },
    { id: 'ccc', name: 'cccc' },
  ]);

  useEffect(() => {
    ipcRenderer.invoke('get-docker-network-list').then(dockerNetworkList => {
      setDockerNetworkList(dockerNetworkList);
    });
  }, []);

  const list = dockerNetworkList.map(dockerNetwork => {
    return <Button label={dockerNetwork.name} key={dockerNetwork.id}></Button>;
  });

  return <div className={styles.main}>{list}</div>;
};

export default Main;
