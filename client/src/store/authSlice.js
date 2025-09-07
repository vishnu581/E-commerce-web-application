import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { create } from "domain"


const initialState = {
    isAuthenticated : false ,
    isLoading : false,
    user : null
}

export const registerUser = createAsyncThunk('/auth/register',

    async(FormData)=>{
        const response = await axios.post('http://localhost:5000/api/auth/register',FormData,{
            withCredentials :true
        })
        return response.data
    }
)



const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state, action)=>{

        }
    },
    extraReducers : (builder)=>{
        builder,addCase(registerUser.pending ,(state)=>{

            state.isLoading = true

        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading =false
            state.user = action.payload
        })
    }
})

export const {setUser}= authSlice.actions
export default authSlice.reducer
