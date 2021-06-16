import { actionTypes } from "src/redux/contants/action-types";


export const addTask = (task) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: task
    }
}


export const removeTask = (task) => {
    return {
        type: actionTypes.REMOVE_TASK,
        payload: task.id
    }
}

