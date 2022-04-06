import React,{useState,useEffect} from 'react';
import './style.scss';
import Header from './components/header/Header';
import TopBlock from './components/content/TopBlock';
import Products from './components/content/Products';
import axios from 'axios';
function Wrapper() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])
  const [search, setSearch] = useState('')



  const deleteProducts = (id) => {
    setCartProducts((prev) => prev.filter(item => item.id !== id));
  }

  useEffect(() => {
      // fetch('https://snikers-6e7e4-default-rtdb.europe-west1.firebasedatabase.app/db.json')
      // .then((res) => {
      //     return res.json();
      // })
      // .then((json) =>{
      //     setProducts(json)
      // });

      axios.get('https://snikers-6e7e4-default-rtdb.europe-west1.firebasedatabase.app/db.json')
      .then((res) =>{
        setProducts(res.data)
      });
      // axios.get('https://snikers-6e7e4-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
      // .then((res)=>{
      //   setCartProducts(res.data)
      // });

  }, []);

  const addProduct = (obj) => {
   
     axios.post('https://snikers-6e7e4-default-rtdb.europe-west1.firebasedatabase.app/cart.json', obj);
    setCartProducts(prev => [...prev, obj ])
    //  setCartProducts((prev) => [...prev,obj])
    
  };
  const searchTitle = (e) =>{
    setSearch(e.target.value)
  }
  return (
    <div className="wrapper">
      
      <Header items={cartProducts} 
      onDelete={deleteProducts}
      
      />
      <TopBlock search={search} searchTitle={searchTitle}/>
      <Products 
      addProduct={addProduct} 
      products={products} 
      search={search} 
      onPlus={(obj => addProduct(obj))} 
      />
    </div>
  );
}

export default Wrapper;
