<template>
  <div>
    <div class="containerList">
      <h1>Конвертер валют</h1>
      <div class="convertList">
        <div class="convertFields">
          <div class="flexFields">
            <CriptoCount
              class="numberSlect"
              :value="value"
              @setValue="setValue"
            />
            <div class="flexSelect">
              <CriptoSelect
                :modelValue="selectedFirst"
                @update="changeSelectedFirst"
                :selectedArray="selected"
              />
              <button @click="revers">
                <img src="@/img/two-arrows.png" alt="two-arrows" />
              </button>
              <CriptoSelect
                :modelValue="selectedSecond"
                @update="changeSelectedSecond"
                :selectedArray="selected"
              />
            </div>
            <div class="resultConvert">
              <ConvertCount
                :value="value"
                :fixing="fixing"
                :selectedFirst="selectedFirst"
                :selectedSecond="selectedSecond"
                :currency="currency"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="chartE">
        <h2>График Ethereim за последние 14 дней</h2>
        <ChartVue2 />
      </div>
    </div>
  </div>
</template>
<script>
import CriptoCount from "../form/criptoCount.vue";
import CriptoSelect from "../form/criptoSelect.vue";
import ConvertCount from "../inform/convertCount.vue";
import ChartVue2 from "../form/chart2.vue";

import axios from "axios";
export default {
  components: {
    CriptoCount,
    CriptoSelect,
    ConvertCount,
    ChartVue2,
  },
  data() {
    return {
      selected: [
        {
          vs: "btc",
          ids: "bitcoin",
          Value: "Bitcoin (BTC)",
        },
        {
          vs: "eth",
          ids: "ethereum",
          Value: "Ether (ETH)",
        },
        {
          vs: "usd",
          ids: "usd",
          Value: "US Dollar (USD)",
        },
      ],
      selectedFirst: "",
      selectedSecond: "",
      currency: 0,
      fixing: ["", ""],
      value: "1",
    };
  },
  methods: {
    changeSelectedFirst(select) {
      this.selectedFirst = select;
    },
    changeSelectedSecond(select) {
      this.selectedSecond = select;
    },
    revers() {
      const first = this.fixing[0];
      this.fixing[0] = this.fixing[1];
      this.fixing[1] = first;
      const selfirst = this.selectedFirst;
      this.selectedFirst = this.selectedSecond;
      this.selectedSecond = selfirst;
    },
    setValue(value) {
      this.value = value;
    },
    async fetchCours(ids, vs) {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`
        );
        this.currency = res.data[ids][vs];
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  watch: {
    selectedFirst(newValue) {
      this.selected.map((i) => {
        if (newValue === i.Value) {
          this.fixing[0] = i.vs;
        }
      });
    },

    selectedSecond(newValue) {
      this.selected.map((i) => {
        if (newValue === i.Value) {
          this.fixing[1] = i.vs;
        }
      });
    },
    fixing: {
      handler(newElem) {
        let ids = "";
        let vs = "";
        this.selected.map((s) => {
          if (newElem[0] === s.vs) {
            ids = s.ids;
          }
        });
        this.selected.map((s) => {
          if (newElem[1] === s.vs) {
            vs = s.vs;
          }
        });
        this.fetchCours(ids, vs);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
@media (max-width: 530px) {
  .flexSelect {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .convertList {
    height: 300px;
  }
  h2 {
    font-size: 18px;
  }
  h1 {
    font-size: 22px;
  }
}
@media (min-width: 530px) {
  .convertList {
    height: 245px;
  }
}
h2 {
  text-align: center;
}
h1 {
  text-align: center;
  margin-bottom: 10px;
}
.containerList {
  padding: 20px;
  max-width: 945px;
  margin: 20px auto;
}
.convertList {
  max-width: 810px;

  background-color: #f2f2f2;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 25%);
}
.convertFields {
  margin: 0 auto;
  max-width: 636px;
  padding: 52px 20px 0;
}
.flexFields {
  display: flex;
  flex-direction: column;
}
.flexSelect {
  display: flex;
  gap: 7px;
  justify-content: space-around;
}
.resultConvert {
  text-align: center;
}
button {
  width: 27px;
  height: 27px;
  border: none;
  background-color: #5d628a;
  border-radius: 5px;
}
button:hover {
  background-color: #767cac;
}
button:active {
  background-color: #5a608d;
}
.chartE {
  margin-top: 20px;
}
img {
  width: 100%;
}
</style>
