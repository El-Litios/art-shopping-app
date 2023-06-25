<template>
  <v-card class="mx-auto mt-5" max-width="450">
    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>

    <v-card-actions class="pt-0">
     <slot name="buttons"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>

</script>

<style lang="css">

</style>