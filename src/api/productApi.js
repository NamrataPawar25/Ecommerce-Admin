import axiosInstance from './api.js'



export const getAllProducts = ()=> axiosInstance.get('/product/getAllProducts')

export const createProduct = (payload) => axiosInstance.post('/product/createProduct', payload)

export const deleteProduct = (id) => axiosInstance.delete(`/product/deleteProduct/${id}`)

export const getProductById = (id) => axiosInstance.get(`/product/getProductById/${id}`);

export const updateProduct = (id, payload) => axiosInstance.put(`/product/updateProduct/${id}`, payload)