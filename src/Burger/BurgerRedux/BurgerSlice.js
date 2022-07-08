import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burger:{
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu:[
        {name: 'salad', price: 10},
        {name: 'cheese', price: 20},
        {name: 'beef', price: 55}
    ],
    total: 85
}

const caculateTotal = (burger, menu) => {
    return menu.reduce((total, item) => {
        return total += item.price * burger[item.name];
    }, 0);
}
export const BurgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        updateBurger: (state, action) => {
            state.burger[action.payload.name] += action.payload.value;
            state.total = caculateTotal(state.burger, state.menu);
            
        },
    },
})
const {actions, reducer} = BurgerSlice;
export const {updateBurger} = actions;
export default reducer;