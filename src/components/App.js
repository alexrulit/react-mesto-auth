import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Mesto from './Mesto';
import Login from './Login';
import * as mestoAuth from './mestoAuth';
import { Link, withRouter } from 'react-router-dom';

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  function handleLogin() {
    setLoggedIn(true);
    tokenCheck();
  } 

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      mestoAuth.getContent(jwt)
      .then((res) => {
        setUserData(res.data);
        setLoggedIn(true);
        props.history.push("/");
      });
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <div className="page">
    <Switch>
      <Route path="/sign-up">
        <Register />
      </Route>
      <Route path="/sign-in">
        <Login handleLogin={handleLogin}/>
      </Route>
      <ProtectedRoute path="/" loggedIn={loggedIn} component={Mesto} userData={userData} />
    </Switch>
    </div>
    
  );
}

export default withRouter(App);
