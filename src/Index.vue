<template>
  <div id="app">
    <the-navbar></the-navbar>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import firebase from "firebase"
import TheNavbar from "@/components/TheNavbar.vue"
import TheFooter from "@/components/TheFooter.vue"
import { UPDATE_USER_STATE } from "@/store/constants"

export default {
  components: {TheNavbar, TheFooter},
}
</script>
