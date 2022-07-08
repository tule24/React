import { configureStore } from "@reduxjs/toolkit";
import BurgerSlice from './Burger/BurgerRedux/BurgerSlice'

export const store = configureStore({
    reducer: {
        burger: BurgerSlice,
    },
})