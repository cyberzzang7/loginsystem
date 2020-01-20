import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allUsers: [
            {
                id: 1,
                name: "hoza",
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
        loginSuccess(state) {
            state.isLogin = true
            state.isLoginError = false
        },
        // 로그인이 실패했을 때,
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        }
        // 로그인이 실패했을 때,
    }, // state값을  로직을 변화 시킴
    actions: {
        //로그인 시도 성공했을 때 뮤테이션 성공을 실행
        login({state,commit}, loginObj) {
            let selectedUser = null 
            state.allUsers.forEach(user => {
                   if(user.email === loginObj.email) selectedUser = user
                })
            selectedUser === null
                ? commit("loginError")
                : selectedUser.password !== loginObj.password
                    ? commit("loginError")
                    : commit("loginSuccess")

        }
    }
})
