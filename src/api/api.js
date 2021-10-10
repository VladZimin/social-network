import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '42d5d9af-ae36-4981-9993-a2bb2a54b0f9'
    }
})

export let usersAPI = {
    getUsers(currentPage = 1, pageSize = 8) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export let followUsersAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export let profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`,{status})
            .then(response => response.data)
    }

}

export let authAPI = {
    authUser(){
       return instance.get(`auth/me`,).then(response => response.data)
    },
    login(email, password, rememberMe){
        return instance.post(`auth/login`,{email, password, rememberMe}).then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`).then((response => response.data))
    }
}

