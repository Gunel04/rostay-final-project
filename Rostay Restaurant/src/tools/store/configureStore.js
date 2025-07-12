import { createStore } from "redux";
import { categoryReducer } from "../reducers/reducer";


const configureStore = () => {
    const store = createStore(categoryReducer);

    return store;
}

export default configureStore;