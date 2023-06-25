<template>
  <Navbar />
  <h1 class="text-center text-h1 mt-2">Registro</h1>
  <v-form>
    <RegisterForm>
      <template v-slot:content>
        <p class="text-h5 text--primary">Nombre:</p>
        <v-text-field v-model="user.name"></v-text-field>
        <p class="text-h5 text--primary">Correo:</p>
        <v-text-field v-model="user.email"></v-text-field>
        <p class="text-h5 text--primary">Contraseña:</p>
        <v-text-field v-model="user.pass"></v-text-field>
      </template>
      <template v-slot:buttons>
        <v-btn class="auth-btn" @click="ver" block>Crear Cuenta</v-btn>
      </template>
    </RegisterForm>
  </v-form>
</template>
  
  <script setup>
import { ref } from "vue";
import Navbar from "@/components/shared/Navbar";
import RegisterForm from "../components/Form";

const user = ref({
  name: "",
  email: "",
  pass: "",
});

function ver(){
    console.log(user.value);
}
</script>

<style lang="css">

</style>
