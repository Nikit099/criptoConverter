<template>
  <div class="Chart">
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {};
  },
  mounted() {
    const ctx = document.querySelector("#myChart");
    const labels = [];
    const dataset = [];
    const date = new Date().getDate();
    for (let i = 0; i < 14; i++) {
      const elem = date - 13 + i;
      labels.push(elem);
    }
    fetchHistory(labels);
    async function fetchHistory(getDate) {
      const req = getDate.map((d) =>
        fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${d}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`
        )
      );
      Promise.all(req)
        .then((resp) => {
          const dataResults = resp.map((response) => response.json());
          return Promise.all(dataResults);
        })
        .then((dates) => {
          dates.map((d) => {
            dataset.unshift(d.market_data.current_price.usd);
          });
          createData();
        });
    }

    function createData() {
      const data = {
        labels: labels,
        datasets: [
          {
            label: "BTC/USD",
            data: dataset,
            fill: true,
            borderColor: "#fb9118",
            tension: 0,
          },
        ],
      };
      new Chart(ctx, {
        type: "line",
        data: data,
      });
    }
  },
};
</script>
<style scoped>
.Chart {
  max-width: 100%;
}
#myChart {
  width: 100%;
}
</style>
