// const initialCategoryState = [];

export const categoryReducer = (state = null, action) => {
    switch (action.type) {
        case 'Get_category':
            return action.categories;
        // case 'Delete_category':
        //     return state.filter(p => p.id !== action.id);
        // case 'Edit_category':
        //     return state.map(item => {
        //         if (item.id === action.id) {
        //             return { ...item, ...action.editData }
        //         }
        //         else {
        //             return item;
        //         }
        //     })
        default:
            return state;
    }
}

export const productReducer = (state = null, action)=> {
    switch (action.type) {
        case 'Get_product':
            return action.products;
        
        default:
            return state;
    }
}