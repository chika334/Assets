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
// import networking from './pages/networking';
import Register from './pages/Register';
// import Software from './pages/Software';
// import Hardware from './pages/Hardware';
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
          {/* <Route exact path="/network" component={networking} />
          <Route exact path="/hardware" component={Hardware} />
          <Route exact path="/software" component={Software} /> */}
          <Route exact component={Error} />
        </Switch>
        <Footer />
      </Provider>
    );
  }
}

export default App;
