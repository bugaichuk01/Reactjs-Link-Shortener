import {createSlice} from '@reduxjs/toolkit'
import {ILink} from "../../types/ILink";
import {getLinks, getShorterLink} from "../actionCreators/links";

interface LinksState {
    link: string;
    links: ILink[];
    limited: ILink[]
}

const initialState: LinksState = {
    link: '',
    links: [],
    limited: [],
}

const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getLinks.fulfilled, (state, action) => {
            action.payload.length <= 10 ? state.limited = action.payload : state.links = action.payload;
        })
        builder.addCase(getShorterLink.fulfilled, (state, action) => {
            state.link = `${process.env.REACT_APP_URL}/s/${action.payload}`;
        })
    },
})

export default linksSlice.reducer