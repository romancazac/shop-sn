import React from 'react';
import TopBlock from '../components/content/TopBlock';
import Products from '../components/content/Products';
import Slider from '../components/content/Slider';
function Home({searchTitle,search,addProduct,products,addWish}) {
    return(
        <div>
        <Slider/>
        <TopBlock search={search} searchTitle={searchTitle}/>
        <Products 
        addProduct={addProduct} 
        products={products} 
        search={search} 
        onPlus={(obj => addProduct(obj))}
        onWish= {(obj) => addWish(obj)}
        />
        </div>
    )
} 

export default Home;