import React from 'react';

const { exec } = require('child_process');

const inspectDockerNetwork = async (name: string): any => {
  return new Promise((resolve, reject) => {
    exec(`docker network inspect ${name}`, (err: any, stdout: any) => {
      if (err) {
        reject(err);
        return;
      }

      console.log(stdout);
      resolve(JSON.parse(stdout));
    });
  });
};

export default async function Detail() {
  const networks: Array<any> = await inspectDockerNetwork('book_default');

  const detailList = Object.keys(networks[0].Containers).map(key => {
    // eslint-disable-next-line react/jsx-key
    return <div>{networks[0].Containers[key].Name}</div>;
  });

  console.log(detailList);

  return detailList;
}
