import React from 'react'
import './Tovar.scss'
import {useSelector, useDispatch} from "react-redux"
import { Createitem_inBasket, } from '../../../Redux/Reducers/Reducer_Basket'
export const Tovar = () => {
    const dispatch = useDispatch()
    let {Card_Tovar, } = useSelector(store => store.Tovar)
    let ItemCard = Card_Tovar.map(el => <ul key={el.id}>
     <div className="el_price"><h3>{el.price}</h3></div>
    <div className="div_img"><img src={'https://' + el.img }></img></div>
    <button onClick={() => dispatch(Createitem_inBasket(el))}>buy item</button>   
    </ul>
    )
    
   
  return ( 
    <div className='Tovar'>  
        <div className="Item">
          {ItemCard } 
         </div>
        <div className="div">
        </div>       
    </div>
  ); 
}
