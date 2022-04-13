import React, { useState, useEffect } from 'react';
import WrapperContext from './context';
import {
  Route,
  Routes,
} from "react-router-dom";
import './style.scss';
import Header from './components/header/Header';
import axios from 'axios';
import Home from './pages/Home';
import Favorit from './pages/Favorit';
function Wrapper() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])
  const [favorite, setFavorite] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)




  useEffect(() => {

    async function fetchData() {
      const cartResponse = await axios.get('https://625406a519bc53e234775c39.mockapi.io/cart');
      const favoriteResponse = await axios.get('https://625406a519bc53e234775c39.mockapi.io/favorite');
      const porductsResponse = await axios.get('https://snikers-6e7e4-default-rtdb.europe-west1.firebasedatabase.app/db.json');
      setIsLoading(false)

      setCartProducts(cartResponse.data)
      setFavorite(favoriteResponse.data)
      setProducts(porductsResponse.data)

    }
    fetchData();
  }, []);
  const deleteProducts = (id) => {
    axios.delete(`https://625406a519bc53e234775c39.mockapi.io/cart/${id}`);
    setCartProducts((prev) => prev.filter((item) =>Number (item.id) !== Number(id)));



  }
  const addProduct = async (obj) => {

    try {

      if (cartProducts.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
       await  axios.delete(`https://625406a519bc53e234775c39.mockapi.io/cart/${obj.id}`)
        setCartProducts(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://625406a519bc53e234775c39.mockapi.io/cart', obj);
        setCartProducts(prev => [...prev, data])

      }
    } catch (err) {
      console.log("err")
    }


  };
  const addWish = async (obj) => {
    try {
      console.log(obj)
      if (favorite.find((favObj) => Number(favObj.id) === Number(obj.id))) {

        axios.delete(`https://625406a519bc53e234775c39.mockapi.io/favorite/${obj.id}`);
        setFavorite(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://625406a519bc53e234775c39.mockapi.io/favorite', obj);
        setFavorite((prev) => [...prev, data])
      }
    } catch (err) {
      console.log('err')

    }

  }
  
  const searchTitle = (e) => {
    setSearch(e.target.value)
  }
  const isAdded = (id) => {
    return cartProducts.some((obj) => Number(obj.id) === Number(id))
  }
  return (

    <WrapperContext.Provider value={{favorite, addWish, cartProducts, addProduct,isAdded,setCartProducts,deleteProducts}}>
      <div className="wrapper">

        <Header items={cartProducts}
          onDelete={deleteProducts}
        />
        <Routes>
          <Route path="/" exact
            element={
              <Home
                products={products}
                search={search}
                addProduct={addProduct}
                searchTitle={searchTitle}
                addWish={addWish}
                items={cartProducts}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="favorit"
            element={
              <Favorit

              />
            }
          />
        </Routes>
      </div>

    </WrapperContext.Provider>

  );
}
export default Wrapper;
