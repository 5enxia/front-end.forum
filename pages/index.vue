<template>
  <v-layout column align-center>
    <v-row v-for="(post, index) in posts" :key="`post-${index}`">
      <v-col cols="12"><Post :post="post" /></v-col>
    </v-row>
    <Dialog />
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

import Post from '@/components/index/Post'
import Dialog from '@/components/index/Dialog'

export default {
  components: {
    Post,
    Dialog,
  },

  computed: {
    posts() {
      return this.$store.state.posts.posts
    },
  },

  beforeMount() {
    this.getPosts()
  },

  methods: {
    ...mapActions({ getPosts: 'posts/getPosts' }),
  },
}
</script>
