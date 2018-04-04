// import { hot } from 'react-hot-loader';
import { Component } from 'react';
import Main from './Main';
import './App.css';

class App extends Component {
  state = {
    name: 'redoak',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
        <Main />
      </div>
    );
  }
}

export default App;
