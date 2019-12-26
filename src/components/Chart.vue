<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </div>
    <div class="card-content">
      <apexchart
        class="chart"
        type="line"
        :height="height"
        :width="width"
        :options="options"
        :series="data"
      ></apexchart>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Chart",
    props: {
      options: {
        required: false,
        type: Object
      },
      data: {
        required: true,
        type: Array
      },
      title: {
        required: false,
        type: String
      },
      height: {
        required: false,
        default: "auto"
      },
      width: {
        required: false,
        default: "100%"
      }
    }
  };
</script>
