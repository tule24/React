import {all} from 'redux-saga/effects'
import * as ActionSaga from './ActionSaga'
export function *rootSaga(){
    yield all([
        ActionSaga.theoDoiActionGetTaskApi(),
        ActionSaga.theoDoiActionAddTaskApi(),
        ActionSaga.theoDoiActionDelTaskApi(),
        ActionSaga.theoDoiActionDoneTaskApi(),
        ActionSaga.theoDoiActionRejectTaskApi()
    ])
    
}