import axios from "utils/axios"

export const getDataUser = (id) => {
    return {
        type: "GET_USER_BY_ID",
        payload: axios.get(`/user/profile/${id}`)
    }
};

export const getAllUser = () => {
    return {
        type: "GET_DATA_USER",
        payload: axios.get("/user?page=1&limit=10&search=&sort=firstName ASC")
    }
};