import { combineReducers, createStore } from "redux";
import { categoryReducer } from "../reducers/reducer";


const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer
    }));

    return store;
}

export default configureStore;