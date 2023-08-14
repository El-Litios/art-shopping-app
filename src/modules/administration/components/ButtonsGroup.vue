<template>
    <v-expansion-panels>
        <v-expansion-panel class="text-h2 font-weight-bold text-white">
            <v-expansion-panel-title class="text-h4">Gestión</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-row>
                    <v-col lg="2">
                        <v-btn @click="$emit('loadProducts')" variant="tonal">Ver Products</v-btn>
                    </v-col>
                    <v-col lg="2">
                        <v-btn variant="tonal">Ver Categorias</v-btn>
                    </v-col>
                    <v-col lg="2">
                        <v-btn variant="tonal">Ver Pedidos</v-btn>
                    </v-col>
                    <v-col lg="2">
                        <v-btn variant="tonal">Ver Usuarios</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-text>

        </v-expansion-panel>
        <v-expansion-panel class="text-h2 font-weight-bold text-white">
            <v-expansion-panel-title class="text-h4">Apariencia</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-row>
                    <v-col lg="2">
                        <v-btn variant="tonal">Carousel</v-btn>
                    </v-col>
                    <v-col lg="2">
                        <v-btn variant="tonal">Redes Sociales</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-text>

        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
</script>

<style>
.v-expansion-panel{
    background-color: rgba(14, 14, 14, 0.692) !important;
}
</style>