import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useState } from 'react';


export const Fetchapi = createAsyncThunk('product/fetchproduct', async ()=>{
   

  //  const Response = await fetch(`https://newsapi.org/v2/everything?q=Mumbai&from=2025-06-12&sortBy=publishedAt&apiKey=5e299a5edb98429eadc50c455098f613`)
  //   .then((Response)=>{
  //       if(!Response){
  //           throw new Error("Failed to fetch data");
  //       }
  //       return Response.json();
  //   })
  //   .then((data)=>{
  //          console.log(data);
  //          return data.articles;
  //   })
  // const date = new Date().getDate();
  // const Api_Key = '5e299a5edb98429eadc50c455098f613'

  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e299a5edb98429eadc50c455098f613`)
  if (!response) {
    throw new Error("Failed to fetch");
    
  }

  const data = await response.json();
  console.log(data);
  return data.articles;
})
const UserSlice = createSlice({
   name : 'product',
   initialState:{
      item : [],
      status : 'idle',
      error : null
   },
   reducers:{},
   extraReducers : (builder)=>{
      builder
      .addCase(Fetchapi.pending,(state)=>{
        state.status= 'loading'
      })
      .addCase(Fetchapi.fulfilled,(state,action)=>{
        state.status='succeeded'
        state.item = action.payload
      })
      .addCase(Fetchapi.rejected,(state,action)=>{
        state.status ='failed'
        state.error = action.error.message
      })
   }
})

export default UserSlice.reducer