<template>
  <v-app-bar fixed app>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-chip v-if="this.$route.path !== '/'" color="primary" text-color="white">
      <v-avatar left class="primary darken-4">
        {{ this.$store.state.posts.length }}
      </v-avatar>
      Posts
    </v-chip>
    <v-spacer />
    <v-btn v-if="this.$route.path !== '/'" depressed color="primary" @click="logout()">
      ログアウト
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '4Forum',
    }
  },

  methods: {
    ...mapActions({ setMessage: 'snackbar/setMessage' }),

    logout() {
      window.localStorage.removeItem('auth_token')
      this.$router.push('/')
      this.setMessage('ログアウトしました')
    },
  },
}
</script>
