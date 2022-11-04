import { createSlice } from "@reduxjs/toolkit";
const Tovar = createSlice({
    name: 'Tovar',
    initialState:{
     Card_Tovar:[
        {
           id: 1,
           count: 1,
           img: 'kyzylorda.imperiacvetov.kz/image/cache/catalog/2016/01/mushkie%20buketi/9d31319b-c9ee-4825-8b44-f7c185d2de00-1000x1000.jpg',          
           price: 31 + 'euro',
           totalprice: 31 + 'euro',     
        },
        {
            id: 2,
            count: 1,
            img: 'avatars.mds.yandex.net/get-altay/6950449/2a000001831834da9a86c4f2813588ee4c91/XXL',          
            price: 40 + 'euro', 
            totalprice: 40 + 'euro',      
         },
         {
            id: 3,
            count: 1,
            img: 'utv.ru/media/screen_image/ok.jpg',                   
            price: 55 + 'euro',
            totalprice: 55 + 'euro',        
         },
         {
            id: 4,
            count: 1,
            img: 'cdn1.ozone.ru/s3/multimedia-p/c1000/6230977357.jpg',       
            price: 28 + 'euro',
            totalprice: 28 + 'euro',        
         },
         {
            id: 5,
            count: 1,
            img: 'klike.net/uploads/posts/2022-08/1660027177_7.jpg',           
            price: 23 + 'euro',
            totalprice: 23 + 'euro',         
         },
         {
            id: 6,
            count: 1,
            img: 'www.nezabudka34.ru/image/cache/catalog/101021/IMG-20211003-WA0039-1000x1000.jpeg',      
            price: 29 + 'euro',
            totalprice: 29 + 'euro',         
         },
         {
            id: 7,
            count: 1,
            img: 'content3.flowwow-images.com/data/flowers/1000x1000/05/1620145274_7777305.jpg',      
            price: 36 + 'euro',
            totalprice: 36 + 'euro',         
         },
         {
            id: 8,
            count: 1,
            img: 'myflowers365.ru/image/cache/catalog/d776650a13bad77_orig-500x500-1000x1000.jpg',      
            price: 10 + 'euro',
            totalprice: 10 + 'euro',         
         },
         {
            id: 9,
            count: 1,
            img: 'цветок-краснодар.рф/wp-content/uploads/2017/02/34882-1000x1000.jpg',      
            price: 15 + 'euro', 
            totalprice: 15 + 'euro',        
         },
         {
            id: 10,
            count: 1,
            img: 'www.max-gift.ru/wp-content/uploads/IMG_6411.jpg',      
            price: 12 + 'euro',
            totalprice: 12 + 'euro',         
         },
         {
            id: 11 ,
            count: 1,
            img: 'content2.flowwow-images.com/data/flowers/1000x1000/89/1634846575_99773789.jpg',      
            price: 54 + 'euro',
            totalprice: 54 + 'euro',         
         },
         {
            id: 12,
            count: 1,
            img: 'm.berdsk-online.ru/sites/default/files/styles/big1000/public/news/2021-02/image0_0.jpeg',      
            price: 32 + 'euro',        
            totalprice: 32 + 'euro', 
         }
     ],
    },
    
    reducers:{
    
    }  
})

export default Tovar.reducer
export const {} = Tovar.actions