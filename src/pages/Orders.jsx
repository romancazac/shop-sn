import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import ProductItems from '../components/content/ProductItems'
import WrapperContext from '../context'
export default function Orders() {
    const{isLoading} = useContext(WrapperContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        async function feachData() {
            try {
                const { data } = await axios.get('https://625406a519bc53e234775c39.mockapi.io/order');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            } catch (error) {
                console.log('err')
            }
        }
        feachData()
    }, [])
  
    return (
        <div className='container'>
             <h1 className="top-block__title" style={{marginBottom:'25px'}}>Мои заказы</h1>
            <div className="products__row">
                {orders.length > 0
                    ?
                    (isLoading ? [...Array(5)] : orders).map((item, id) =>
                        <ProductItems
                            {...item}
                            key={id}
                            loading={isLoading}
                        />
                    )
                    :
                    "нет товаров"
                }
            </div>
        </div>
    )
}
