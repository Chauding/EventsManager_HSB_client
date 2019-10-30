<template>
  <v-snackbar v-model="snackbar.show" top vertical>
    {{ snackbar.text }}
    <v-btn color="pink" flat @click="snackbar.show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    snackbar: {
      get() {
        return this.$store.getters.getSnackBar;
      },
      set(obj) {
        this.$store.commit("setSnackBar", obj);
      }
    }
  }
};
</script>

<style>
</style>template