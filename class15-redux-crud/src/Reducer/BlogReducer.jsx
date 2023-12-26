import { createSlice } from "@reduxjs/toolkit"
import { createBlog, deleteBlog, retrieveBlogs, updateBlog } from "../Action/BlogAction"

// Initialize the State
const initialState = []


// Reducer Slices
const blogSlice = createSlice(
   {
    name: "blog",
    initialState,
    // extraReducers : () => {
    //     [createBlog.fulfilled] : (state, action) => {
    //         console.log("Reducer payload =", action.payload);
    //         state.push(action.payload)
    //     },

    //     [retrieveBlogs.fulfilled]: (state, action) => {
    //         return [...action.payload]
    //     },

    //     [deleteBlog.fulfilled] : (state, action) => {
    //         let index = state.findIndex(({id}) => id === action.payload.id)
    //         state.splice(index,1)
    //     },

    //     [updateBlog.fulfilled] : (state, action) => {
    //         const index = state.findIndex(blog => blog.id === action.payload.id)
    //         state[index] = {
    //             ...state[index],
    //             ...action.payload  // Merge old and new data
    //         }
    //    }

    
    extraReducer :(builder) => {
        builder.addCase(createBlog.fulfilled, (state,action) => {
           console.log('reducer payload =', action.payload);
           state.push(action.payload)
        });

        builder.addCase(retrieveBlogs.fulfilled, (state,action) => {
            return [...action.payload]
         });

         builder.addCase(deleteBlog.fulfilled, (state,action) => {
            let index = state.findIndex(({id}) => id === action.payload.id)
             state.splice(index,1)
         });

         builder.addCase(updateBlog.fulfilled, (state,action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
                   state[index] = {
                      ...state[index],
                        ...action.payload  // Merge old and new data
                    }            
         });
     }
});
const {reducer} = blogSlice;

// default export
export default reducer;
