import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {ILink} from "../../types/ILink";

interface Credentials {
    accessToken: string | null;
    offset?: string;
    limit?: string | null;
    link?: string;
    order?: string
}

export const getLinks = createAsyncThunk(
    'links/get',
    async ({offset = '0', limit = '0', order = '', accessToken}: Credentials) => {

        const response = await axios.get(
            `${process.env.REACT_APP_URL}/statistics?offset=${offset}&limit=${limit}${order}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        const data: ILink[] = response.data
        return data
    }
)

export const getShorterLink = createAsyncThunk(
    'links/getShorter',
    async (credentials: Credentials) => {

        const response = await axios.post(`${process.env.REACT_APP_URL}/squeeze?link=${credentials.link}`, {}, {
            headers: {
                Authorization: `Bearer ${credentials.accessToken}`
            }
        })

        return response.data.short

    }
)
