import axios from "../Axios/adminAxios";

export const adminLoginAPI = (data) => {
    return axios.post('/admin/login',data)
}

export const membersAPI = () => {
    return axios.get('/admin/members')
}

export const blockAPI = (id) => {
    return axios.post(`/admin/block/${id}`)
} 

export const unBlockAPI = (id) => {
    return axios.post(`/admin/block/${id}`)
}

export const auctionAPI = () => {
    return axios.get('/admin/auction')
}

export const genreAPI = () => {
    return axios.get("/admin/genre")
}

export const addGenreAPI = (data) => {
    return axios.post('/admin/addgenre',data)
}

export const blockGenreAPI = (id) => {
    return axios.post(`/admin/blockgenre/${id}`)
}

export const unBlockGenreAPI = (id) => {
    return axios.post(`/admin/unblockgenre/${id}`)
}

export const genreAuctionAPI = () => {
    return axios.get('/admin/genreauction')
}

export const addAuctionAPI = (data,headers) => {
    return axios.post('/admin/addauction',data,headers)
}