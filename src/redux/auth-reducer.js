import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    profilePhoto: null
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {...state, ...action.data}
        case SET_PROFILE_PHOTO:
            return {...state, profilePhoto: action.profilePhoto}
        default:
            return state
    }
}
export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, login, email, isAuth}
})
export const setProfilePhoto = (profilePhoto) => ({type: SET_PROFILE_PHOTO, profilePhoto})

export const authUser = () => async dispatch => {
    let data = await authAPI.authUser()
    let {id, login, email} = data.data
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(id, login, email, true))
        let userProfileData = await profileAPI.getUserProfile(id)
        dispatch(setProfilePhoto(userProfileData.photos.small))
    }
}

export const login = (email, password, rememberMe) => async dispatch => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(authUser())
    } else {
        let messageError = data.messages.length > 0 ? data.messages : 'Some error!'
        dispatch(stopSubmit('login', {_error: messageError}))
    }
}
export const logout = () => async dispatch => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer
