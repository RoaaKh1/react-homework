import React, { Component } from 'react';

export default class ServerLog extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      logs: []
    };
    this.logId = 0;
    this.logInterval = null;
  }

  createLog = () => {
    const newLog = {
      id: this.logId++,
      message: "Server Check Ok",
      timestamp: new Date().toLocaleTimeString()
    };

    console.log(`Log ID ${newLog.id} created at ${newLog.timestamp}`);

    this.setState(prevState => ({
      logs: [newLog, ...prevState.logs]
    }));
  };

  componentDidMount() {
    console.log("ServerLog component mounted. Starting 2-second interval.");

    this.logInterval = setInterval(this.createLog, 2000);
  }

  componentWillUnmount() {
    console.log("ServerLog component unmounting. Clearing interval.");

    clearInterval(this.logInterval);
  }

  render() {
    let logStr = this.state.logs.map(log =>
      <div key={log.id} style={{ margin: '5px 0', borderBottom: '1px dotted #ccc' }}>
        <strong>[{log.timestamp}]</strong>: {log.message}
      </div>
    );

    return (
      <div style={{ padding: '15px', border: '2px solid yellow', marginTop: '10px' }}>
        {logStr}
      </div>
    );
  }
}