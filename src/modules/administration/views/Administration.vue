<template>
    <v-btn @click="getUsers"></v-btn>
    <UsersTable :data="data"></UsersTable>
</template>
    
<script setup>
import { onMounted } from 'vue'
import UsersTable from './../components/UsersTable.vue'
import useAdministration from '../composables/useAdministration'

const {
    getUsers,
    data
} = useAdministration();



</script>
    
<style></style>