import axios from "axios"
import { DOMAIN } from "../../redux/TodolistConst.js"

const TodolistService = function() {
    this.getTaskListApi = () => {
        return axios.get(`${DOMAIN}/GetAllTask`)
    }
    this.addTaskListApi = (task) => {
        return axios.post('http://svcy.myclass.vn/api/ToDoList/AddTask', task);
    }
    this.deleteTaskListApi = (taskName) => {
        return axios.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask/?taskName=${taskName}`);
    }
    this.doneTaskListApi = (taskName) => {
        return axios.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`);
    }
    this.rejectTaskListApi = (taskName) => {
        return axios.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`);
    }
}

export const todolistService = new TodolistService();

