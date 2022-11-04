import React from 'react'
import { useSelector } from 'react-redux'
import { HiArrowSmDown,HiAnnotation } from "react-icons/hi";
import './Error.scss'

export const Register = () => {
  const Data = () => {
    return <div className="Your_data"><h2>No data</h2></div>
  }
  let {Register_Massiv_Prerson} = useSelector(store => store.Basket)
  let User_pass = Register_Massiv_Prerson.map(el =>
  <div className='elements'>
  <h2> <div className='elements_1'>Your Name <br/><HiArrowSmDown/><br/> {el.Name} </div>
  <div className="elements_2">Your Lastname <br/><HiArrowSmDown/><br/>{el.lastname}</div>   
  <div className='elements_3'>Your email   <br/><HiArrowSmDown/><br/>{el.email} </div></h2>
  </div> 
  ) 
  const letter = () => {
    return<div className="letter"><h2>Wait for the letter <HiAnnotation/></h2></div>
    }
  return ( 
    <div className='element'>
     {Register_Massiv_Prerson.length < 1 ? Data() : false}
     {Register_Massiv_Prerson.length > 0 ? letter() : false}
      {User_pass}
      </div>
 ) 
}
