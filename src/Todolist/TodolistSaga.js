import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Todolist.css'
export default function TodolistSaga() {
    const listTodo = useSelector(state => state.Todolist.taskListTodo);
    const listComplete = useSelector(state => state.Todolist.taskListComplete);
    const dispatch = useDispatch();
    const [task, setTask] = useState({})
    // const fetchData = async() => {
    //     const data = await axios.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask')
    //     console.log(data);
    // }
    useEffect(() => {
        dispatch({type: 'getTaskApiAction'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddTask = (task) => {
        dispatch({type: 'addTaskApiAction', task: task})
    }

    const handleDeleteTask = async (taskName) => {
        dispatch({type: 'delTaskApiAction', taskName: taskName})
    }

    const handleDoneTask = async (taskName) => {
        dispatch({type: 'doneTaskApiAction', taskName: taskName})
    }

    const handleRejectTask = async (taskName) => {
        dispatch({type: 'rejectTaskApiAction', taskName: taskName})
    }

    return (
        <div>
            <div className="card">
                <div className="card__header">
                    <img src={require("./img/X2oObC4.png")} alt='img' />
                </div>
                <div className="card__body">
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input id="newTask" type="text" placeholder="Enter an activity..." onBlur={(event) => setTask({...task, taskName: event.target.value})}/>
                            <button id="addItem" onClick={() => handleAddTask(task)}>
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {listTodo.map((item, index) => {
                                    return <li key={index}>
                                        <span>{item.taskName}</span>
                                        <div className='buttons'>
                                            <button className='remove' onClick={() => handleDeleteTask(item.taskName)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                            <button className='complete' onClick={() => handleDoneTask(item.taskName)}>
                                                <i className="fa-solid fa-circle-check"></i>
                                            </button>
                                        </div>
                                    </li>
                                })}
                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                                {listComplete.map((item, index) => {
                                    return <li key={index}>
                                        <span>{item.taskName}</span>
                                        <div className='buttons'>
                                            <button className='remove' onClick={() => handleDeleteTask(item.taskName)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                            <button className='undo' onClick={() => {handleRejectTask(item.taskName)}}>
                                                <i className="fa-solid fa-rotate-left"></i>
                                            </button>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
