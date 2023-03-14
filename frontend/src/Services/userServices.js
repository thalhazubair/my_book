import axios from '../Axios/userAxios'

export const userLoginAPI = (data) => {
    return axios.post('/login',data)
}

export const userEditAPI = (data) =>{
    return axios.post('/useredit',data)
}

export const getUserDetailsAPI = () => {
    return axios.get('/getuserdetails')
}

export const membershipPaymentAPI = (data) => {
    return axios.post('/membershippayment',data) 
}

export const verifyPaymentAPI = (payment,details) => {
    return axios.post('/verifypayment',{payment,details})
}