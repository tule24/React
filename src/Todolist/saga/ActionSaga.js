import { call, put, takeLatest } from 'redux-saga/effects'
import { STATUS_CODE } from '../redux/TodolistConst'
import { getTaskList } from '../redux/TodolistSlice'
import { todolistService } from './services/SagaServices'
// redux 2 loại action:
//loại 1: action => obj (thường)
//loại 2: action => func (thường dùng để xử lý api hoặc gọi các action khác)

function* getTaskApi() {
    // yield take('getTaskApiAction') // theo dõi action => xem action nào dispatch mới làm các công việc bên dưới
    try {
        let { data, status } = yield call(todolistService.getTaskListApi)
        // Sau khi lấy giá trị thành công dùng put (giống dispatch bên thunk) để đảy action lên redux
        status === STATUS_CODE.SUCCESS ? yield put(getTaskList(data)) : console.log(status);
    } catch (err) {
        console.log(err);
    }
}

export function* theoDoiActionGetTaskApi() {
    yield takeLatest('getTaskApiAction', getTaskApi)
}

function* addTaskApi(action){
    try{
        let {status} = yield call(() => {return todolistService.addTaskListApi(action.task)});
        status === STATUS_CODE.SUCCESS ? yield put({type: 'getTaskApiAction'}) : console.log(status);
    } catch(err){
        console.log(err);
    }
}
export function* theoDoiActionAddTaskApi() {
    yield takeLatest('addTaskApiAction', addTaskApi)
}

function* delTaskApi(action){
    try{
        let {status} = yield call(() => {return todolistService.deleteTaskListApi(action.taskName)});
        status === STATUS_CODE.SUCCESS ? yield put({type: 'getTaskApiAction'}) : console.log(status);
    } catch(err){
        console.log(err);
    }
}
export function* theoDoiActionDelTaskApi() {
    yield takeLatest('delTaskApiAction', delTaskApi)
}

function* doneTaskApi(action){
    try{
        let {status} = yield call(() => {return todolistService.doneTaskListApi(action.taskName)});
        status === STATUS_CODE.SUCCESS ? yield put({type: 'getTaskApiAction'}) : console.log(status);
    } catch(err){
        console.log(err);
    }
}
export function* theoDoiActionDoneTaskApi() {
    yield takeLatest('doneTaskApiAction', doneTaskApi)
}

function* rejectTaskApi(action){
    try{
        let {status} = yield call(() => {return todolistService.rejectTaskListApi(action.taskName)});
        status === STATUS_CODE.SUCCESS ? yield put({type: 'getTaskApiAction'}) : console.log(status);
    } catch(err){
        console.log(err);
    }
}
export function* theoDoiActionRejectTaskApi() {
    yield takeLatest('rejectTaskApiAction', rejectTaskApi)
}