import React, { Component } from "react";
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Project } from "./pages/Project";
import { Header } from "./layouts/Header";
import { Navbar } from "./layouts/Navbar";
import { Filebar } from "./layouts/Filebar";
import { Toolbar } from "./layouts/Toolbar";
import { Footer } from "./layouts/Footer";

export const ProjectView = () => (<Project />);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Filebar />
          <Toolbar />
          <div className="content-wrapper">
            <Route exact path="/" component={ProjectView} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
