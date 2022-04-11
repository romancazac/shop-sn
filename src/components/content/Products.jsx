import React from "react"
import ProductItems from "./ProductItems";

function Products({products, onPlus,search,onWish }) {
 
    return(
        <div className="products">
            <div className="container">
                <div className="products__row">
                    {products
                    .filter((products) => products.title.includes(search.toLowerCase()))
                    
                    .map((products) =>
                        <ProductItems 
                        onPlus={onPlus} 
                        title={products.title}
                        price={products.price} 
                        link={products.link}
                        id={products.id}  
                        key={products.id}
                        onWish = {onWish}
                        />
                    )
                    }
                </div>
            </div>

        </div>
    )
}
export default Products;