import React, { Component } from "react";
import MainBody from './MainBody';
import Header from './Header';
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
//import { Route, Switch, Redirect, HashRouter } from "react-router-dom"; 

import "./App.css"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="container">
            <Header></Header>
            <MainBody></MainBody>
          </div>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
