<template>
  <div id="app">
    <the-navbar></the-navbar>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheNavbar from "@/components/TheNavbar.vue"
  import TheFooter from "@/components/TheFooter.vue"

  export default {
    components: {TheNavbar, TheFooter}
  }
</script>
