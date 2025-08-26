import supabase from "../../utils/supabase";

export const getCategory = (categories) => ({
    type: "Get_category",
    categories
})

export const addCategory = async ({ categoryNameEn, categoryNameAz }) => {
    const { error } = await supabase
        .from('rostay-category')
        .insert({ categoryNameEn: categoryNameEn, categoryNameAz: categoryNameAz })

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

export const addProduct = async ({ image, titleEn, titleAz, descriptionEn, descriptionAz, price, categoryEn, categoryAz }) => {
    const { error } = await supabase
        .from('rostay-products')
        .insert({ image: image, titleEn: titleEn, titleAz: titleAz, descriptionEn: descriptionEn, descriptionAz: descriptionAz, price: price, categoryEn: categoryEn, categoryAz: categoryAz })
    if (error) {
        console.log(error);
    }
    else {
        console.log("Product added successfully!");
        window.location.assign('/dashboard/products')
    }
}


export const getBlog = (blogs) => ({
    type: 'Get_blog',
    blogs
})

export const addBlog = async ({ image, titleEn, titleAz, descriptionEn, descriptionAz, dateEn, dateAz }) => {
    const { error } = await supabase
        .from('rostay-blog')
        .insert({ image: image, titleEn: titleEn, titleAz: titleAz, descriptionEn: descriptionEn, descriptionAz: descriptionAz, dateEn: dateEn, dateAz: dateAz })
    if (error) {
        console.log(error);

    }
    else {
        console.log("Blog added successfully!");
        window.location.assign('/dashboard/blog');
    }
}





export const deleteCategory = async (id) => {

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

export const deleteBlog = async (id) => {
    const response = await supabase
        .from('rostay-blog')
        .delete()
        .eq('id', id)
    if (response) {
        console.log('Blog deleted successfully!');
        window.location.reload();
    }
    else {
        console.log('Blog deletion failed');

    }
}

export const editCategory = async (id, editData) => {
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

export const editBlog = async (id, editedBlog) => {
    const { error } = await supabase
        .from('rostay-blog')
        .update(editedBlog)
        .eq('id', id)
    if (error) {
        console.log(error);

    }
    else {
        console.log("Blog edited successfully");
        window.location.assign('/dashboard/blog')
    }
}
