<template>
    <v-container fill-height="fill-height" style="max-width:550px">
        <v-layout align-center="align-center" row="row" wrap="wrap">
            <v-flex xs12="xs12">
                <v-alert class="mb-3" :value="isLoginError" type="error">
                    아이디와 비밀번호를 확인해 주세요.
                </v-alert>
                <v-alert :value="isLogin" type="success">
                    로그인이 완료되었습니다.
                </v-alert>
                <v-card>
                    <v-toolbar flat="flat" color="blue">
                        <v-toolbar-title >로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field v-model="email" label="이메일을 입력하세요"></v-text-field>
                        <v-text-field v-model="password" type="password" label="패스워드를 입력하세요"></v-text-field>

                        <div>
                            <v-btn
                                color="primary"
                                depressed="depressed"
                                large="large"
                                block="block"
                                @click="login({email:email,password:password})">
                                로그인
                                <!--로그인한당-->
                            </v-btn>
                             <!-- <v-btn @click="test">테스트</v-btn>
                             <v-btn @click="postTest">포스트테스트</v-btn> -->
                        </div>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapState, mapActions} from "vuex"


    export default {
        data() {
            return {
              
            email: null,
            password: null
            
            }
        },
        computed:{
            ...mapState(["isLogin","isLoginError"])
        },
        methods: {
            ...mapActions(["login"]),
            // test(){
            //     axios.get('https://reqres.in/api')
            //     .then( res=> {
            //         // handle success
            //         console.log(res);
            //     })
            //     .catch( err=> {
            //         // handle error
            //         console.log(err);
            //     })
            //     .finally( () => {
            //         console.log("test")
            //         // always executed
            //     });
            // },
            // postTest(){
            //     axios.post('https://reqres.in/api/register', {
            //     email: "eve.holt@reqres.in",
            //     password: "pistol"
            // })
            // .then(res=> {
            //     console.log(res);
            // })
            // .catch(err=> {
            //     console.log(err);
            // });
            // }
        }
    }
    //그 유저의 비밀번호와 입력된 비밀번호를 비교한다. 둘다 true 가 되면 로그인 된다.
</script>