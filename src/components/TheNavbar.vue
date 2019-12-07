<template>
  <b-navbar class="is-dt-dark">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{name: 'home'}">
          <h3 class="title is-3 has-text-dt-light">Documentive</h3> 
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link class="button is-dt-primary" to="/">
            <strong>Registrarme</strong>
          </router-link> 
        </div>
      </b-navbar-item>
      <b-navbar-item tag="router-link" class="has-text-white" to="/">
        Iniciar Sesión
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
