<template>
  <v-row class="product-list mr-2 ml-2">
    <v-col cols="5">
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
    <v-col cols="7"> </v-col>
    <v-row no-gutters class="mr-4 ml-4">
      <v-col cols="4"> A </v-col>
      <v-col cols="4"> A </v-col>
      <v-col cols="4"> A </v-col>
    </v-row>
  </v-row>
</template>

<script setup>
</script>

<style>
.product-list{
    background-color: #101314;
}

.v-select{
    background-color: transparent!important;
    backdrop-filter: blur(5px);
}

.v-list{
    background: transparent !important;
    backdrop-filter: blur(5px);
}

.v-list-item{
     background-color: #101314 !important;
     color: white !important;
     border: #101314;
  }
</style>