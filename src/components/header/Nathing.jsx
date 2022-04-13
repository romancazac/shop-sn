import React from "react";
function  Nathing ({img,title,text,onClose}) {
    return (
        <div className="cart__nathing nathing">
            <img src={img} alt="" className="nathing__img" />
            <h3 className="nathing__title">{title}</h3>
            <p className="nathing__text">{text}</p>
            <button className="nathing__btn" onClick={onClose}><span>Вернуться назад</span></button>
        </div>
    )
}
export default Nathing;