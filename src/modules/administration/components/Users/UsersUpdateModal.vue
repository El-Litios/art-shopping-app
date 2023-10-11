<template>
    <Modal>
        <template v-slot:modal-button>
            <v-icon class="mdi mdi-book-edit"></v-icon>
        </template>

        <template v-slot:modal-title>
            Editar Informacion de Usuario
        </template>

        <template v-slot:modal-inputs>
            <v-col cols="12" sm="6" md="4">
                <p class="text-h6 text--primary">Nombre:</p>
                <v-text-field required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <p class="text-h6 text--primary">Correo:</p>
                <v-text-field required></v-text-field>
            </v-col>
        </template>
        <template v-slot:modal-save-button scope="Modal">
            <v-btn rounded="lg" size="large" class="text-h5" color="red-darken-1" variant="tonal"
                @click="$emit('unshowmodal')">
                <v-icon class="mdi mdi-window-close"></v-icon>
            </v-btn>
            <v-btn rounded="lg" size="large" class="text-h5" color="blue-darken-1" variant="tonal"
                @click="$emit('unshowmodal')">
                <v-icon class="mdi mdi-content-save"></v-icon>
            </v-btn>
        </template>
    </Modal>
</template>

<script setup>
import Modal from '../Modal.vue'
</script>