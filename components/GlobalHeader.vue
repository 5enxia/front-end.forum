<template>
  <v-app-bar fixed app flat>
    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: '掲示板',
    }
  },
}
</script>
