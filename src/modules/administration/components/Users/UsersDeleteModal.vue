<template>
    <Modal v-model="showDeleteModal">
        <template v-slot:modal-button>
            <v-icon class="mdi mdi-trash-can-outline"></v-icon>
        </template>

        <template v-slot:modal-title>
            Eliminar Informacion de Usuario
        </template>
        <template v-slot:modal-save-button>
            <v-btn rounded="lg" size="large" class="text-h5" color="red-darken-1" variant="tonal"
                @click="$emit('unshowmodal')">>
                <v-icon class="mdi mdi-window-close"></v-icon>
            </v-btn>
            <v-btn rounded="lg" size="large" class="text-h5" color="blue-darken-1" variant="tonal"
                @click="$emit('unshowmodal')">>
                <v-icon class="mdi mdi-content-save"></v-icon>
            </v-btn>
        </template>
    </Modal>
</template>

<script setup>
import Modal from '../Modal.vue'
</script>