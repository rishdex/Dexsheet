import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Project } from "./pages/Project";

export const ProjectView = () => (<Project />);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="content-wrapper">
            <Route exact path="/" component={ProjectView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
