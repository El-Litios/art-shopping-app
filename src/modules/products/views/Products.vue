<template>
<Navbar/>
<v-row class="mt-3">
    <v-col lg="3" md="12" sm="12" cols="12">
        <Card></Card>
    </v-col>
    <v-col lg="6" md="12" sm="12" cols="12">
        <Carousel></Carousel>
    </v-col>
    <v-col lg="3" md="12" sm="12" cols="12">
        <Links></Links>
    </v-col>
</v-row>
</template>

<script setup>
import Navbar from '../components/Nabvar.vue'
import Card from '../components/Card.vue'
import Carousel from '../components/Carousel.vue'
import Links from '../components/Links.vue'
</script>

<style>

</style>