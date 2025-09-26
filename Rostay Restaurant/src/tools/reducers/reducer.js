// const initialCategoryState = [];

export const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'Get_category':
            return action.categories;
        default:
            return state;
    }
}

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'Get_product':
            return action.products;

        default:
            return state;
    }
}

export const blogReducer = (state = [], action) => {
    switch (action.type) {
        case 'Get_blog':
            return action.blogs;
        default:
            return state;
    }
}