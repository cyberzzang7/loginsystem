import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

Vue.use(VueRouter)

const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false ){
    //아직 로그인 안된 유저니까 막아야 함.
     alert('로그인이 필요한 기능입니다.')
     next('/')
  } else {
    next()
  }
}
const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true ){
    //이미 로그인 된 유저니까 막아야함.
     alert('이미 로그인을 하였습니다.')
     next('/')
  } else {
    next()
  }
}
const routes = [
  {
    path: "/",
    name: "home",
    component: () => 
    import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser, // 라우터에 들어오기전에 함수를 실행 시켜보고 
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: onlyAuthUser,
    component: () => 
    import(/* webpackChunkName: "mypage" */ "../views/Mypage.vue")
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
