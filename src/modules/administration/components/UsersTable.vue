<template>
    <TableCore :items="data" :columns="userColumns">
        <template v-slot:edit="{ item }">
            <button @click="editUser(item)">Editar Usuario</button>
        </template>
        <template v-slot:delete="{ item }">
            <button @click="deleteUser(item)">Eliminar Usuario</button>
        </template>
    </TableCore>
</template>

<script setup>
import TableCore from './TableCore.vue'
const props = defineProps(['data'])
console.log(props.data)
const userColumns = [
    { key: "name", label: "Nombre" },
    { key: "email", label: "Email" },
]
</script>