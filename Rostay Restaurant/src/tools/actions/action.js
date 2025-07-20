import supabase from "../../utils/supabase";

export const getCategory = (categories) => ({
    type: "Get_category",
    categories
})


export const addCategory = async ({ id, categoryName }) => {
    // type: "Create_category",
    // category: {
    //     id: crypto.randomUUID(),
    //     categoryName
    // }
    const { error } = await supabase
        .from('rostay-category')
        .insert({ categoryName: categoryName })

    if (error) {
        console.log(error);
    }
    else {
        console.log('Success');
        window.location.assign('/dashboard/category');
    }
}


export const deleteCategory = async (id) => {
    // type: 'Delete_category',
    // id
    const response = await supabase
        .from('rostay-category')
        .delete()
        .eq('id', id)
    if (response) {
        console.log('Success');
        window.location.reload();
    }
    else {
        console.log('Failed');
    }
}

export const editCategory = async (id, editData) => {
    // type: 'Edit_category',
    // id,
    // editData
    const { error } = await supabase
        .from('rostay-category')
        .update(editData)
        .eq('id', id)
    if (error) {
        console.log(error);
    }
    else {
        console.log('Success');
        window.location.assign('/dashboard/category');

    }
}