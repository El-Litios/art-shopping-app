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
        <v-btn class="auth-btn" :to="{name: 'Products'}" block>Ingresar</v-btn>
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
.v-text-field input {
  font-size: 1.3em;
letter-spacing: 0.0095em !important;
}
.auth-btn {
background-color: #0044d1;
font-size: large;
}
</style>
