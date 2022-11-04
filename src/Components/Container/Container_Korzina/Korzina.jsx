import React, { useState } from 'react'
import './Korzina.scss'
import {useSelector, useDispatch} from "react-redux"
import { Decrement_item_count,Increment_item_count, Delete_item,Push_pass_users  } from '../../../Redux/Reducers/Reducer_Basket'
import { NavLink } from 'react-router-dom'
export let Korzina = () => {
const dispatch = useDispatch()
let {Massiv} = useSelector(store => store.Basket)
let Massive_object = () => { 
  return(
    Massiv.map(el => <ul key={el.id}>
     <div className="el_prices">{el.price}</div>
      <img src={'https://' + el.img }></img>
      <div className='Item_count'>{el.count}</div>
     <button onClick={() => dispatch(Decrement_item_count(el.id))}>-</button>
       <button onClick={() => dispatch(Increment_item_count(el.id))}>+</button>
     <button onClick={() => dispatch(Delete_item(el.id))}>delete</button>
     <button className='Btn_checkout' onClick={() => setModalActive(true)}>Checkout</button> 
     </ul> 
    )
  )
} 

const Return_undefined =  () => {
  return <div className="Return_undefined"> <img src='https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg'></img> <div className="return_text"><h4> You not have item</h4></div></div> 
}

const [modalActive, setModalActive] = useState(false)
let Modales = ({active,setActive}) => {
  return(
   <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
   <div className='modal__content' onClick={e => e.stopPropagation()}>
    <div className="text_div"><h4>Enter your details</h4></div>
   <button className='btn_Back'
    onClick={() => setActive(false)}>Back</button>
   <NavLink to='/login'> <button className='btn_register'>
    Register</button></NavLink>
   </div>
   </div>
  )
}

   return(
   <div className='Korzina_items'> 
 {Massiv.length > 0 ? Massive_object() : Return_undefined()  }
 <Modales active={modalActive}  setActive={setModalActive}/>
 </div>
   );
}
