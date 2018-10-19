import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import store from "./ducks/store";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="outerDiv">
            <Nav />
            <div className="mainContentContainer">{routes}</div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
