const initialCategoryState = [];

export const categoryReducer = (state = initialCategoryState, action) => {
    switch (action.type) {
        case 'Create_category':
            return [...state, action.category];
        case 'Delete_category':
            return state.filter(p => p.id !== action.id);
        case 'Edit_category':
            return state.map(item=>{
                if(item.id === action.id) {
                    return {...item, ...action.editData}
                }
                else {
                    return item
                }
            })
        default:
            return state;
    }
}