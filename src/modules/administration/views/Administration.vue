<template>
    <Navbar></Navbar>
    <v-container>
        <ButtonsGroup class="mb-5" @loadData="onLoadData"></ButtonsGroup>
        <UsersTable v-if="currentTable == 'Products'" :data="data"></UsersTable>
        <div v-if="!isLoaded" class="Message text-center text-h4 pt-5">
            Debes presionar un boton para cargar datos....
        </div>
        <div v-if="isLoading" class="Message text-center text-h4 pt-5">
            Cargando datos....
        </div>
    </v-container>
</template>
    
<script setup>
import { ref } from 'vue'
import UsersTable from './../components/Users/UsersTable.vue'
import ButtonsGroup from './../components/ButtonsGroup.vue'
import Navbar from '@/components/shared/Navbar.vue'
import useAdministration from '../composables/useAdministration'

const {
    getUsers,
    data
} = useAdministration();

const currentTable = ref('');
const isLoaded = ref(false);
const isLoading = ref(false);

async function onLoadData(table) {
    isLoading.value = true
    switch (table) {
        case 'Product':
            await getUsers();
            currentTable.value = 'Products'
        break
        case 'Category': 
        console.log('Categoria');
        break
    }
    isLoaded.value = true
    isLoading.value = false
}

</script>
    
<style>
.Message {
    background-color: rgba(27, 27, 27, 0.685) !important;
    backdrop-filter: blur(10px);
    height: 100px;
}
</style>