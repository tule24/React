import { configureStore } from "@reduxjs/toolkit";
import TodolistSlice from "./Todolist/redux/TodolistSlice";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./Todolist/saga/rootSaga";

const middleWareSaga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        Todolist: TodolistSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWareSaga),
});

middleWareSaga.run(rootSaga);