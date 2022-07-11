import axios from 'axios';
import { getTaskList } from './TodolistSlice';

export const getTaskListApi = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask');
            res.data && dispatch(getTaskList(res.data));
        } catch (err) {
            console.log(err)
        }
    }
}

export const addTaskApi = (task) => {
    return async dispatch => {
        try{
            await axios.post('http://svcy.myclass.vn/api/ToDoList/AddTask', task);
            dispatch(getTaskListApi());
        } catch(err){
            console.log(err);
        }
    }
}

export const delTaskApi = (taskName) => {
    return async dispatch => {
        // Xử lý trước khi dispatch
        try{
            await axios.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask/?taskName=${taskName}`);
            dispatch(getTaskListApi());
        } catch(err){
            console.log(err);
        }
    }
}

export const doneTaskApi = (taskName) => {
    return async dispatch => {
        // Xử lý trước khi dispatch
        try{
            await axios.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`);
            dispatch(getTaskListApi());
        } catch(err){
            console.log(err);
        }
    }
}

export const rejectTaskApi = (taskName) => {
    return async dispatch => {
        // Xử lý trước khi dispatch
        try{
            await axios.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`);
            dispatch(getTaskListApi());
        } catch(err){
            console.log(err);
        }
    }
}