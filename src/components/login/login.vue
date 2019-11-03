<template>
  <v-container fluid fill-height class="background">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-img
          max-width="100px"
          class="ma-auto d-block"
          :lazy-src="'../assets/logo.png'"
          :src="'../assets/logo.png'"
        ></v-img>
        <v-card flat dark color="transparent" id="login">
          <v-card-text>
            <div class="headline white--text">Login</div>
            <v-btn @click="login()">Login</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./login.js" defer></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background-image: url("../../assets/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>