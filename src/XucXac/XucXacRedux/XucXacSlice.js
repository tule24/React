import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    xucXac: [1,2,3],
    luaChonNguoiChoi: '',
    ketQua: [0, 0]  
}

export const XucXacSlice = createSlice({
    name: 'xucxac',
    initialState,
    reducers:{
        setLuaChon: (state, action) => {
            state.luaChonNguoiChoi = action.payload;
        },
        runGame: (state) => {
            state.xucXac = state.xucXac.map((item) => {
                return Math.floor(Math.random()*6) + 1;
            })
            state.ketQua[1]++;
            let total = state.xucXac.reduce((total, item) => {
                return total += item;
            },0)
            if((total%2 !== 0 && state.luaChonNguoiChoi) || (!state.luaChonNguoiChoi && total%2 === 0)){
                state.ketQua[0]++;
            }
        }
    }
})

const {actions, reducer} = XucXacSlice;
export const {setLuaChon, runGame} = actions;
export default reducer;