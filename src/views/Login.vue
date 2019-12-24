<template>
  <base-container>
    <base-form-card>
      <h2 class="subtitle is-2 has-text-centered">{{ $route.params.type || "Iniciar Sesión" }}</h2>
      <the-login-form :handler="onSubmit" :label="$route.params.type || 'Iniciar Sesión'"></the-login-form>
    </base-form-card>
  </base-container>
</template>

<script>
import BaseContainer from "@/layouts/BaseContainer.vue";
import BaseFormCard from "@/layouts/BaseFormCard.vue";
import TheLoginForm from "@/components/TheLoginForm.vue";

import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: { TheLoginForm, BaseFormCard, BaseContainer },
  data: () => ({
    email: "",
    password: ""
  }),
  computed: {
    ...mapGetters(["user"]),
    nextRoute() {
      return this.$route.query.redirect || "/";
    }
  },
  watch: {
    user(auth) {
      if (!!auth) {
        this.$router.replace(this.nextRoute);
      }
    }
  },
  methods: {
    async onSubmit(email, password) {
      let type = this.$route.params.type == "Registro" ? "register" : "login";
      const auth = await this.$auth.login(email, password, type);
    }
  }
};
</script>

<style scoped>
.btn-center {
  margin-left: auto;
  margin-right: auto;
}
</style>
