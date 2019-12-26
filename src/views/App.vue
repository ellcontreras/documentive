<template>
  <div>
    <div class="background"></div>
    <div class="container">
      <div class="columns has-text-dt-gray">
        <div class="column is-one-third">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
          <strong class="has-text-centered block is-marginless has-text-dt-gray"
            >Luis Contreras Guerra</strong
          >
          <small class="has-text-centered block">Software Developer</small>

          <div class="columns has-text-centered">
            <div class="column is-one-third block">
              <b-icon icon="user"></b-icon>
            </div>
            <div class="column is-one-third block">
              <b-icon icon="comments"></b-icon>
            </div>
            <div class="column is-one-third block">
              <b-icon icon="sticky-note"></b-icon>
            </div>
          </div>

          <div class="columns has-text-centered">
            <div class="column is-half">
              <b-icon icon="home" size="is-large"></b-icon>
              <strong class="block has-text-dt-gray">Home</strong>
            </div>
            <div class="column is-half">
              <b-icon icon="user" size="is-large"></b-icon>
              <strong class="block has-text-dt-gray">Profile</strong>
            </div>
          </div>
        </div>
        <div class="column">
          <the-motd></the-motd>
          <chart
            :options="options"
            :data="series"
            height="350px"
            title="Datos de prueba"
          ></chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TheMotd from "@/components/TheMotd.vue";
  import Chart from "@/components/Chart.vue";

  export default {
    name: "App",
    components: { TheMotd, Chart },
    data: () => ({
      options: {
        labels: ["Apples", "Oranges", "Berries", "Grapes"]
      },
      series: [
        {
          name: "hola",
          data: [1, 1.9, 2, 3]
        }
      ]
    })
  };
</script>

<style scoped>
  .background {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    height: 430px;
    background-color: #6e00ff;
    border-bottom-left-radius: 2.5rem;
  }

  .chart {
    width: 100%;
    height: 30px !important;
  }

  figure {
    margin: auto;
  }

  .card {
    border-radius: 10px;
  }

  .block {
    display: block;
  }
</style>
