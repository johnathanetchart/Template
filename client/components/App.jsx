// import React, { useState, useEffect } from 'react';
import React from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001/";

class App extends React.Component {
  constructor(props) {
    super (props);

    this.state = {}
  }

  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      this.setState({
        response: data
      }, () => {
        console.log(this.state);
      });
    });
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        It's <time dateTime={response}>{response}</time>
      </div>
    )
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
