import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/Landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Route path='/' component={Landing} />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
