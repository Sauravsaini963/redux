import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const signIn = createAsyncThunk("auth/signIn", async (data) => {
  
    try {
        const response = await axios.post(`http://localhost:8080/users/login`, data);
        console.log("login respl", response);
        if(response.status==200){
          return response.data;
        }
        
    } catch (error) {
        
    }})

    export const signUp = createAsyncThunk("auth/signUp", async (data) => {
      console.log("dddd", data);
        try {
            const response = await axios.post(`http://localhost:8080/users/register`, data);
            console.log("response", response);
            if(response.status==200){
              return response.data;
            }
            
        } catch (error) {
            
        }})

// const [data, setdata]=usestate([])
const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    auth:[],
    loading: false,
  },
  extraReducers: builder =>{
    builder
    
    .addCase(signIn.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(signUp.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.auth = action.payload;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.loading = false;
    })
}
});

export default authSlice.reducer;