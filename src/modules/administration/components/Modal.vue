<template>
    <v-dialog
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          variant="tonal" class="font-weight-medium modal-btn"
          v-bind="props"
        >
        <slot name="modal-button"></slot>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h4 text-center">
          <slot name="modal-title"></slot>
          <!-- <span class="text-h5">User Profile</span> -->
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row >
              <slot  name="modal-inputs">

              </slot>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-spacer></v-spacer>
           <slot name="modal-save-button">
            
           </slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup>

</script>

<style scoped>
.v-card-actions{
  display: block;
}
</style>