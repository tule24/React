import { configureStore } from "@reduxjs/toolkit";
import XucXacSlice from "./XucXac/XucXacRedux/XucXacSlice";

export const store = configureStore({
    reducer: {
        xucxac: XucXacSlice
    },
})