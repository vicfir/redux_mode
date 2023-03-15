import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'mode',
    initialState: 'light-mode',
    reducers: {
        changeMode: (state, action)=>{
            const mode = action.payload;
            return (mode)
        }
    }
})

export const {changeMode} = homeSlice.actions;
export default homeSlice.reducer;