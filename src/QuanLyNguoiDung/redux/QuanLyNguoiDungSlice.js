import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listUser:[]
}

export const QuanLyNguoiDungSlice = createSlice({
    name: 'QuanLyNguoiDung',
    initialState,
    reducers:{
        addListUser: (state, action) => {
            action.payload = {...action.payload, id: state.listUser.length + 1}
            state.listUser.push(action.payload);
        },
        removeListUser: (state, action) => {
            state.listUser = state.listUser.filter((value) => {
                return value.id !== action.payload;
            })
        },
        updateListUser: (state, action) => {
            console.log('work');
            for (let i in state.listUser){
                if(state.listUser[i].id === action.payload.id){
                    state.listUser[i] = action.payload;
                    break;
                }
            }
        }
    }
})

const {actions, reducer} = QuanLyNguoiDungSlice;
export const {addListUser, removeListUser, updateListUser} = actions;
export default reducer;
