<template>
  <v-layout column justify-center align-center>
    <v-card class="mx-auto" min-width="480">
      <v-card-title>
        掲示板
      </v-card-title>
      <v-card-text>
        <v-text-field 
          v-model="name" 
          type="email" 
          label="メールアドレス"
          required
        />
        <v-text-field
          v-model="name"
          type="password"
          label="パスワード"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-col class="text-right">
          <v-btn color="primary" depressed>ログイン</v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: 'login',
}
</script>
