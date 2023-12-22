import { createAsyncThunk } from "@reduxjs/toolkit";
import blogApi from "../API/BlogApi";

// To create new Blog
export const createBlog = createAsyncThunk("blogs/create", async (blog) => {
    console.log("payLoad data:", blog);
    const res = await blogApi.create(blog);
    return res.data;
})

// To read All Stored Blogs
export const retrieveBlogs = createAsyncThunk("blogs/retrieve", async () => {
    const res = await blogApi.getAll();
    return res.data;
})

// To delete a Blog
export const deleteBlog = createAsyncThunk("blogs/delete", async ({id}) => {
    await blogApi.delete(id);
    return {id};
})

// To update a Blog
export const updateBlog = createAsyncThunk("blogs/update", async ({blog, id}) => {
    const res = await blogApi.update(id, blog);
    return res.data;
})