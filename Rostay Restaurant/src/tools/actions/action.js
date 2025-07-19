export const addCategory = ({id, categoryName}) => ({
    type: "Create_category",
    category: {
        id: crypto.randomUUID(),
        categoryName
    }
})

export const deleteCategory = (id) => ({
    type: 'Delete_category',
    id
})

export const editCategory = ({id, editData}) => ({
    type: 'Edit_category',
    id,
    editData
})