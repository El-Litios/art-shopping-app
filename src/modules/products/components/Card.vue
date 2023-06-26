<template>
  <v-card class="mx-auto mt-5" max-width="344">
    <v-img
      class="mx-auto mt-4 pa-3 card-logo"
      src="@/assets/images/logo.png"
      width="90"
      height="90"
    ></v-img>
    <v-card-text class="pt-0">
      <p class="text-h4 text-center text--primary icon-label">
        Ymagin<b>arte</b>
      </p>
      <div
        class="text-subtitle-1 text-gray mt-2 text-center mr-2 ml-2 card-body"
      >
        <p>
          Somos una tienda y equipo pequeño dedicados a fabricar ideas y
          productos poco habituales.
        </p>
        <p>
          Selecciona tu producto y envia una solicitud para contactarnos contigo
          de manera personalizada.
        </p>
      </div>
      <div class="mt-4 text-center">
        <v-icon class="mdi mdi-map-marker"></v-icon>
        <span class="text-subtitle-1">Curicó.</span>
      </div>
      <div
        class="text-subtitle-1 text-gray mt-3 text-center mr-1 ml-1 card-footer"
      >
        <p class="text-h5">¿Tienes algún proyecto?</p>
        <v-divider :thickness="3" class="border-opacity-25 ma-2"></v-divider>
        <p>
          Puedes contratarnos para un servicio especifico o algun proyecto que
          quieras compartir con nosotros. Somos un equipo pequeño que cuenta con
          profesionales en diseño.
        </p>

        <v-btn class="ma-2 text-subtitle-1">Correo Electrónico</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
</script>

<style>
.card-logo {
  background-color: white !important;
  border-radius: 100%;
}

.icon-label {
  font-family: "Roboto" !important;
  font-size: 25px !important;
  color: #4c8ecc;
}

.icon-label b {
  color: #a77308;
}

.card-body {
  letter-spacing: 0.0206em !important;
}
.card-footer {
  letter-spacing: 1.2px !important;
  color: #a1caf0;
  border: 1px solid #61a1dd;
  border-radius: 20px;
}
.card-footer .v-btn{
  background-color: transparent !important;
  border: 1px solid #61a1dd;
  color: #a1caf0;
}
</style>