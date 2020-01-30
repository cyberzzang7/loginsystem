import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from "axios"

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
        login({dispatch}, loginObj){
            // 로그인 - > 토큰 반환 
        axios.post('https://reqres.in/api/login', loginObj) // 두번째 인자는 파라메터 값(body)
        .then(res=> {
            let token = res.data.token
            //토큰을 로컬스토리지에 저장
            localStorage.setItem("access_token",token)
            dispatch("getMemberInfo")
        })
        .catch(err=> {
            alert("이메일과 비밀번호를 확인하세요.")
        });
        //로그인 시도 성공했을 때 뮤테이션 성공을 실행
        // login({ state,commit }, loginObj) {
        //     let selectedUser = null

        //     state.allUsers.forEach(user => {
        //             if (user.email === loginObj.email) 
        //                 selectedUser = user
        //         })
        //     if (selectedUser === null || selectedUser.password !== loginObj.password) 
        //         commit("loginError")
        //     else {
        //         commit("loginSuccess", selectedUser)
        //         router.push({name: "mypage"})
        //     }
        },
        logout({commit}){
            commit("logout")
            router.push({name: "home"})
        },
        getMemberInfo({commit}){
            // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.

            let token = localStorage.getItem("access_token")
            let config ={
                headers: {
                    "access-token": token
                }
            }
            // 토큰 - > 멤버 정보를 반환
            // 새로 고침 - > 토큰만 가지고 멤버 정보를 요청할 수 있음. 
            axios
            .get('https://reqres.in/api/users/2', config)
            .then(response=>{
               let userInfo = {
                   id: response.data.data.id,
                   first_name :response.data.data.first_name,
                   last_name :response.data.data.last_name,
                   avatar:response.data.data.avatar
               }
               commit ("loginSuccess", userInfo)
            })
            .catch(error=>{
               alert("이메일과 비밀번호를 확인하세요.")
            })
        }
    }
})
