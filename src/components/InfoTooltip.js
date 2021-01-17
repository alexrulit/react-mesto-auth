import React from 'react';
import Success from '../images/Success.png';
import Failed from '../images/Failed.png';

function InfoTooltip(props) {
    return(
      <div className={`popup popup_type_register ${props.isOpen && 'popup_opened'}`}>
          {(props.status) 
          ?
          (
          <div className="popup__container">
            <img src={Success} className="popup__status" alt="Success" />
            <h2 className="popup__status-title">Вы успешно зарегистрировались!</h2>
            <button type="button" className="popup__close" onClick={props.onClose}/>
          </div>
          )
          :
          (
          <div className="popup__container">
            <img src={Failed} className="popup__status" alt="Failed" />
            <h2 className="popup__status-title">Что-то пошло не так! Попробуйте ещё раз.</h2>
            <button type="button" className="popup__close" onClick={props.onClose}/>
          </div>
          )
          }
      </div>
    );
}

export default InfoTooltip;