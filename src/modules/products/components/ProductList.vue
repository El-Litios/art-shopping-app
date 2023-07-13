<template>
  <v-row class="product-list mr-2 ml-2">
    <v-col cols="4">
      <v-select
        class="select"
        bg-color="transparent"
        hide-details="true"
        label="Categorías"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-select>
    </v-col>
    <v-col cols="8">
      <v-text-field> </v-text-field>
    </v-col>
    <v-row class="mr-4 ml-4 mb-4">
      <v-col cols="4">
        <v-card class="mx-auto product-card">
          <v-btn class="pa-0 mx-auto" height="300">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="300px"
              width="344"
              cover
            ></v-img>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script setup>
</script>

<style>
.product-list {
  background-color: transparent !important;
  backdrop-filter: blur(10px);
}

.v-select {
  background-color: transparent !important;
  backdrop-filter: blur(5px);
}

.v-list {
  background: transparent !important;
  backdrop-filter: blur(5px);
  height: 61px;
}

.v-list-item {
  background-color: #101314 !important;
  color: white !important;
  border: #101314;
}

.product-card {
  background-color: rgb(109, 171, 202) !important;
}
</style>