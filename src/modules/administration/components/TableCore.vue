<template>
<v-table
    fixed-header
    height="300px"
  >
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="column in columns" :key="column.key">
            {{ item[column.key] }}
          </td>
          <td>{{ item }}</td>
          <td>
            <slot name="edit" :item="item">
            </slot>
          </td>
          <td>
            <slot name="delete" :item="item">
            </slot>
          </td>
        </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps(['items', 'columns'])
console.log(props.items);
</script>

<style>
</style>