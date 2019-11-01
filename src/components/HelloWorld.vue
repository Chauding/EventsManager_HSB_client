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
                <div class="headline">Name</div><div></div>
                <div class="subheadline">ROLE IN UNI</div>
                <br>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-content>
      <calendar/>
    </v-content>
  </v-container>
</template>

<script>
import calendar from './calendar'
export default {
  components: { calendar },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
