<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field v-model="email" label="이메일" type="email" :rules="emailRules" required />
            <v-text-field v-model="password" label="비밀번호" :rules="passwordRules" type="password" required />
            <v-text-field v-model="passwordCheck" label="비밀번호확인" :rules="passwordCheckRules" type="password" required />
            <v-text-field v-model="nickname" label="닉네임" :rules="nicknameRules" type="nickname" required />
            <v-checkbox v-model="terms" required :rules="[ v=> !!v || '약관에 동의해야합니다.']" label="체크확인" />
            <v-btn color="green" type="submit">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
    export default {
        data(){
           return{
               valid: false,
               email: '',
               password: '',
               passwordCheck: '',
               nickname: '',
               terms: false,
               emailRules:[
                   v => !!v || '이메일은 필수입니다.',
                   v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
               ],
               nicknameRules:[
                   v => !!v || '닉네임은 필수입니다.',
               ],
               passwordRules:[
                   v => !!v || '비밀번호는 필수입니다',
               ],
               passwordCheckRules:[
                   v => !!v || '비밀번호 확인은 필수입니다.',
                   v => v === this.password || '비밀번호가 일치하지 않습니다.',
               ]
           };
        },
        methods:{
            onSubmitForm(){
                if(this.$refs.form.validate()) {
                  this.$store.dispatch('users/signUp',{
                    nickname: this.nickname,
                    email: this.email,
                  })
                    .then(() => {
                      this.$router.push({
                        path: '/',
                      });
                    })
                    .catch((err) => {
                      alert('회원가입 실패', err)
                    })
                }
                console.log(this.valid);
            }
        }
    }
</script>

<style scoped>

</style>