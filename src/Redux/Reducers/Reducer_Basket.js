import { createSlice } from "@reduxjs/toolkit";
const Basket = createSlice({
    name: 'Basket',
    initialState:{
       Massiv: [],
       Register_Massiv_Prerson: [],
    },
    reducers:{   
        Push_pass_users: (state,action) => {     
            state.Register_Massiv_Prerson.push(action.payload)    
        },
        Createitem_inBasket: (state, action,  ) => { 
            const item_buy = false
            state.Massiv.forEach((el) =>{             
             if(el.id === action.payload.id){
                item_buy = true
             }
            }) 
            if(!item_buy){  
                return {...state, Massiv: [...state.Massiv, action.payload]}
            }
    
        },
        Decrement_item_count: (state, action) => {
          state.Massiv = state.Massiv.map((item) => {
            if(item.id === action.payload){
                if(item.count <1   ){
                    return{
                        ...item,
                        count: 0    
                    }
                }
                return{                   
                    ...item,
                    count: --item.count
                }
            }
            return item
          })
        },
        Increment_item_count: (state, action) => {
            state.Massiv = state.Massiv.map((item) => {
                if(item.id === action.payload){
                    
                    return{
                        ...item,
                        count: ++item.count
                    }
                }
                  return item
              })
        },
        Delete_item: (state, action ) => { 
         state.Massiv = state.Massiv.filter((el) =>{return action.payload!==el.id })
        },
        
    }
    
})
export default Basket.reducer
export const { Createitem_inBasket,Item_Massiv_Basket,Basket_open, Decrement_item_count, Delete_item,Increment_item_count,Checkout, Register_Massiv_Prerson,Push_pass_users } = Basket.actions   