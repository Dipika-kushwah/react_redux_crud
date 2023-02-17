import {createSlice} from '@reduxjs/toolkit'
import { userData } from '../Api/Api'

export const userSlice=createSlice({
  name:'users',
  initialState:{value:[userData]},
  reducers:{
    addUser:(start,action )=>{

    }
  }
})
