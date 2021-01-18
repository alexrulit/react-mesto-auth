import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Mesto from './Mesto';
import Login from './Login';
import InfoTooltip from './InfoTooltip';
import * as mestoAuth from '../utils/mestoAuth';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [isRegisterPopupOpen, SetIsRegisterPopupOpen] = useState(false);
  const [registerPopupStatus, SetRegisterPopupStatus] = useState(false);

  function handleLogin(password, email) {

    mestoAuth.authorize(password, email)
    .then((data) => {
      if (data.token){
        setLoggedIn(true);
        setUserData(email);
        props.history.push("/");
      }  
    })
    .catch(err => console.log(err));

  } 

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      mestoAuth.getContent(jwt)
      .then((res) => {
        setUserData(res.data.email);
        setLoggedIn(true);
        props.history.push("/");
      })
      .catch(err => console.log(err));
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function handleRegister(password, email) { 

    mestoAuth.register(password, email)
    .then((res) => {
      if(res.status !== undefined && res.status === 200 || res.status === 201) {
        SetRegisterPopupStatus(true);
      } else {
        SetRegisterPopupStatus(false);
      }
      SetIsRegisterPopupOpen(true);
      })
      .catch(err => {
        console.log(err);
      });

  }
  
  function closeRegisterPopup() {
    SetIsRegisterPopupOpen(false);

    if(registerPopupStatus) {
        props.history.push('/sign-in');
    }
  }

  function signOut(){
    localStorage.removeItem('jwt');
    props.history.push('/sign-in');
  }

  return (
    <div className="page">
    <Header userData={userData} signOut={signOut} />
    <Switch>
      <Route path="/sign-up">
        <Register handleRegister={handleRegister}/>
        <InfoTooltip isOpen={isRegisterPopupOpen} onClose={closeRegisterPopup} status={registerPopupStatus} />
      </Route>
      <Route path="/sign-in">
        <Login handleLogin={handleLogin}/>
      </Route>
      <ProtectedRoute path="/" loggedIn={loggedIn} component={Mesto} />
    </Switch>
    <Footer />
    </div>
    
  );
}

export default withRouter(App);
