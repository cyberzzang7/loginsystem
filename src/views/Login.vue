
<template>
  <v-container fill-height style="max-width:550px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isError" type="error">
          아이디와 비밀번호를 확인해 주세요.
        </v-alert>
        <v-alert :value="loginSuccess" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat color="blue">
            <v-toolbar-title >로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일을 입력하세요">
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
            >
            </v-text-field>
            
            <div>
              <v-btn
                color="primary"
                depressed
                large
                block
                @click="login()"
                >로그인
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data() {
    return {
      email: null,
      password: null,
      allUsers: [
        {
          id: 1,
          name: "hoza",
          email: "cyberzzang7@naver.com",
          password: "1234"
        },
        { id: 2, name: "lego", email: "lego@naver.com", password: "1234" }
      ],
      isError: false,
      loginSuccess: false
    }
  },
  methods: {
     login() {
     // 전체 유저에서 해당 이메일로 유저를 찾는다.
     let selectedUser=null
     this.allUsers.forEach(user => {
         if(user.email === this.email) selectedUser = user
     })
     if(selectedUser === null)
     (this.isError=true)
     else{
         if(selectedUser.password !== this.password)
              (this.isError=true)
         else {
              (this.loginSuccess=true)
         }
     }
     //그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
     //둘다 true 가 되면 로그인 된다.
     console.log(this.email,this.password)
     }
  }
}
</script>