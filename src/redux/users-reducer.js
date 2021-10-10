import {followUsersAPI, usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}
export const toggleFollow = (userID) => ({type: TOGGLE_FOLLOW, userID: userID})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFollowing, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFollowing,
    userId
})

export const requestUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
}


const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) dispatch(toggleFollow(userId))
    dispatch(toggleFollowingInProgress(false, userId))
}

export const unfollow = userId => async dispatch => {
    await followUnfollowFlow(dispatch, userId, followUsersAPI.unfollowUser(userId))
}

export const follow = userId => async dispatch => {
    await followUnfollowFlow(dispatch, userId, followUsersAPI.followUser(userId))
}

export default usersReducer
