<template>
  <v-row class="product-list mr-2 ml-2">
    <v-col cols="4">
      <v-select
        class="select"
        bg-color="transparent"
        hide-details="true"
        label="Categorias" :items="categories"  item-title="name"
      ></v-select>
    </v-col>
    <v-col cols="8">
      <v-text-field> </v-text-field>
    </v-col>
    <v-row class="mr-4 ml-4 mb-4">
      <v-col cols="12" lg="4" md="6" v-for="p in products" :key="p.id">
        <v-card class="mx-auto product-card" max-width="372">
            <v-img
              :src="p.imgUrl"
              class="align-end product-image"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              max-width="372"
              height="200"
              cover
            >
              <v-card-title class="text-white product-title" >{{ p.name }}</v-card-title>
            </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script setup>
import { onMounted } from 'vue'
import useProducts from '../composables/useProducts'

const { getCategories, categories, getProducts, products } = useProducts();

onMounted(() => {
  getCategories();
  getProducts();
})


</script>

<style lang="css">
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

.product-image:hover{
  cursor: pointer;
  filter: brightness(0.8);
}

.product-image:hover .product-title{
  display: block;
}

.product-title {
  display: none;
}
</style>