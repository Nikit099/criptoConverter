<template lang="">
  <div class="wind">
    <div class="containerPort">
      <div class="portf">
        <div class="elem">
          <h2 v-if="showPercentages()">{{ showPercentages() }}%</h2>
          <h2 v-else>Валюта не выбрана</h2>
          <portfolio
            :sumInp="sumInp"
            :elements="elements"
            @change="changeValue"
            @plusInp="getSumInp"
            @setFocus="setActive"
          />
        </div>
        <div class="chart">
          <chartPie :elements="elements" :percentages="percentages" />

          <p v-if="sumUSD">
            Текущая оценка портфеля в долларах <b>{{ sumUSD.toFixed(1) }}$</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chartPie from "@/components/form/chartPie.vue";
import portfolio from "@/components/inform/portfolio.vue";
import axios from "axios";
export default {
  components: {
    chartPie,
    portfolio,
  },
  data() {
    return {
      elements: [],
      sumInp: 0,
      percentages: [],
      sumUSD: 0,
      usdArray: [],
    };
  },

  mounted() {
    this.GetElements();
    this.getUsdArray();
  },
  methods: {
    changeValue(value, id) {
      this.elements.forEach((i) => {
        if (i.name === id) {
          return (i.scale = value);
        }
      });
    },
    async getUsdArray() {
      const resB = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const resE = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      this.usdArray.push(resB.data.bitcoin.usd);
      this.usdArray.push(resE.data.ethereum.usd);
      if (localStorage.getItem("elements")) {
        this.elements.map((elem) => {
          this.sumUSD += Number(elem.scale) * Number(elem.price);
        });
      } else {
        this.sumUSD = this.usdArray.reduce((prev, curr) => prev + curr);
      }
    },
    showPercentages() {
      let inform = "";
      this.elements.map((elem) => {
        if (elem.focus) {
          inform = elem.id.toUpperCase() + " " + elem.percentages;
        }
      });
      return inform;
    },
    setActive(id) {
      this.elements.forEach((elem) => {
        if (elem.name === id) {
          return (elem.focus = !elem.focus);
        } else {
          return (elem.focus = false);
        }
      });
    },
    async GetElements() {
      if (localStorage.getItem("elements")) {
        this.elements = JSON.parse(localStorage.getItem("elements"));
        this.percentages = this.elements.map((i) => i.percentages);
      } else {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=2&page=1&sparkline=false"
        );
        const fetchElem = res.data;
        fetchElem.map((i) => {
          const newElem = {
            id: i.id,
            name: i.symbol,
            img: i.image,
            scale: 1,
            percentages: 50,
            focus: false,
          };
          this.sumInp += newElem.scale;
          this.elements.push(newElem);
          this.percentages = this.elements.map((i) => i.percentages);

          localStorage.setItem("elements", JSON.stringify(this.elements));
        });
      }
    },
    getSumInp() {
      this.sumInp = 0;
      this.elements.map((elem) => {
        this.sumInp += Number(elem.scale);
      });
    },
  },
  watch: {
    sumInp(newElem) {
      this.sumUSD = 0;
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].percentages =
          (100 * Number(this.elements[i].scale)) / newElem;
        this.elements[i].percentages = this.elements[i].percentages.toFixed(2);
        this.elements[i].price = this.usdArray[i];
      }
      this.elements.map((elem) => {
        this.sumUSD += Number(elem.scale) * Number(elem.price);
      });
      this.percentages = this.elements.map((i) => i.percentages);
      localStorage.setItem("elements", JSON.stringify(this.elements));
    },
  },
};
</script>
<style scoped>
.containerPort {
  max-width: 1245px;
  margin: 0 auto;
}
.portf {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
}
.chart {
  width: 500px;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
p {
  font-size: 21px;
  margin-top: 40px;
  text-align: center;
}
</style>
