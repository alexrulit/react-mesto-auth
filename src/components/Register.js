import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import Header from './Header';
import InfoTooltip from './InfoTooltip';
import * as mestoAuth from './mestoAuth';

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterPopupOpen, SetIsRegisterPopupOpen] = useState(false);
    const [registerPopupStatus, SetRegisterPopupStatus] = useState(true);

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();
      
        mestoAuth.register(password, email)
        .then((res) => {
            console.log(res);
            if(res.status === 200 || 201) {
                SetRegisterPopupStatus(true);
            } else {
                SetRegisterPopupStatus(false);
            }
            SetIsRegisterPopupOpen(true);
        })
        .catch(err => {
            console.log(err);
        })
      }

    function closePopup() {
        SetIsRegisterPopupOpen(false);

        if(registerPopupStatus) {
            props.history.push('/sign-in');
        }
    }


    return(
        <div>
            <Header>
                <a href="/sign-in" className="header__link">Войти</a>
            </Header>
            <form name="main-form" action="#" className="main-form" noValidate onSubmit={handleSubmit}>
                <h2 className="main-form__title">Регистрация</h2>
                <input type="text" name="email" type="email" onChange={handleChangeEmail} className="main-form__input" placeholder="Email" required/>
                <input type="password" name="password" type="password" onChange={handleChangePassword} className="main-form__input" placeholder="Пароль" required/>
                <button type="submit" name="submit" className="main-form__button">Зарегистрироваться</button>
                <a href="/sign-in" className="main-form__link">Уже зарегистрированы? Войти</a>
            </form>
            <InfoTooltip isOpen={isRegisterPopupOpen} onClose={closePopup} status={registerPopupStatus} />
        </div>
        );
}

export default withRouter(Register);