import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskListTodo: [],
    taskListComplete: []
}

export const TodolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        getTaskList: (state, action) => {
            state.taskListTodo = [];
            state.taskListComplete = [];
            action.payload.forEach((item) => {
                item.status ? state.taskListComplete.push(item) : state.taskListTodo.push(item);
            })
        }
    }
})

const { actions, reducer } = TodolistSlice;
export const { getTaskList } = actions;
export default reducer;