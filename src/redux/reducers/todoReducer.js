import { actionTypes } from "../contants/action-types";


const inititalState = {
    tasks: []
}

export const todoReducer = (state = inititalState, action) => {
    console.log('state', state,action)

    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks?.length ? state.tasks.filter(task => task.id !== action.payload.id) : [],
            }
        case actionTypes.RESET:
            return {
                ...state,
                tasks: [],
            }
        default:
            return state
    }
}