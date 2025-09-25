import axiosInstance from './api.js'



export const getAllBrand = ()=> axiosInstance.get('/brand/getAllBrand')

export const createBrand = (payload) => axiosInstance.post('/brand/createBrand', payload)

export const deleteBrand = (id) => axiosInstance.delete(`/brand/deleteBrand/${id}`)

export const getBrandById = (id) => axiosInstance.get(`/brand/getBrandById/${id}`);

export const updateBrand = (id, payload) => axiosInstance.put(`/brand/updateBrand/${id}`, payload)