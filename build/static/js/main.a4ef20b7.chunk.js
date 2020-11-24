(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),i=(a(15),a(9)),s=a(1),l=a(6),u=a.n(l);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041c\u0435\u0441\u0442\u043e"}))},m=o.a.createContext();var d=function(e){var t=o.a.useContext(m),a=e.card.owner._id===t._id,n=e.card.likes.some((function(e){return e._id===t._id})),r="elements__like-button ".concat(n&&"elements__like-button_active");return o.a.createElement("li",{className:"elements__item"},o.a.createElement("img",{className:"elements__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("div",{className:"elements__description"},o.a.createElement("p",{className:"elements__text"},e.card.name),o.a.createElement("div",{className:"elements__like"},o.a.createElement("button",{type:"button",className:r,onClick:function(){e.onCardLike(e.card)}}),o.a.createElement("p",{className:"elements__like-count"},e.card.likes.length))),a&&o.a.createElement("button",{type:"button",className:"elements__delete-button",onClick:function(){e.onCardDelete(e.card)}}))};var _=function(e){var t=o.a.useContext(m);return o.a.createElement("main",{className:"main"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-link",onClick:e.onEditAvatar},o.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__author"},o.a.createElement("h1",{className:"profile__title"},t.name),o.a.createElement("p",{className:"profile__subtitle"},t.about)),o.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})),o.a.createElement("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},e.cardList.map((function(t){return o.a.createElement(d,{card:t,key:t._id,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})})))))};var f=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var h=function(e){return o.a.createElement("div",{className:"popup popup_type_image ".concat(e.card.hasOwnProperty("name")&&"popup_opened")},o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("img",{src:e.card.link,className:"popup__img",alt:e.card.name}),o.a.createElement("figcaption",{className:"popup__figcaption"},e.card.name),o.a.createElement("button",{type:"button",className:"popup__close",onClick:e.onClose})))};var E=function(e){return o.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},o.a.createElement("form",{name:e.name,onSubmit:e.onSubmit,action:"#",className:"popup__container",noValidate:!0},o.a.createElement("h2",{className:"popup__title"},e.title),e.children,o.a.createElement("button",{type:"submit",className:"popup__submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement("button",{type:"button",className:"popup__close",onClick:e.onClose})))};var v=function(e){var t=o.a.useContext(m),a=o.a.useState(""),n=Object(s.a)(a,2),r=n[0],c=n[1],i=o.a.useState(""),l=Object(s.a)(i,2),u=l[0],p=l[1];return o.a.useEffect((function(){c(t.name),p(t.about)}),[t]),o.a.createElement(E,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:u})}},o.a.createElement("input",{id:"popupAuthor",name:"popupAuthor",type:"text",value:r,onChange:function(e){c(e.target.value)},className:"popup__input",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,pattern:"[\u0410-\u042f\u0430-\u044fA-Za-z -]{1,}"}),o.a.createElement("span",{id:"popupAuthor-error",className:"popup__input-error"}),o.a.createElement("input",{id:"popupDesc",name:"popupDesc",type:"text",value:u,onChange:function(e){p(e.target.value)},className:"popup__input",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",minLength:"2",maxLength:"200",required:!0}),o.a.createElement("span",{id:"popupDesc-error",className:"popup__input-error"}))};var b=function(e){var t=o.a.useRef();return o.a.createElement(E,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}},o.a.createElement("input",{id:"popupAvatar",name:"avatarLink",type:"url",ref:t,className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"popupAvatar-error",className:"popup__input-error"}))};var C=function(e){var t=o.a.useState(""),a=Object(s.a)(t,2),n=a[0],r=a[1],c=o.a.useState(""),i=Object(s.a)(c,2),l=i[0],u=i[1];return o.a.createElement(E,{name:"addcard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:l})}},o.a.createElement("input",{id:"popupName",name:"name",type:"text",onChange:function(e){r(e.target.value)},className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),o.a.createElement("span",{id:"popupName-error",className:"popup__input-error"}),o.a.createElement("input",{id:"popupLink",name:"link",type:"url",onChange:function(e){u(e.target.value)},className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"popupLink-error",className:"popup__input-error"}))},k=a(7),N=a(8),g=new(function(){function e(t){Object(k.a)(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization,this._contentType=t.headers.contentType}return Object(N.a)(e,[{key:"_sendRequest",value:function(e,t,a){return this._headers={authorization:this._token,"Content-type":this._contentType},this._requestInit={method:t,headers:this._headers},"POST"!==t&&"PATCH"!==t||(this._requestInit.body=a),fetch("".concat(this._baseUrl).concat(e),this._requestInit).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest("/users/me","GET",{})}},{key:"getInitialCards",value:function(){return this._sendRequest("/cards","GET",{})}},{key:"setUserInfo",value:function(e,t){return this._body=JSON.stringify({name:e,about:t}),this._sendRequest("/users/me","PATCH",this._body)}},{key:"addNewCard",value:function(e,t){return this._body=JSON.stringify({name:e,link:t}),this._sendRequest("/cards","POST",this._body)}},{key:"cardLike",value:function(e,t){return this._cardId=e,this._method=t?"DELETE":"PUT",this._sendRequest("/cards/likes/"+this._cardId,this._method,{})}},{key:"deleteCard",value:function(e){return this._cardId=e,this._sendRequest("/cards/"+this._cardId,"DELETE",{})}},{key:"setAvatar",value:function(e){return this._body=JSON.stringify({avatar:e}),this._sendRequest("/users/me/avatar","PATCH",this._body)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"67d49140-f28d-4665-8757-80e700844f4c",contentType:"application/json"}});var y=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(s.a)(c,2),u=l[0],d=l[1],E=Object(n.useState)(!1),k=Object(s.a)(E,2),N=k[0],y=k[1],O=Object(n.useState)(!1),j=Object(s.a)(O,2),S=j[0],A=j[1],L=Object(n.useState)({}),q=Object(s.a)(L,2),P=q[0],U=q[1],I=Object(n.useState)([]),T=Object(s.a)(I,2),w=T[0],x=T[1];function D(){A(!1),d(!1),y(!1),U({})}return o.a.useEffect((function(){Promise.all([g.getUserInfo(),g.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];r(a),x(n)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:"page"},o.a.createElement(m.Provider,{value:a},o.a.createElement(p,null),o.a.createElement(_,{onEditProfile:function(){d(!0)},onAddPlace:function(){y(!0)},onEditAvatar:function(){A(!0)},onCardClick:function(e){U(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));g.cardLike(e._id,t).then((function(t){var a=w.map((function(a){return a._id===e._id?t:a}));x(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){g.deleteCard(e._id).then((function(){var t=w.filter((function(t){return t._id!==e._id}));x(t)})).catch((function(e){console.log(e)}))},cardList:w}),o.a.createElement(f,null),o.a.createElement(v,{isOpen:u,onClose:D,onUpdateUser:function(e){g.setUserInfo(e.name,e.about).then((function(e){r(e),D()})).catch((function(e){console.log(e)}))}}),o.a.createElement(C,{isOpen:N,onClose:D,onAddPlace:function(e){g.addNewCard(e.name,e.link).then((function(e){x([e].concat(Object(i.a)(w))),D()})).catch((function(e){console.log(e)}))}}),o.a.createElement(b,{isOpen:S,onClose:D,onUpdateAvatar:function(e){g.setAvatar(e.avatar).then((function(e){r(e),D()})).catch((function(e){console.log(e)}))}}),o.a.createElement(h,{card:P,onClose:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.2b1f7ee5.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.a4ef20b7.chunk.js.map