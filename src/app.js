import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import AppRouting from './app.routing';
import TodoerMain from './areas/todoer/containers/main/main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoerMain />
      </div>
    );
  }
}

export default App;
