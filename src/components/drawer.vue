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
    </v-container>
    <v-list dense class="primary" dark>
      <template v-for="(item, i) in items">
        <v-subheader v-if="item.heading" :key="i">{{ item.heading }}</v-subheader>
        <v-divider dark v-else-if="item.divider" class="my-3" :key="i"></v-divider>
        <!--  group start -->
        <v-list-group
          v-else-if="item.children"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.children" :key="child.title" :to="child.path">
            <v-list-item-icon>
              <v-icon>{{child.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- group end -->

        <!-- normal list item start -->
        <v-list-item :key="i" v-else :to="item.path">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- normal list item end -->
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { text: "Dashboard", icon: "dashboard", path: "/dashboard" },
        { text: "Calendar", icon: "events", path: "/calendar" },
        {
          text: "Adin Section",
          icon: "supervised_user_circle",
          children: [
            { title: "Users", icon: "account_circle", path: "/users" },
            { title: "Events", icon: "events", path: "/events" }
          ]
        }
      ]
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
    }
  }
};
</script>