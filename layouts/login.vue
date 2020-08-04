<template>
  <v-app>
    <v-container>
      <nuxt-child />
      <SnackBar />
    </v-container>
  </v-app>
</template>

<script>
import SnackBar from '@/components/SnackBar'
export default {
  components: {
    SnackBar,
  },
}
</script>
