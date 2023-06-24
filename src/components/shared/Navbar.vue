<template>
  <v-app-bar>
    <template v-slot:append>
      <v-btn class="text-h5" :to="{name: 'Register'}" >Registro <v-icon class="mdi mdi-account-plus" size="x-small"></v-icon> </v-btn>
      <v-btn class="text-h5" :to="{name: 'Login'}" >Ingresar <v-icon class="mdi mdi-login" size="x-small"></v-icon> </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
  
</script>

<style lang="css" scoped>
.v-toolbar{
  background-color: transparent!important;
}
.v-btn{
  color: white;
}
</style>

