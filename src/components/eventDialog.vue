<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-card-title class="headline">Create New Event</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="start"
                  label="Start date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="start"></v-date-picker>
            </v-menu>
            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="end"
                  label="End Date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="end"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="success" text @click="$emit('onClose')">Cancel</v-btn>
          <v-btn flat class="success" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["dialog", "value"],
  data() {
    return {};
  },
  methods: {
    save() {}
  },
  computed: {}
};
</script>