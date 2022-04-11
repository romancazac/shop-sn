import React from "react";
import img from "../../img/cutie.png"
import Button from "../ui/Button";
import Nathing from "./Nathing";
function Cart({ closeCard, items = [], onDelete }) {
        console.log(items)
    return (
        <div className="cart">
            <div className="cart__body">
                {items.length > 0 ?         
                    <div className="cart__wrapper">
                        <button className="cart__close cart__close_m" onClick={closeCard} ></button>
                        <h2 className="cart__title">Корзина</h2>
                        <ul className="cart__list">
                            {items.map((p) =>
                                <li className="cart__row" key={p.id}>
                                    <img src={p.link} alt="" className="cart__img" />
                                    <div className="cart__content">
                                        <h3 className="cart__name">{p.title}</h3>
                                        <span className="cart__price">{p.price} руб</span>
                                    </div>
                                    <button className="cart__close" onClick={() => onDelete(p.id)}></button>
                                </li>
                            )
                            }

                        </ul>

                        <div className="cart__total total-cart">
                            <div className="total-cart__line">
                                <span className="total-cart__name">Итого: </span>
                                <span className="total-cart__dashed"></span>
                                <span className="total-cart__price cart__price">21 498 руб.</span>
                            </div>
                            <div className="total-cart__line">
                                <span className="total-cart__name">Налог 5%: </span>
                                <span className="total-cart__dashed"></span>
                                <span className="total-cart__price cart__price">1074 руб.</span>
                            </div>
                            <Button className="total-cart__btn btn-block"><span>Оформить заказ</span></Button>
                        </div>
                    </div> 
                    :
                    <Nathing
                        title="Корзина пуста"
                        text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                        onClose={"/"}
                        img={img}    
                    />

                }



            </div>

        </div>
    )
}
export default Cart;