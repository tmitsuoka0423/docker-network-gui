import React from 'react';
import Home from '../components/Home';

const { exec } = require('child_process');

export default class HomePage extends React.Component<
  {},
  { list: Array<object> }
> {
  static async listDockerNetwork(): Promise<Array<object>> {
    return new Promise((resolve, reject) => {
      exec('docker network ls', (err: any, stdout: any) => {
        let result: Array<object> = [];

        if (err) {
          reject(err);
          return;
        }

        result = stdout
          .replace(/.*\n/, '')
          .replace(/ +/g, ' ')
          .split('\n')
          .map((row: any) => {
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

  constructor(props: any) {
    super(props);
    this.state = { list: [] };
  }

  async componentDidMount() {
    const dockerNetworkList = await HomePage.listDockerNetwork();
    this.setState({ list: dockerNetworkList });
  }

  render() {
    const { list } = this.state;
    return <Home dockerNetworkList={list} />;
  }
}
