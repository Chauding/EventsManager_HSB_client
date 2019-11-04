<template>
  <v-navigation-drawer v-model="drawer" fixed app dark color="primary">
    <v-container>
      <v-img
        src="../assets/white_rgu_logo.png"
        lazy-src="../assets/white_rgu_logo.png"
        max-width="80px"
        height="auto"
        class="ma-auto d-block"
      ></v-img>
      <v-btn block class="primary--text mt-3" color="white">Add Event</v-btn>
    </v-container>
    <v-list dense class="primary" dark>
      <template v-for="(item, i) in items">
        <v-subheader v-if="item.heading" :key="i">{{ item.heading }}</v-subheader>
        <v-divider dark v-if="item.divider" class="my-3" :key="i"></v-divider>
        <!--  group start -->
        <v-list-group
          dark
          v-if="item.children"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item dark v-for="child in item.children" :key="child.title" :to="child.path">
            <v-list-item-icon>
              <v-icon>{{child.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- group end -->
        <v-list-item v-if="item.path && !item.children" :key="item.text" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="grey--text">{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-list>
      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="grey--text">Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <event-dialog :dialog="eventDialog" v-model="selectedEvent" @onClose="eventDialog = false" />
  </v-navigation-drawer>
</template>
<script>
import EventDialog from "./eventDialog.vue";
import axios from "axios";
import moment from "moment";
export default {
  components: [{ "event-dialog": EventDialog }],
  data() {
    return {
      items: [
        { text: "Dashboard", icon: "dashboard", path: "/dashboard" },
        { text: "Calendar", icon: "event", path: "/calendar" },
        {
          text: "Admin Section",
          icon: "supervised_user_circle",
          children: [
            { title: "Users", icon: "account_circle", path: "/users" },
            { title: "Events", icon: "event", path: "/events" }
          ]
        }
      ],
      baseEventObj: {
        title: null,
        description: null,
        toDateTime: moment(),
        fromDateTime: moment(),
        staff: [],
        tasks: []
      }
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.getDrawer;
      },
      set(bool) {
        this.$store.commit("setDrawer", bool);
      }
    },
    eventDialog: {
      get() {
        return this.$store.getters.getEventDialog;
      },
      set(bool) {
        this.$store.commit("setEventDialog", bool);
      }
    },
    selectedEvent() {
      return this.$store.getters.getSelectedEvent;
    }
  },
  methods: {
    createNewEvent() {
      this.eventDialog = true;
      this.$store.commit(
        "setSelectedEvent",
        JSON.parse(JSON.stringify(this.baseEventObj))
      );
    },
    logout() {
      let scope = this;
      axios
        .get("http://localhost:3000/logout")
        .then(function() {
          scope.$store.commit("setSnackBar", {
            text: "Successfully logged out",
            show: true
          });
          this.$store.commit("setIsLoggedIn", false);
          this.$store.commit("setToken", null);
          this.$store.commit("setSessionUser", {});
        })
        .catch(function(err) {
          scope.$store.commit("setSnackBar", { text: err, show: true });
        });
    }
  }
};
</script>