import React, { useState } from 'react';
import Header from './Header';
import { Link, withRouter } from 'react-router-dom';
import * as mestoAuth from './mestoAuth';


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();
        
        if (!email || !password){
            return;
        }

        mestoAuth.authorize(password, email)
        .then((data) => {
            if (data.token){
                setEmail('');
                setPassword('');
                props.handleLogin();
                props.history.push('/');
            
            }  
        })
        .catch(err => console.log(err)); 
    
    }

    return(
        <div>
            <Header>
                <a href="/sign-up" className="header__link">Регистрация</a>
            </Header>
            <form name="main-form" action="#" className="main-form" noValidate onSubmit={handleSubmit}>
                <h2 className="main-form__title">Вход</h2>
                <input type="text" name="email" type="email" onChange={handleChangeEmail} className="main-form__input" placeholder="Email"/>
                <input type="password" name="password" type="password" onChange={handleChangePassword} className="main-form__input" placeholder="Пароль"/>
                <button type="submit" name="submit" className="main-form__button">Войти</button>
            </form>
        </div>
        );
}

export default withRouter(Login);