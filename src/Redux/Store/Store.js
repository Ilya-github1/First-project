import { configureStore } from "@reduxjs/toolkit";
import Tovar from "../Reducers/Reducer_Tovar";
import Basket from "../Reducers/Reducer_Basket";
const store = configureStore({
    reducer:{
    Tovar,
    Basket,
    }
})
export default store;