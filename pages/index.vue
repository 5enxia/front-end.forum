<template>
  <v-row align="center" justify="center">
    <v-col cols="6">
      <v-card class="mx-auto">
        <v-card-title>
          新規登録/ログイン
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="user.name"
            type="email"
            label="ユーザ名"
            aria-autocomplete="inline"
            required
          />
          <v-text-field
            v-model="user.password"
            type="password"
            label="パスワード"
            aria-autocomplete="inline"
            required
          />
        </v-card-text>
        <v-card-actions>
          <v-col class="text-right">
            <v-btn color="primary" depressed @click="signup()" :disabled="!user.name || !user.password">新規登録</v-btn>
            <v-btn color="primary" depressed @click="login()" :disabled="!user.name || !user.password">ログイン</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
        email: 'test17@foo.com',
      },
    }
  },

  methods: {
    ...mapActions({
      setMessage: 'snackbar/setMessage',
    }),

    async signup() {
      if (this.$data.user.name && this.$data.user.password) {
        await this.$axios
          .post('/create', {
            UserName: this.$data.user.name,
            Password: this.$data.user.password,
          })
          .then((res) => {
            window.localStorage.setItem('auth_token', res.data.Token)
            this.$router.push('/dashboard')
          })
          .catch((err) => {
            console.log(err)
            this.setMessage('すでに存在しているユーザです')
          })
      } else {
        this.setMessage('不正な入力です')
      }
    },

    async login() {
      if (this.$data.user.name && this.$data.user.password) {
        await this.$axios
          .post('/login', {
            UserName: this.$data.user.name,
            Password: this.$data.user.password,
          })
          .then((res) => {
            window.localStorage.setItem('auth_token', res.data.Token)
            this.$router.push('/dashboard')
            this.setMessage('ログインしました')
          })
          .catch((err) => {
            console.log(err)
            this.setMessage('入力が間違っています')
          })
      } else {
        this.setMessage('不正な入力です')
      }
    },
  },
}
</script>
