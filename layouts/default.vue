<template>
  <v-app>
    <GlobalHeader />
    <v-main>
      <v-container>
        <nuxt />
        <SnackBar />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import SnackBar from '@/components/SnackBar'

export default {
  components: {
    GlobalHeader,
    SnackBar,
  },
}
</script>
