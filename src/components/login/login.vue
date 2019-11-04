<template>
  <v-container fluid fill-height class="background">
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 sm8 md4>
        <v-img
          max-width="150px"
          class="ma-auto d-block"
          lazy-src="../../assets/white_rgu_logo.png"
          src="../../assets/white_rgu_logo.png"
        ></v-img>
        <v-card light class="pt-5 mt-5">
          <v-img
            class="ml-4"
            width="250"
            lazy-src="../../assets/microsoft-logo-dark.png"
            src="../../assets/microsoft-logo-dark.png"
          ></v-img>
          <v-card-text>
            <div class="headline font-weight-bold black--text">Sign in</div>
            <div class="subheading">To access system pleaes login with RGU office 365 credientials.</div>
            <div class="subheading">You will be redirected to Microsoft Portal.</div>
            <v-btn @click="login()" block color="primary" class="white--text">Login with Microsoft</v-btn>
            <a :href="forgottenPasswordLink" target="_blank" class="text-center">
              <div>Forgotten Password</div>
            </a>
          </v-card-text>
          <v-card-text style="background-color: #FBEAFC">
            <p>For help logging into RGU services go to</p>
            <a href="https://www.rgu.ac.uk/it-accounts-FAQs" target="_blank">
              <p>https://www.rgu.ac.uk/it-accounts-FAQs</p>
            </a>
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