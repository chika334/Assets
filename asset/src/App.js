import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import Contact from './pages/Contact';

import Error from './pages/Error'
import About from './pages/About';
import Profile from './profilepages/Profile';

import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register';
// import {connect} from 'react-redux';
import { Provider } from 'react-redux';

import { loadUser } from './actions/authActions'
import store from './store'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact component={Error} />
        </Switch>
        <Footer />
      </Provider>
    );
  }
}

export default App;
