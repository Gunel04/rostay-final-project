const initialCategoryState = [];

export const categoryReducer = (state = initialCategoryState, action) => {
    switch (action.type) {
        case 'Create_category':
            return [...state, action.category];

        default:
            return state;
    }
}