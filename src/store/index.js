import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [
            {
                id: 1,
                name: "김원형",
                email: "cyberzzang7@naver.com",
                password: "1234"
            }, {
                id: 2,
                name: "lego",
                email: "lego@naver.com",
                password: "1234"
            }
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        //로그인이 성공했을 때,
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },
        // 로그인이 실패했을 때,
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state){
            state.isLogin=false
            state.isLoginError=false
            state.userInfo = null
        }
        // 로그인이 실패했을 때,
    }, // state값을  로직을 변화 시킴
    actions: {
        //로그인 시도 성공했을 때 뮤테이션 성공을 실행
        login({ state,commit }, loginObj) {
            let selectedUser = null

            state.allUsers.forEach(user => {
                    if (user.email === loginObj.email) 
                        selectedUser = user
                })
            if (selectedUser === null || selectedUser.password !== loginObj.password) 
                commit("loginError")
            else {
                commit("loginSuccess", selectedUser)
                router.push({name: "mypage"})
            }
        },
        logout({commit}){
            commit("logout")
            router.push({name: "home"})
        }
    }
})
