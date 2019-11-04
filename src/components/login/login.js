// import Vue from 'vue'
// import axios from '../axiosCaller.js'
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      showPassword: false,
      forgottenPasswordLink: 'https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2freprocess%3fctx%3drQIIAXWRO2_TUACF47xoKlQqFphQJR4DIYmdaydxUIc010kcYjttkrr2Erm201zHr9o3TsnShYGxEhOdEANIHemCkPgDRUgdmLqxVUwVEhILUtMfwHLO8g1H53uaoPJU9RENaEYr77I5ViuBHM1SZE6ji6UcYEAJFEnKYEgQ3F1efXb49d3b0yr88Orh88ffnvw8Ie6NMfbDaqEwm83y3miEdDOve07hM0GcE8QlQRzHU6aba26cxMMSKJMVmgL0oipFqsyAvAhVJEAOKP0JVorCXOqRpGBtzjoyT4twgCW4NREcjlKh4YiW7QjQRiJsWCLksGApM_WGh-p4wc-lfg2rkGNUq-FIcttRLH5-Eb8j1aZ4XLwJL0Bz83c8M_ICZ-h7IT5OfCQk33R5o-65rqnj_A1muhjpGkae2w083wwwMsN1T2N0UTamdjTsa5N-JDd7kWGyLWEIxP2DAYkG0navPmiX2qEojTQFI3Jrt6WGfklxFeh0OXZvp1nJTaZcm-V3lD0gBeLGgAfsuF7ThY7qdGuRTIe2NEQjQ0R2xZiAcFD0gyjqsArvfEqkF7c6nnuWWFmMcpGx5gfeCNnmeZL4lbxNpqpLS8urK_fTa7G_SeJ9amHr6o_y4_LwX-fNy4vM99MHsbNUYZ_f7sjOQWMyLUTZad0ws13Z1s0XDW7bgtmow89DmqFb1uausE5WqaM0cZROX6WJ17diXzL_c30N0&mkt=en-GB&hosted=0&device_platform=macOS',
      loginLink: null
    }
  },
  methods: {
    login: function () {
      window.location.href = this.loginLink
    },
    getLoginLink() {
      let scope = this
      axios.get('http://localhost:3000/').then(function (res) {
        scope.loginLink = res.data
      }).catch(function (err) {
        scope.$store.commit("setSnackBar", {
          text: err,
          show: true
        });
      })
    }
  },
  mounted() {
    if (!this.loginLink && this.loginLink.length === 0) {
      this.getLoginLink()
    }
  },
  created() {
    this.getLoginLink()
  }
}