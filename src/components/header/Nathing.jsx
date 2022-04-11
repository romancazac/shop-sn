import React from "react";
import { Link } from "react-router-dom";
function  Nathing ({img,title,text,onClose}) {
    return (
        <div className="cart__nathing nathing">
            <img src={img} alt="" className="nathing__img" />
            <h3 className="nathing__title">{title}</h3>
            <p className="nathing__text">{text}</p>
            <Link className="nathing__btn" onClick={onClose} to="/"><span>Вернуться назад</span></Link>
        </div>
    )
}
export default Nathing;