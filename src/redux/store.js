import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const { reducers } = require("./reducers");

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const isBrowser = typeof window !== "undefined"
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        isBrowser && localStorage.setItem("reduxStore", JSON.stringify(getState()))
        return result;
    };
};

const reHydrateStore = () => {
    const data = isBrowser ? localStorage.getItem("reduxStore") : null;
    if (data) {
        return JSON.parse(data);
    }
    return undefined;
};

const reduxStore = createStore(reducers, reHydrateStore(), applyMiddleware( logger, localStorageMiddleware)

    ,
    // typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// reduxStore.subscribe(() => {
//     console.log("reduxStore", reduxStore.getState())
//     localStorage.setItem("reduxStore", JSON.stringify(reduxStore.getState()))
// })

export default reduxStore