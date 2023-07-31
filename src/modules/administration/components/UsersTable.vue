<template>
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
                    <v-btn variant="tonal" class="font-weight-medium btn-update"><v-icon class="mdi mdi-book-edit"></v-icon></v-btn>
                </td>
                <td class="text-center">
                    <v-btn variant="tonal" class="font-weight-medium btn-delete"><v-icon class="mdi mdi-trash-can-outline"></v-icon></v-btn>
                </td>
            </tr>
        </template>
    </TableCore>
</template>

<script setup>
import TableCore from './TableCore.vue'
const props = defineProps(['data'])
console.log(props.data)
const userColumns = [
    { key: 0, label: "Nombre" },
    { key: 1, label: "Correo" },
    { key: 2, label: "Rol" },
]
</script>

<style>
.v-table{
    background-color: rgba(0, 0, 0, 0.6) !important;
}

.btn-update:hover{
    background-color: rgba(255, 217, 102, 0.5);
}
.btn-delete:hover{
    background-color: rgba(255, 102, 102, 0.5);
}
</style>