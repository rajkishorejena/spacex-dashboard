import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserInfo{
    name:string,
    isAuthenticate:boolean,
};

const UserInfo:UserInfo = {
    isAuthenticate:true,
    name:"Rajkishore"
}

export  const UserInfoSlice  = createSlice({
    name:"userInfo",
    initialState:UserInfo,
    reducers:{
       updateAuthState:(state,action:PayloadAction<boolean>)=>{
            state.isAuthenticate = action.payload
       }
    }
});

export const {updateAuthState } = UserInfoSlice.actions;
export default UserInfoSlice;