import { configureStore } from "@reduxjs/toolkit";
import QuanLyNguoiDungSlice from './QuanLyNguoiDung/redux/QuanLyNguoiDungSlice'

export const store = configureStore({
    reducer: {
        quanLyNguoiDung: QuanLyNguoiDungSlice
    },
})