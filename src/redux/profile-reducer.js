import {profileAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Salam', likes: 21},
        {id: 2, message: 'Che tam?', likes: 51},
        {id: 3, message: 'Kak ty?!', likes: 28}
    ],
    profile: null,
    userStatus: ''
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {id: 4, message: action.post, likes: 0}]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, userStatus: action.userStatus}
        default:
            return state
    }
}

export const addPost = (post) => ({type: ADD_POST, post})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})

export const getUserProfile = userId => async dispatch => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = userId => async dispatch => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatus = status => async dispatch => {
    let data = await profileAPI.updateUserStatus(status)
    data.resultCode === 0 ? dispatch(setUserStatus(status)) : alert('ERROR!')
}

export default profileReducer
