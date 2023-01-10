const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "",
      };

    case "GET_USER_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };

    case "GET_USER_BY_ID_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };

    case "GET_DATA_USER_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "",
      };

    case "GET_DATA_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };

    case "GET_DATA_USER_REJECTED":
      return {
        ...state,
        data: {},
      };
    case "CHANGE_PROFILE_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    }
    case "CHANGE_PROFILE_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }
    case "CHANGE_PROFILE_USER_REJECTED": {
      return {
        ...state,
        data: {},
        isError: true,
        isLoading: false,
        message: action.payload.data.msg,
      };
    }
    case "CHANGE_PHOTO_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    }
    case "CHANGE_PHOTO_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }
    case "CHANGE_PHOTO_USER_REJECTED": {
      return {
        ...state,
        data: {},
        isError: true,
        isLoading: false,
        message: action.payload.response.data.msg,
      };
    }
    case "DELETE_PHOTO_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    }
    case "DELETE_PHOTO_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }
    case "DELETE_PHOTO_USER_REJECTED": {
      return {
        ...state,
        data: {},
        isError: true,
        isLoading: false,
        message: action.payload.response.data.msg,
      };
    }
    case "UPDATE_PHONE_PENDING":
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    case "UPDATE_PHONE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    case "UPDATE_PHONE_REJECTED":
      return {
        ...state,
        data: {},
        isError: false,
        isLoading: false,
        message: action.payload.data.msg,
      };
    case "UPDATE_PASSWORD_PENDING":
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    case "UPDATE_PASSWORD_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    case "UPDATE_PASSWORD_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.msg,
      };
    case "CHECK_PIN_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    }
    case "CHECK_PIN_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }
    case "CHECK_PIN_USER_REJECTED": {
      return {
        ...state,
        data: {},
        isError: true,
        isLoading: false,
        message: action.payload.response.data.msg,
      };
    }
    case "CHANGE_PIN_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        data: {},
      };
    }
    case "CHANGE_PIN_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }
    case "CHANGE_PIN_USER_REJECTED": {
      return {
        ...state,
        data: {},
        isError: true,
        isLoading: false,
        message: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default user;
