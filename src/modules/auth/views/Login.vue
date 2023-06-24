<template>
  <Navbar />
  <h1 class="text-center text-h1 mt-2">Ingreso</h1>
  <v-form>
    <LoginForm>
      <template v-slot:content>
        <p class="text-h5 text--primary">Correo:</p>
        <v-text-field v-model="user.email"></v-text-field>
        <p class="text-h5 text--primary">Contraseña:</p>
        <v-text-field v-model="user.pass"></v-text-field>
      </template>
      <template v-slot:buttons>
        <v-btn class="auth-btn" @click="ver" block>Ingresar</v-btn>
      </template>
    </LoginForm>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/shared/Navbar";
import LoginForm from "../components/Form";

const user = ref({
  username: "",
  pass: "",
});
</script>

<style>
.auth-btn{
    background-color: #0044D1;
    font-size: large;
}
</style>
