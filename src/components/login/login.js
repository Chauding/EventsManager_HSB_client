// import Vue from 'vue'
// import axios from '../axiosCaller.js'
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      showPassword: false,
      dictionary: {}
    }
  },
  mounted() {},
  methods: {
    login: function () {
      // let scope = this
      axios.get('http://localhost:3000/').then(function (res) {
        // console.log(res)
        window.location.href = res.data
      }).catch(function (err) {
        alert(err)
      })
    }
  }
}