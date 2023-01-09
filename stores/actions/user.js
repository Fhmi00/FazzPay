import axios from "utils/axios";

export const getDataUser = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`/user/profile/${id}`),
  };
};

export const getAllUser = () => {
  return {
    type: "GET_DATA_USER",
    payload: axios.get("/user?page=1&limit=10&search=&sort=firstName ASC"),
  };
};

export const changePhoto = (id, data) => {
  return {
    type: "CHANGE_PHOTO_USER",
    payload: axios.patch(`/user/image/${id}`, data),
  };
};

export const changeProfile = (id, data) => {
  return {
    type: "CHANGE_PROFILE_USER",
    payload: axios.patch(`/user/profile/${id}`, data),
  };
};

export const deletePhoto = (id, data) => {
  return {
    type: "DELETE_PHOTO_USER",
    payload: axios.delete(`/user/image/${id}`, data),
  };
};

export const updatePhone = (id, data) => {
  return {
    type: "UPDATE_PHONE",
    payload: axios.patch(`/user/profile/${id}`, data),
  };
};

export const updatePassword = (id, data) => {
  return {
    type: "UPDATE_PASSWORD",
    payload: axios.patch(`/user/password/${id}`, data),
  };
};
