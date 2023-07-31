<template>
<v-table
    fixed-header
    height="300px"
  >
    <thead>
      <tr>
        <th class="bg-black text-white text-h6 font-weight-bold" v-for="column in columns" :key="column.key">
          {{ column.label }}
        </th>
        <th colspan="2" class="text-center bg-black text-h6 font-weight-bold">Gestión</th>
      </tr>
    </thead>
    <tbody>
      <slot name="table-body"></slot>
        
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps(['columns'])

</script>

<style>
</style>