import React from 'react';
import Home from '../components/Home';

const { exec } = require('child_process');

export default class HomePage extends React.Component {
  static async listDockerNetwork(): Promise<Array<object>> {
    return new Promise((resolve, reject) => {
      exec('docker network ls', (err, stdout) => {
        let result: Array<object> = [];

        if (err) {
          reject(err);
          return;
        }

        result = stdout
          .replace(/.*\n/, '')
          .replace(/ +/g, ' ')
          .split('\n')
          .map(row => {
            const cols = row.split(' ');

            return {
              networkId: cols[0],
              name: cols[1],
              driver: cols[2],
              scope: cols[3]
            };
          });
        resolve(result);
      });
    });
  }

  private dockerNetworkList: Array<object> = [];

  async componentDidMount() {
    console.log('start componentDidMount');
    this.dockerNetworkList = await HomePage.listDockerNetwork();
    console.log(this.dockerNetworkList);
    console.log('end componentDidMount');
  }

  render() {
    return <Home dockerNetworkList={this.dockerNetworkList} />;
  }
}
