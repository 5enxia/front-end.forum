<template>
  <v-app-bar fixed app flat>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn @click="logout()">ログアウト</v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '掲示板',
    }
  },

  methods: {
    ...mapActions({ setMessage: 'snackbar/setMessage' }),

    logout() {
      localStorage.removeItem('auth_token')
      this.$router.push('/')
      // this.setMessage('ログアウトしました')
      window.alert('ログアウトしました')
    },
  },
}
</script>
