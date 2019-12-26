<template>
  <b-navbar class="is-dt-dark">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ name: 'home' }">
        <h3 class="title is-3 has-text-dt-light">Documentive</h3>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons" v-show="!user">
          <router-link
            class="button is-dt-primary"
            :to="{ name: 'login', params: { type: 'Registro' } }"
          >
            <strong>Registrarme</strong>
          </router-link>
        </div>
      </b-navbar-item>
      <b-navbar-item
        v-show="!user"
        tag="router-link"
        class="has-text-white"
        :to="{ name: 'login' }"
      >
        Iniciar Sesión
      </b-navbar-item>
      <b-navbar-item
        v-show="user"
        tag="router-link"
        class="has-text-white"
        :to="{ name: 'home' }"
      >
        Home
      </b-navbar-item>
      <b-navbar-item
        v-show="user"
        tag="router-link"
        class="has-text-white"
        :to="{ name: 'logout' }"
      >
        Logout
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState(["user"])
    }
  };
</script>
