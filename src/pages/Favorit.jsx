
import React from 'react';
import { Link } from 'react-router-dom';
import ProductItems from '../components/content/ProductItems';
import Nathing from '../components/header/Nathing';
import WrapperContext from '../context';
import img from '../img/smile.png'
function Favorit() {
    const {favorite,addWish,cartProducts,addProduct} = React.useContext(WrapperContext);


    return (
        <div>
            <div className="container">
                <div className="fav">
                    <h2 className="fav__title top-block__title">
                        Мои закладки
                    </h2>

                    <div className="products__row">
                        {
                            favorite.length > 0 ?
                                favorite.map((favorite) =>
                                    <ProductItems
                                        onPlus={(obj => addProduct(obj))}
                                        title={favorite.title}
                                        price={favorite.price}
                                        link={favorite.link}
                                        id={favorite.id}
                                        key={favorite.id}
                                        onWish={(obj) => addWish(obj)}
                                        favorited={true}
                                        added={cartProducts.some((obj) => Number(obj.id) === Number(favorite.parentId))}
                                    />
                                )
                                :
                                <div className="fav__body">
                                    <Link to="/">
                                        <Nathing
                                            img={img}
                                            title="Закладок нет :("
                                            text="Вы ничего не добавляли в закладки"

                                        />
                                    </Link>

                                </div>
                        }


                    </div>


                </div>

            </div>
        </div>
    )
}

export default Favorit;