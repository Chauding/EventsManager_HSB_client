<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="purple" class="mr-10" dark v-on="on">+ Add event</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Add a new Event</v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
                <v-menu max-width="290">
                    <template v-slot:activator="{ on }">
                        <v-text-field :value="start" label="Start date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                     </template>
                    <v-date-picker v-model="start"></v-date-picker>
                </v-menu>
                <v-menu max-width="290">
                    <template v-slot:activator="{ on }">
                        <v-text-field :value="end" label="End Date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="end"></v-date-picker>
                </v-menu>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="success" text @click="dialog = false">Cancel</v-btn>
          <v-btn flat class="success" text @click="sumbit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import format from 'date-fns/format'
  export default {
    data () {
      return {
        title: '',
        content: '',
        end: null,
        start: null,
        dialog: false,
      }
    },
    methods:{
        submit(){
            console.log(this.title, this.content)
        }
    },
    computed: {
        formattedDate(){
            return this.due ? format(this.due,  'Do MMM YYY'): ''
        }
    }
  }
</script>