import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users/getData`);
    if (response) {
      console.log("response ", response);
      return response.data;
    }
  } catch (error) {}
});

export const getSinglePost = createAsyncThunk(
  "post/getSinglePost",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/login` + id
      );
      if (response) {
        return response.data;
      }
    } catch (error) {}
  }
);

export const createPost = createAsyncThunk("post/createPost", async (data, {dispatch}) => {
  try {
    const response = await axios.post(`http://localhost:8080/users/create` , data);
    if (response) {
      dispatch(getAllPosts())
      return response.data;
    }
  } catch (error) {}
});

export const deletePost = createAsyncThunk("post/deletePost", async (id, {dispatch}) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/users//deleteData/` + id
    );
    if (response) {
      dispatch(getAllPosts())
      return response.data;
    }
  } catch (error) {}
});

export const updatePost = createAsyncThunk("post/updatePost", async (id, {dispatch}) => {
  try {
    const response = await axios.put(`http://localhost:8080/users//editData/` + id);
    if (response) {
      dispatch(getAllPosts())
      return response.data;
    }
  } catch (error) {}
});
const postSlice = createSlice({
  name: "auth",
  initialState: {
    allPosts: [],
    singlepost: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllPosts.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(getAllPosts.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(getSinglePost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getSinglePost.fulfilled, (state, action) => {
      state.loading = false;
      state.singlepost = action.payload;
    })
    .addCase(getSinglePost.rejected, (state, action) => {
      state.loading = false;
    })

  },
});

export default postSlice.reducer;
