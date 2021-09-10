import { authAPI, LoginAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN = 'SET_USER_LOGIN'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN:
            return {
                ...state,
                ...action.data,
            }
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

/*export const setUserLogin = (email, password) => ({type: SET_USER_LOGIN, data: {email, password}})
export const setUserLogin = () => (dispatch) => {
    LoginAPI.logIn().then(response => {
        let {email, password} = response.data.data;
        dispatch(setUserLogin(email, password));
    });
} */

export default authReducer;