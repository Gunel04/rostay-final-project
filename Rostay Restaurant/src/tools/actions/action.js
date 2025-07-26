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

export const getProduct = (products) => ({
    type: 'Get_product',
    products
})

export const addProduct = async ({ image, title, description, price, category }) => {
    const { error } = await supabase
        .from('rostay-products')
        .insert({ image: image, title: title, description: description, price: price, category: category })
    if (error) {
        console.log(error);
    }
    else {
        console.log("Product added successfully!");
        window.location.assign('/dashboard/products')
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

export const deleteProduct = async (id) => {
    const response = await supabase
        .from('rostay-products')
        .delete()
        .eq('id', id)
    if (response) {
        console.log("Product deleted successfully");
        window.location.reload();
    }
    else {
        console.log("Product deletion failed");
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

export const editProduct = async (id, editedProduct) => {
    const { error } = await supabase
        .from('rostay-products')
        .update(editedProduct)
        .eq('id', id)
    if (error) {
        console.log(error);

    }
    else {
        console.log("Product edited successfully!");
        window.location.assign('/dashboard/products')

    }
}
