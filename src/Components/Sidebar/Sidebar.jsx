import React from 'react'
import './Sidebar.scss'
import { AiFillHome, AiOutlineShoppingCart, AiFillSetting,} from "react-icons/ai";
import { BsShop,BsFillMoonFill,BsMoon} from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
export const Sidebar = () => {
 const [theme,setTheme] = useState('theme1')
const dispatch = useDispatch()
const Newtheme = () => {
  setTheme(theme === 'theme1' ? 'theme2' : 'theme1' )
}
useEffect(() => {
  const  button_bg_color = `var(--button-bg-color-${theme})`
  const background_color2 = `var(--background-color2-${theme})`
  const backgroundColor = `var(--background-color-${theme})`
  const fontColor = `var(--font-color-${theme})`
  const fontColors = `var(--font-colors-${theme})`
  
  document.body.style.setProperty('--button-bg', button_bg_color)
  document.body.style.setProperty('--font-colors', fontColors)
  document.body.style.setProperty('--font-color', fontColor)
  document.body.style.setProperty('--background-color', backgroundColor)
  document.body.style.setProperty('--background-color2', background_color2)
}, [theme])


  return (
  <div className="Sidebar">
    <div className="items"> 
   
   <h3> <div className="Home">
   <NavLink to='/Home'>
   <AiFillHome className='icon_home'/> 
       Home</NavLink>    
    </div>
    <div className="Items"> <NavLink to='/items'>
    <AiOutlineShoppingCart className='icon_korzina'/>
      Items</NavLink>
    </div>
    <div className="Settings"> <NavLink to='/Login_on'>
    <AiFillSetting className='icon_settings'/>
    Your data </NavLink>  
    </div>
    <div className="Store"><NavLink to='/Store'><BsShop className='icon_shop'/> 
      Shop
      </NavLink> 
    
     <div className="theme-btn"><button className="theme-btnw" onClick={() => dispatch(Newtheme())}>{theme === 'theme1' ? <BsFillMoonFill className='No-moon'/> : <BsMoon className='Moon' />}</button></div>
    </div>
    </h3>
    </div>
    </div>
  )
}
