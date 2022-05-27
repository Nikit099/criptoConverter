<template>
  <div>
    <div class="formChart">
      <canvas @click="clickChart" id="myChart"></canvas>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
export default {
  props: {
    elements: {
      type: Array,
    },
    percentages: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const ctx = document.querySelector("#myChart");
    const data = {
      labels: ["Btc", "Eth"],
      datasets: [
        {
          label: "My First Dataset",
          data: this.percentages,
          backgroundColor: ["#fb9118", "#5d628a"],
          hoverOffset: 4,
        },
      ],
    };
    this.myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
    });
  },
  watch: {
    percentages(newElem) {
      this.myChart.data.datasets[0].data = newElem;

      this.myChart.update();
    },
  },
};
</script>
<style scoped>
.formChart {
}
#myChart {
}
</style>
