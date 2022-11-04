import React from 'react'
import './User_Register.scss'
import { useState } from 'react'
import { FcDown } from "react-icons/fc";
import { useDispatch,} from 'react-redux'
import { Push_pass_users } from '../../Redux/Reducers/Reducer_Basket'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
export const User_Register = () => {
const dispatch = useDispatch();  
let [Email, setEmail] = useState(''); 
let [Name, setName] = useState(''); 
let [lastName, setlastName] = useState('');

let [emailDirty, setemailDirty] = useState(false); 
let [nameDirty, setnameDirty] = useState(false); 
let [lastNamedirty, setlastNamedirty] = useState(false);

let [EmailEror, setEmailEror] = useState('enter email'); 
let [nameError, setnameError] = useState('Invalid name'); 
let [lastNameerror, setlastNameerror] = useState('Invalid last name');
const lastNameHandler = (e) => {
  setlastName(e.target.value)
 
  if(e.target.value.length < 3){
    setlastNameerror('Invalid lastname')
  }else{
    setlastNameerror('')
  }
}
const blur  = (e) => {
  switch (e.target.name){
    case 'Email':
    setemailDirty(true)
    break
    case 'Name':
      setnameDirty(true)
    break
    case 'lastName':
      setlastNamedirty(true)
    break
  }
}
const emailHandler = (e) => {
  setEmail(e.target.value)
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ 
  if(!re.test(String(e.target.value).toLowerCase())){
    setEmailEror('Incorrect email') 
  }else{
    setEmailEror('')
  }
}
const nameHandler = (e) => {
setName(e.target.value)
if(e.target.value.length < 3 || e.target.value.length > 10 ){
  setnameError('Invalid name')
}else {
  setnameError('')
}

}
const [Formvalid, setFormvalid] = useState(false)
useEffect(() => {
if(EmailEror || nameError || lastNameerror ){
  setFormvalid(false)
}else{
  setFormvalid(true)
}
}, [EmailEror,nameError,lastNameerror])
return ( 
    <div className='User_Register'>
      <NavLink to="/Login_on"><button  className='btn_User_register' disabled={!Formvalid  }
onClick={() => dispatch(Push_pass_users({
Name: Name,
lastname: lastName,
email: Email,
}))}>Send</button></NavLink>
 <FcDown className='true'/> 
 <form class='form'>
 {(nameDirty && nameError) && <div className='div2' style={{color: 'red'}}>{nameError} </div>}
   <input  onBlur={e => blur(e)}  name='Name' maxLength={15} placeholder='Your nane' value={Name} onChange={e => nameHandler(e)} required></input>
   {(lastNamedirty && lastNameerror) && <div className='div'  style={{color: 'red'}}>{lastNameerror} </div>}
   <input onBlur={e => blur(e)} name='lastName' maxLength={15} placeholder='Your lastName'  value={lastName} onChange={e => lastNameHandler(e)}></input>
   {(emailDirty && EmailEror) &&  <div className='div1' style={{color: 'red'}}>{EmailEror} </div>}
   <input onBlur={e => blur(e)} name='Email' maxLength={25} placeholder='Your email'  value={Email} onChange={e => emailHandler(e)} ></input>  
   </form>
   </div>               
  )
}
