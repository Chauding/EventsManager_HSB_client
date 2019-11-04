<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="headline">404 Page not found</div>
        <div class="subheading">Sorry for the inconvenience</div>
        <v-btn v-if="$store.getters.isLoggedIn" @click="$router.push('/dashboard')">Go to dashboard</v-btn>
        <v-btn v-else @click="$router.push('/login')">Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>