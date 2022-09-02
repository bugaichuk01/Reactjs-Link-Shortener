import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

interface Credentials {
    username: string
    password: string
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials: Credentials) => {
        const response = await axios.post(`${process.env.REACT_APP_URL}/register?username=${credentials.username}&password=${credentials.password}`)
        const data: string = response.data
        return data
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: Credentials) => {

        return fetch(`${process.env.REACT_APP_URL}/login`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'username': credentials.username,
                'password': credentials.password
            })
        }).then((response) => response.json())
            .then(data => data)

    }
)