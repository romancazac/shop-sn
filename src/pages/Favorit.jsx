
import React from 'react';
import ProductItems from '../components/content/ProductItems';
import Nathing from '../components/header/Nathing';
import img from '../img/smile.png'
function Favorit({ searchTitle, search, favorite, onPlus, addWish }) {



    return (
        <div>
            <div className="container">
                <div className="fav">
                    <h2 className="fav__title top-block__title">
                    Мои закладки
                    </h2>
                    <div className="fav__body">
                    <div className="products__row">
                        { 
                        favorite.length > 0 ?
                                favorite.map((favorite) =>
                                    <ProductItems 
                                    onPlus={onPlus} 
                                    title={favorite.title}
                                    price={favorite.price} 
                                    link={favorite.link}
                                    id={favorite.id}  
                                    key={favorite.id}
                                    onWish= {(obj) => addWish(obj)}
                                    favorited={true}
                                    />
                                )
                            :    
                            <Nathing
                            img={img}
                            title="Закладок нет :("
                            text="Вы ничего не добавляли в закладки"
                            onClose={'/'}
                            
                            />
                        }
                        

                </div>   
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Favorit;