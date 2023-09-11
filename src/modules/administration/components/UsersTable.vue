<template>
    <v-row class="container">
        <v-col cols="4" lg="1" md="6" class="text-center">
            <Modal v-model="showUpdateModal">
                <template v-slot:modal-button>
                    <v-icon class="add-button mdi mdi-plus"></v-icon>
                </template>

                <template v-slot:modal-title>
                    Agregar Informacion de Usuario
                </template>

                <template v-slot:modal-inputs>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                    </v-col>
                </template>
                <template v-slot:modal-save-button scope="Modal">
                    <v-btn color="blue-darken-1" variant="text" @click="showUpdateModal = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="showUpdateModal = false">
                        Guardar
                    </v-btn>
                </template>
            </Modal>
        </v-col>
        <v-col cols="4" lg="4" md="6">
            <v-select class="select" bg-color="transparent" hide-details="true" label="Roles" :items="roles"
                item-title="name"></v-select>
        </v-col>
        <v-col cols="8" lg="4" md="6">
            <v-text-field v-model="searchTerm" @input="updateSearchTerm" placeholder="Busqueda"> </v-text-field>
        </v-col>
    </v-row>
    <TableCore :columns="userColumns">
        <template v-slot:table-body>
            <tr v-for="item in data" :key="item.id" class="text-white text-h6">
                <td>
                    {{ item.name }} {{ item.lastname }}
                </td>
                <td>
                    {{ item.email }}
                </td>
                <td>
                    {{ item.role }}
                </td>
                <td class="text-center">
                    <Modal v-model="showUpdateModal">
                        <template v-slot:modal-button>
                            <v-icon class="mdi mdi-book-edit"></v-icon>
                        </template>

                        <template v-slot:modal-title>
                            Editar Informacion de Usuario
                        </template>

                        <template v-slot:modal-inputs>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal first name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal middle name"
                                    hint="example of helper text only on focus"></v-text-field>
                            </v-col>
                        </template>
                        <template v-slot:modal-save-button scope="Modal">
                            <v-btn color="blue-darken-1" variant="text" @click="showUpdateModal = false">
                                Close
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="showUpdateModal = false">
                                Guardar
                            </v-btn>
                        </template>
                    </Modal>
                </td>
                <td class="text-center">
                    <Modal v-model="showDeleteModal">
                        <template v-slot:modal-button>
                            <v-icon class="mdi mdi-trash-can-outline"></v-icon>
                        </template>

                        <template v-slot:modal-title>
                            Eliminar Informacion de Usuario
                        </template>
                        <template v-slot:modal-save-button>
                            <v-btn color="blue-darken-1" variant="text" @click="showDeleteModal = false">
                                Close
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="showDeleteModal = false">
                                Guardar
                            </v-btn>
                        </template>
                    </Modal>
                </td>
            </tr>
        </template>
    </TableCore>
</template>

<script setup>
import { ref } from 'vue'
import TableCore from './TableCore.vue'
import Modal from './Modal.vue'
const props = defineProps(['data'])
const showUpdateModal = ref(false)
const showDeleteModal = ref(false)
console.log(props.data)
const userColumns = [
    { key: 0, label: "Nombre" },
    { key: 1, label: "Correo" },
    { key: 2, label: "Rol" },
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
</style>