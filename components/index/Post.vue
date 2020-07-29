<template>
  <v-card class="mx-auto" min-width="480">
    <v-card-title />
    <v-card-text>{{ post.content }}</v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item>投稿者：{{ post.username }}</v-list-item>
          <v-list-item>投稿日時：{{ formatDate(post.timestamp) }}</v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    formatDate(timestamp) {
      return new Date(timestamp).toLocaleString()
    },
  },
}
</script>
