import React,{useState} from "react";
import './header.scss'
import logo from "../../img/logo.png"
import cart from "../../img/cart.svg"
import wish from "../../img/wish.svg"
import user from "../../img/user.svg"
import Cart from "./Cart";
import { Link } from "react-router-dom";
function Header({items,onDelete}) {

  const [openCard, setOpenCard] = useState(false);
  const cardOpen = () => {
    setOpenCard(true)

  }
  const closeCard = () => {
    setOpenCard(false)

  }

    return(
        <header className="header">
            <div className="container">
                <div className="header__body">

                    <Link className="header__logo" to="/">
                        <img  src={logo} alt="" />
                    </Link>
                    <div className="header__right">
                        <button onClick={cardOpen} className="header__cart">
                            <img src={cart} alt="" className="header__icon"/>
                            <span>1205 руб.</span>
                           
                        </button>
                        { openCard ? < Cart items={items} key={items.id} closeCard={closeCard} onDelete={onDelete}/>: null}
                        <Link className="header__wish" to="/favorit">
                            <img src={wish} alt="" className="header__icon"/>
                        </Link>
                        <button className="header__user">
                            <img src={user} alt="" className="header__icon"/>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header