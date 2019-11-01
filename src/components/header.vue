<template>
  <v-app-bar app fixed>
    <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
    <input class="mx-10" type="text" placeholder="Search.." >
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-help</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.getDrawer;
      },
      set(bool) {
        this.$store.commit("setDrawer", bool);
      }
    }
  }
};
</script>