import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../utils/axios"

export const registerUser = createAsyncThunk( 
    "user/registerUser",
    async (body, thunkAPI) => {
        try { 
            const response = await axiosInstance.post(
                `/users/register`,
                body
            )
            console.log('리스폰스데이터: ' + response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message || error.response.data);
        }
    }
)

export const loginUser = createAsyncThunk( 
    "user/loginUser",
    async (body, thunkAPI) => {
        try { 
            const response = await axiosInstance.post(
                `/users/login`,
                body
            )
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message || error.response.data);
        }
    }
)

export const authUser = createAsyncThunk( 
    "user/authUser",
    async (_, thunkAPI) => {
        try { 
            const response = await axiosInstance.get(
                `/users/auth`
            )
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message || error.response.data);
        }
    }
)

export const logoutUser = createAsyncThunk( 
    "user/logoutUser",
    async (_, thunkAPI) => {
        try { 
            const response = await axiosInstance.post(
                `/users/logout`
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message || error.response.data);
        }
    }
)