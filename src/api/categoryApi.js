import axiosInstance from './api.js'



export const getAllCategories = ()=> axiosInstance.get('/category/getAllCategories')

export const createCategory = (payload) => axiosInstance.post('/category/createCategory', payload)

export const deleteCategory = (id) => axiosInstance.delete(`/category/deleteCategory/${id}`)

export const getCategoryById = (id) => axiosInstance.get(`/category/getCategoryById/${id}`);

export const updateCategory = (id, payload) => axiosInstance.put(`/category/updateCategory/${id}`, payload)