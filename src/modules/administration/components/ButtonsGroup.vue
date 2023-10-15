<template>
    <v-expansion-panels>
        <v-expansion-panel class="text-h2 font-weight-bold text-white">
            <v-expansion-panel-title class="text-h4">Gestión</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-row>
                    <v-col lg="2" v-for="(item, index) in managementButtons" :key="index">
                        <v-btn @click="$emit('loadData', item.name)" variant="tonal">{{ item.title }}</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-text>

        </v-expansion-panel>
        <v-expansion-panel class="text-h2 font-weight-bold text-white">
            <v-expansion-panel-title class="text-h4">Apariencia</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-row>
                    <v-col lg="2" v-for="(item, index) in designButtons" :key="index">
                        <v-btn @click="$emit('loadData', item.name)" variant="tonal">{{ item.title }}</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-text>

        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
const managementButtons = [
    {title: 'Ver Productos', name: 'Product'},
    {title: 'Ver Categorías', name: 'Category'},
    {title: 'Ver Pedidos', name: 'Order'},
]
const designButtons = [
    {title: 'Carousel', name: 'Carousel'},
    {title: 'Redes Sociales', name: 'Social'},
]
</script>

<style>
.v-expansion-panel {
    background-color: rgba(14, 14, 14, 0.692) !important;
}
</style>