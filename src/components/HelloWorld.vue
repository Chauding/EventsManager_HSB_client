<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs10>
        <v-layout row wrap>
          <v-flex xs4>
            <v-layout row wrap>
              <v-flex xs3>
                <v-avatar size="100" max-width="100px">
                  <img
                    src="https://images.pexels.com/photos/442544/pexels-photo-442544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="profile"
                    cover
                  />
                </v-avatar>
              </v-flex>
              <v-flex xs6 class="mt-4">
                <div class="headline">Name</div>
                <div></div>
                <div class="subheadline">ROLE IN UNI</div>
                <br />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-content>
      <calendar />
    </v-content>
  </v-container>
</template>

<script>
import calendar from "./calendar";
export default {
  components: { calendar },
  data() {
    return {};
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  },
  mounted() {
    if (this.$route.query.token) {
      this.$store.commit("setIsLoggedIn", true);
      this.$store.commit("setToken", this.$route.query.token);
      this.$store.commit("setSessionUser", {});
    }
  },
  created() {
    if (this.$route.query.token) {
      this.$store.commit("setToken", this.$route.query.token);
      this.$store.commit("setIsLoggedIn", true);
    }
  }
};
</script>
