<template>
  <v-app>
    <GlobalHeader />
    <!-- <GlobalDrawer /> -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader';
// import GlobalDrawer from '@/components/GlobalDrawer';

export default {
  components: {
    GlobalHeader,
    // GlobalDrawer,
  },
}
</script>
