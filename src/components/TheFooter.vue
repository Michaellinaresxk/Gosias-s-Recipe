import { RouterLink } from 'vue-router';
<template>
  <v-footer class="d-flex flex-column">
    <div class="bg-orange-lighten-2 d-flex w-100  align-center px-4">
      <strong>Be smart - Eat smart!</strong>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Michaelxk</strong>
    </div>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style>
.bg-orange-lighten-2 {
  height: 40px;
}
</style>