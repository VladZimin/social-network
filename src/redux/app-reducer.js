import {authUser} from "./auth-reducer";

const SET_INITIALIZE = 'SET_INITIALIZE'


let initialState = {
    initialized: false,
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {...state, initialized: true}
        default:
            return state
    }
}

const setInitialize = () => ({type: SET_INITIALIZE})

export const initializeApp = () => async dispatch => {
    await dispatch(authUser())
    dispatch(setInitialize())
}

export default appReducer
