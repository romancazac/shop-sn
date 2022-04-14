import React, { useContext, useState } from "react";
import img from "../../img/cutie.png"
import order from "../../img/order.png"
import Button from "../ui/Button";
import Nathing from "./Nathing";
import WrapperContext from "../../context";
import axios from "axios";
function Cart({ closeCard, items = [], onDelete,totalPrice }) {

const{setCartProducts,cartProducts} = useContext(WrapperContext)    
const[comand, setComand] = useState(null)
const[orders,setOrders] = useState([])
    const addComand = async () =>{
        console.log(cartProducts)

        const { data } = await axios.post('https://625406a519bc53e234775c39.mockapi.io/order', {
            items:cartProducts,
        });
        setOrders(data.id)
        setComand(true)
        setCartProducts([])
        for(let i = 0; i < cartProducts.length; i++){
            const item = cartProducts[i];
            await axios.delete('https://625406a519bc53e234775c39.mockapi.io/cart/' + item.id)
        }
        console.log("click")
    }

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
                                <span className="total-cart__price cart__price">{totalPrice} руб.</span>
                            </div>
                            <div className="total-cart__line">
                                <span className="total-cart__name">Налог 5%: </span>
                                <span className="total-cart__dashed"></span>
                                <span className="total-cart__price cart__price">{totalPrice / 100 * 5} руб.</span>
                            </div>
                            <Button className="total-cart__btn btn-block"  onClick={addComand}><span>Оформить заказ</span></Button>
                        </div>
                    </div> 
                    :
                    <Nathing
                        title={comand ? `Ваш  заказ #${orders} создан` : "Корзина пуста"}
                        text={comand ? "Наш  куриер будет свезатся с вами" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        onClose={closeCard}
                        img={comand ? order : img}    
                    />

                }



            </div>

        </div>
    )
}
export default Cart;