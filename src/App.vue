<template>
  <v-app>
    <template>
      <app-drawer v-if="isLoggedIn"></app-drawer>
      <app-header v-if="isLoggedIn"></app-header>
    </template>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    sessionUser() {
      return this.$store.getters.getSessionUser;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: var(--v-lightbg-base);
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}

.fade-enter-active {
  transition-delay: 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.cursor {
  cursor: pointer !important;
}
</style>