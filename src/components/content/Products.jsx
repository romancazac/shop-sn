import React from "react"
import ProductItems from "./ProductItems";

function Products({ products, onPlus, search, onWish,isLoading }) {


function renderItems(){
    const filterItems = products.filter((products) => products.title.toLowerCase().includes(search.toLowerCase()));
    
    
    return( (isLoading ? [...Array(10)] : filterItems).map((item,id) =>
    
            <ProductItems
                onPlus={onPlus}
                {...item}
                onWish={onWish}
                key={id}
                loading={isLoading}
            />
        
        ))
    };


    return (
        <div className="products">
            <div className="container">
                <div className="products__row">
                  { renderItems() }
            </div>
        </div>

        </div >
    );
}
export default Products;