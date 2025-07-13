export const addCategory = ({id, categoryName}) => ({
    type: "Create_category",
    category: {
        id: crypto.randomUUID(),
        categoryName
    }
})