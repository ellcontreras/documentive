<template>
  <div>
    <h3 class="subtitle is-3 has-text-dt-gray is-marginless">{{ greeting }}</h3>
    <small>{{ message }}</small>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TheMotd",
  data: () => ({
    message: "",
    greeting: "Good morning!"
  }),
  mounted() {
    axios
      .get("http://quotes.rest/qod.json?category=inspire")
      .then(({ data }) => {
        this.message = data.contents.quotes[0].quote;
      })
      .catch(() => {
        this.message = "You are awesome!";
      });

    this.$nextTick(() => this.setGreeting());
  },
  methods: {
    setGreeting() {
      let hour = new Date().getHours();

      if (hour < 12) {
        this.greeting = "Good morning!";
      } else if (hour < 18) {
        this.greeting = "Good afternoon!";
      } else {
        this.greeting = "Good evening!";
      }
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 3rem;
}
</style>
