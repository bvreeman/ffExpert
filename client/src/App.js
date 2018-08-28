import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Compair from './components/compair/compair';
import FirebaseSignUp from './components/FirebaseComponents/FirebaseSignUp';
import FirebaseSignIn from './components/FirebaseComponents/FirebaseSignIn';
import FirebasePasswordForgetPage from './components/FirebaseComponents/FirebasePasswordForget';
import FirebaseAccount from './components/FirebaseComponents/FirebaseAccount';
import FirebaseWithAuthentication from './components/FirebaseComponents/FirebaseWithAuthentication';
import * as routes from './constants/routes';
import Login from './components/login/login'

class App extends Component {
  render() {
    return (
      <Router>
        <div id="page">
          <Header />
            <Switch>
              {/* <Route exact path='/' component={Home}/> */}
              {/* <Route exact path={routes.LANDING} component={() => <LandingPage />} /> */}
              <Route exact path={routes.SIGN_UP} component={() => <FirebaseSignUp />} />
              <Route exact path={routes.SIGN_IN} component={() => <FirebaseSignIn />} />
              <Route exact path={routes.PASSWORD_FORGET} component={() => <FirebasePasswordForgetPage />} />
              {/* <Route exact path={routes.HOME} component={() => <HomePage />} /> */}
              <Route exact path={routes.ACCOUNT} component={() => <FirebaseAccount />} />
              <Route exact path={routes.LOGIN} component={() => <Login />} />
            </Switch>
            {/* <Compair /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default FirebaseWithAuthentication(App);
