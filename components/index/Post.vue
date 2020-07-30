<template>
  <v-card class="mx-auto" min-width="480">
    <v-card-title />
    <v-card-text class="headline font-weight-bold">
      {{ post.content }}
    </v-card-text>
    <v-list-item class="grow">
      <v-list-item-content>
        <v-list-item>{{ post.username }}</v-list-item>
        <v-list-item>{{ formatDate(post.timestamp) }}</v-list-item>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn color="red" dark right depressed @click="removePost(post)">削除</v-btn>
    </v-card-actions>
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
