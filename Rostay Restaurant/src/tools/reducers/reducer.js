// const initialCategoryState = [];

export const categoryReducer = (state = null, action) => {
    switch (action.type) {
        case 'Get_category':
            return action.categories;
        default:
            return state;
    }
}

export const productReducer = (state = null, action) => {
    switch (action.type) {
        case 'Get_product':
            return action.products;

        default:
            return state;
    }
}

export const blogReducer = (state = null, action) => {
    switch (action.type) {
        case 'Get_blog':
            return action.blogs;
        default:
            return state;
    }
}