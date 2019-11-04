<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs10>
        <v-layout row wrap>
          <v-flex xs4>
            <!-- <v-layout row wrap>
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
            </v-layout>-->
            <v-list two-line subheader>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar>
                    <img
                      src="https://images.pexels.com/photos/442544/pexels-photo-442544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="profile"
                      cover
                    />
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Name</v-list-item-title>
                  <v-list-item-subtitle>Role</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <calendar v-mdoel />
      </v-flex>
    </v-layout>
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
    token() {
      return this.$store.getters.getToken;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
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
