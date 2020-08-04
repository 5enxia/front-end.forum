<template>
  <v-card class="mx-auto" width="480">
    <v-card-title>{{post.Message}}</v-card-title>
    <v-card-text>
    <v-card-actions>
        &#064;{{ post.UserID }}
        <v-row align="center" justify="end">
          <span class="subheading mr-2">{{ formatDate(post.Timestamp) }}</span>
        </v-row>
      </v-card-actions> 
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['post'],
  methods: {
    ...mapActions({
      deletePost: 'posts/deletePost',
      getPosts: 'posts/getPosts',
      setMessage: 'snackbar/setMessage',
    }),
    formatDate(timestamp) {
      return new Date(timestamp).toLocaleString()
    },
    async removePost(post) {
      await this.deletePost(post)
      this.setMessage('投稿を削除しました')
      await this.getPosts()
    },
  },
}
</script>
