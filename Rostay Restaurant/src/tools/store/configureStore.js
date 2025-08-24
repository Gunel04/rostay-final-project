import { combineReducers, createStore } from "redux";
import { blogReducer, categoryReducer, productReducer } from "../reducers/reducer";


const configureStore = () => {
    const store = createStore(combineReducers({
        category: categoryReducer,
        product: productReducer,
        blog: blogReducer
    }));

    return store;
}

export default configureStore;