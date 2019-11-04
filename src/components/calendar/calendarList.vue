<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <calendar />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from "vue";
import calendar from "../home/calendar.vue";
Vue.component("calendar", calendar);
export default {};
</script>