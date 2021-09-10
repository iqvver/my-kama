import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a23d804b-bd28-49ba-b53e-c5e8fdb280f6"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)

    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status });
    }
}
export const authAPI = {
   me() { 
       return instance.get(`auth/me`)
    }
}

export const LoginAPI = {
    logIn(email, password, rememberMe) {
    return instance.post(`auth/login`, {email: email}, {password: password}, {rememberMe: rememberMe})
    },
    logOut(){
        return instance.delete(`auth/login`)
    }
}


