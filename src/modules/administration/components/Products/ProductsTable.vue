<template>
    <v-row class="container">
        <v-col cols="12" lg="1" md="2" class="text-center">
            <ProductsAddModal v-model="showCreateModal" @unshowmodal="showCreateModal = false">
                
            </ProductsAddModal>
        </v-col>
        <v-col cols="4" lg="4" md="4">
            <v-select class="select" bg-color="transparent" hide-details="true" label="Roles" :items="roles"
                item-title="name"></v-select>
        </v-col>
        <v-col cols="8" lg="4" md="4">
            <v-text-field v-model="searchTerm" @input="updateSearchTerm" placeholder="Busqueda"> </v-text-field>
        </v-col>
    </v-row>
    <TableCore :columns="productsColumns">
        <template v-slot:table-body>
            <tr v-for="item in data" :key="item.id" class="text-white text-h6">
                <td>
                    {{ item.name }}
                </td>
                <td>
                    {{ item.category }}
                </td>
                <td>
                    <a :href=" item.imgUrl">Ir</a>
                </td>
                <td class="text-center">
                    <ProductsUpdateModal v-model="showUpdateModal" @unshowmodal="showUpdateModal = false">
                    </ProductsUpdateModal>
                </td>
                <td class="text-center">
                    <ProductsDeleteModal v-model="showDeleteModal" @unshowmodal="showUpdateModal = false">
                    </ProductsDeleteModal>
                </td>
            </tr>
        </template>
    </TableCore>
</template>

<script setup>
import { ref } from 'vue'
import TableCore from '../TableCore.vue'
import ProductsAddModal from './ProductsAddModal.vue'
import ProductsUpdateModal from './ProductsUpdateModal.vue'
import ProductsDeleteModal from './ProductsDeleteModal.vue'
const props = defineProps(['data'])
const showCreateModal = ref(false)
const showUpdateModal = ref(false)
const showDeleteModal = ref(false)
console.log(props.data)
const productsColumns = [
    { key: 0, label: "Nombre" },
    { key: 1, label: "Categoria" },
    { key: 2, label: "Url" },
]
const roles = [{ id: 0, name: 'Administrador' }, { id: 1, name: 'Cliente' }]

</script>

<style>
.v-table {
    background-color: rgba(0, 0, 0, 0.6) !important;
}

.v-select,
.v-field {
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

.v-text-field input {
    font-size: 1.3em;
    letter-spacing: 0.0095em !important;
}</style>