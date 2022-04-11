import React,{useState,useEffect} from 'react';
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





  useEffect(() => {
      axios.get('https://snikers-6e7e4-default-rtdb.europe-west1.firebasedatabase.app/db.json')
      .then((res) =>{
        setProducts(res.data)
      });
      axios.get('https://625406a519bc53e234775c39.mockapi.io/cart')
      .then((res)=>{
        setCartProducts(res.data)
      });
      axios.get('https://625406a519bc53e234775c39.mockapi.io/favorite')
      .then((res) => {
        setFavorite(res.data)
      })
  }, []);
  const deleteProducts = (id) => {
    axios.delete(`https://625406a519bc53e234775c39.mockapi.io/cart/${id}`);
    setCartProducts((prev) => prev.filter(item => item.id !== id));
    

    
  }
  const addProduct = (obj) => {
    axios.post('https://625406a519bc53e234775c39.mockapi.io/cart', obj);
    setCartProducts(prev => [...prev, obj ])
  };
  const addWish = async (obj) => {
    try{  
      console.log(obj)
  
    
      if(favorite.find((favObj) => Number(favObj.id) === Number(obj.id))){
  
        axios.delete(`https://625406a519bc53e234775c39.mockapi.io/favorite/${obj.id}`);
        setFavorite(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const {data} = await axios.post('https://625406a519bc53e234775c39.mockapi.io/favorite',obj);
        setFavorite((prev) => [...prev, data])
      } 
    } catch (err) {
      console.log('err')

    }

  }
  const searchTitle = (e) =>{
    setSearch(e.target.value)
  }
  return (
    <div className="wrapper">
      
      <Header items={cartProducts} 
      onDelete={deleteProducts}
      />
        <Routes>
          <Route path="/" exact
            element={
              <Home 
              products= { products}
              search = { search}
              addProduct = {addProduct}
              searchTitle = {searchTitle}
              addWish= {addWish}
              />
            }
          />
          <Route
          path="favorit"
          element={
            <Favorit 
            favorite={favorite}
            onPlus={(obj => addProduct(obj))}
            addWish= {addWish}
            />
          }
          />
        </Routes>  
    </div> 
  );
}
export default Wrapper;
