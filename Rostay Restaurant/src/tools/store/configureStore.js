import { combineReducers, createStore } from "redux";
import { categoryReducer, productReducer } from "../reducers/reducer";


const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer,
        product: productReducer
    }));

    return store;
}

export default configureStore;