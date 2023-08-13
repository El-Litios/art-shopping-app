<template>
    <Navbar></Navbar>
    
    <v-btn @click="getUsers"></v-btn>
    <v-container>
        <ButtonsGroup class="mb-5"></ButtonsGroup>
        <UsersTable :data="data"></UsersTable>
    </v-container>
</template>
    
<script setup>
import UsersTable from './../components/UsersTable.vue'
import ButtonsGroup from './../components/ButtonsGroup.vue'
import Navbar from '@/components/shared/Navbar.vue'
import useAdministration from '../composables/useAdministration'

const {
    getUsers,
    data
} = useAdministration();



</script>
    
<style></style>