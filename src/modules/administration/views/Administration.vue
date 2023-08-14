<template>
    <Navbar></Navbar>
    <v-container>
        <ButtonsGroup class="mb-5" @loadProducts="onLoadProducts"></ButtonsGroup>
        <UsersTable v-if="currentTable == 'Products'" :data="data"></UsersTable>
        <div v-if="!isLoaded" class="Message text-center text-h4 pt-5">
            Debes presionar un boton para cargar datos....
        </div>
    </v-container>
</template>
    
<script setup>
import {ref} from 'vue'
import UsersTable from './../components/UsersTable.vue'
import ButtonsGroup from './../components/ButtonsGroup.vue'
import Navbar from '@/components/shared/Navbar.vue'
import useAdministration from '../composables/useAdministration'

const {
    getUsers,
    data
} = useAdministration();

const currentTable = ref('');
const isLoaded = ref(false)

function onLoadProducts(){
    isLoaded.value = false
    getUsers();
    currentTable.value = 'Products'
    isLoaded.value = true
}

</script>
    
<style>
.Message{
    background-color: rgba(27, 27, 27, 0.685) !important;
    backdrop-filter: blur(10px);
    height: 100px;
}
</style>