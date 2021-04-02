// import React, { useState, useEffect } from 'react';
import React from 'react';
import socketIOClient from 'socket.io-client';
import SelectionForm from './SelectionForm';
const ENDPOINT = 'http://localhost:4001/';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: 'none',
      teamMessages: null,
      currentTime: "not connected",
    };
    this.handleTeamSelect = this.handleTeamSelect.bind(this);
  }

  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    const { team } = this.state;
    socket.on(team, (data) => {
      this.setState(
        {
          currentTime: data.currentTime,
          teamMessages: data.teamMessages,
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }

  handleTeamSelect (e) {
    console.log(e.target.value)
    this.setState({
      team: e.target.value
    }, () => {
      this.openTeamSocket();
    })
  }
  openTeamSocket () {
    const socket = socketIOClient(ENDPOINT);
    const { team } = this.state;
    socket.on(team, (data) => {
      this.setState(
        {
          currentTime: data.currentTime,
          teamMessages: data.teamMessages,
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }

  render() {
    const { currentTime, teamMessages } = this.state;
    return (
      <div>
        It's <time dateTime={currentTime}>{currentTime}</time>
        <SelectionForm
          handleTeamSelect={this.handleTeamSelect}
        />
        Your Team Messages: { teamMessages }
      </div>
    );
  }
}
//REACT HOOKS VERSION BELOW
// function App() {
//   const [response, setResponse] = useState("");

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     socket.on("FromAPI", data => {
//       setResponse(data);
//     });
//   }, []);

//   return (
//     <div>
//       It's <time dateTime={response}>{response}</time>
//     </div>
//   )
// }

export default App;
