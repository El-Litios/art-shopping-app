<template>
    <v-dialog
      v-model="dialog"
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
        <v-card-title>
          <slot name="modal-title"></slot>
          <!-- <span class="text-h5">User Profile</span> -->
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <slot  name="modal-inputs">

              </slot>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
           <slot name="modal-save-button">

           </slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup>
import {ref} from 'vue'
const dialog =  ref(false)

function myMethod(){
  dialog = false;
}

</script>