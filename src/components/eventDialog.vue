<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-card-title class="headline">Create New Event</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="value.title" prepend-icon="folder"></v-text-field>
            <v-textarea label="Information" v-model="value.description" prepend-icon="edit"></v-textarea>
            <v-menu v-model="startMenu" :close-on-content-click="false" max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="this.value.toDateTime"
                  clearable
                  label="Start"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="this.value.toDateTime" @change="startMenu = false"></v-date-picker>
            </v-menu>
            <v-menu v-model="endMenu" :close-on-content-click="false" max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="this.value.fromDateTime"
                  clearable
                  label="End Date"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="this.value.fromDateTime" @change="endMenu = false"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="success" text @click="$emit('onClose')">Cancel</v-btn>
          <v-btn class="success" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import moment from "moment";
export default {
  props: ["dialog", "value"],
  data() {
    return {
      startDate: moment(),
      endDate: moment(),
      startMenu: false,
      endMenu: false
    };
  },
  methods: {
    save() {}
  },
  computed: {
    formattedStartMomentjs() {
      return this.value.toDateTime
        ? moment(this.value.toDateTime).format("dddd, MMMM Do YYYY")
        : "";
    },
    formattedEndMomentjs() {
      return this.value.fromDateTime
        ? moment(this.value.fromDateTime).format("dddd, MMMM Do YYYY")
        : "";
    }
  }
};
</script>