<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar">
      {{ getMessageText }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      snackbar: false,
    }
  },
  methods: {
    ...mapGetters('snackbar', ['getMessage', 'existsMessage']),
    ...mapActions('snackbar', ['clearMessage']),
  },
  computed: {
    isShow() {
      return this.existsMessage()
    },
    getMessageText() {
      return this.getMessage()
    },
  },
  watch: {
    isShow: function() { // computedのisShow()を監視している
      this.snackbar = this.existsMessage()
    },
    snackbar: function () { // タイマでスナックバーが閉じたときにメッセージをクリアする
      if (!this.snackbar) {
        this.clearMessage()
      }
    }
  },
}
</script>
