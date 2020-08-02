<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn fixed bottom right fab color="primary" v-bind="attrs" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">新規投稿</v-card-title>
        <v-card-text>
          <!-- <v-text-field v-model="post.username" type="text" label="ユーザ名" /> -->
          <v-textarea v-model="content" label="投稿内容" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">
            キャンセル
          </v-btn>
          <v-btn 
            color="primary"
            :disabled="!content"
            @click="addPost(content)"
          >
            投稿
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      content: '',
    }
  },

  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts',
      postPost: 'posts/postPost',
      setMessage: 'snackbar/setMessage',
    }),

    async addPost(content) {
      await this.postPost(content).then((res) => {
        console.log(res)
        this.$data.dialog = false
        this.$data.content = ''
        this.setMessage('投稿しました')
        this.getPosts()
      }).catch(err => {
        console.log(err)
        this.$data.dialog = false
        this.$data.content = ''
        this.setMessage('投稿に失敗しました')
        this.getPosts()
      })
    },
  },
}
</script>
