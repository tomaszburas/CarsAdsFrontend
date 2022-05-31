import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    searchValue: string;
}

interface SetSearchValue {
    payload: string;
}

const initialState: SearchState = {
    searchValue: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action: SetSearchValue) => {
            state.searchValue = action.payload;
        },
    }
})

export const {setSearchValue} = searchSlice.actions;
