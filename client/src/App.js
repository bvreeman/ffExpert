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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router>
        <div id="page">
          <Header />
            <Switch>
              <Route exact path='/' component={Home}/>
              {/* <Route exact path={routes.LANDING} component={() => <LandingPage />} /> */}
              <Route exact path={routes.SIGN_UP} component={() => <FirebaseSignUp />} />
              <Route exact path={routes.SIGN_IN} component={() => <FirebaseSignIn />} />
              <Route exact path={routes.PASSWORD_FORGET} component={() => <FirebasePasswordForgetPage />} />
              {/* <Route exact path={routes.HOME} component={() => <HomePage />} /> */}
              <Route exact path={routes.ACCOUNT} component={() => <FirebaseAccount />} />
            </Switch>
          <Footer />
        </div>
      </Router>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Compair />
      </div>
    );
  }
}

export default App;
