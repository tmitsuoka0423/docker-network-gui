import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { exec } from 'child_process';

import Card from '../../atoms/Card/Card';

const Detail: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();

  const [dockerNetworkDetailList, setDockerNetworkDetailList] = useState([
    {
      name: '',
      ipv4: '',
      ipv6: '',
      macAddress: '',
      endpointId: '',
    },
  ]);

  useEffect(() => {
    exec(`docker network inspect ${id}`, (err, stdout) => {
      if (err) throw err;

      const result = JSON.parse(stdout);
      const containers = result[0].Containers;
      const detail = Object.keys(containers).map(key => {
        return {
          name: containers[key].Name,
          ipv4: containers[key].IPv4Address,
          ipv6: containers[key].IPv6Address,
          macAddress: containers[key].MacAddress,
          endpointId: containers[key].EndpointID,
        };
      });

      setDockerNetworkDetailList(detail);
    });
  }, []);

  const detailList = dockerNetworkDetailList.map(dockerNetworkDetail => {
    return (
      <Card title={dockerNetworkDetail.name} key={dockerNetworkDetail.endpointId}>
        {dockerNetworkDetail.ipv4}
      </Card>
    );
  });

  return (
    <div>
      <div>
        <button
          onClick={() => {
            history.goBack();
          }}>
          ←
        </button>
      </div>
      <div>$ docker network inspect {id}</div>
      <div>{detailList}</div>
    </div>
  );
};

export default Detail;
