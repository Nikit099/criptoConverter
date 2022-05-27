<template>
  <div>
    <ul class="list">
      <li
        :class="{ active: elem.focus }"
        v-for="elem in elements"
        :key="elem.name"
        :id="elem.name"
        @click="focusElem"
      >
        <div class="img">
          <img :src="elem.img" alt="criptoIMG" />
        </div>

        <p>{{ elem.name }}</p>

        <div>
          <input
            min="0"
            max="100"
            type="number"
            :id="elem.name"
            :value="elem.scale"
            @input="changeVlaue"
            @click.stop
          />
        </div>

        <div class="scale" v-if="elem.scale < 101 && elem.scale > -1">
          {{ elem.percentages }}%
        </div>
        <div class="scale" v-else>От 100 до 0</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    elements: {
      type: Array,
    },
    sumInp: {
      type: Number,
    },
  },

  methods: {
    changeVlaue(e) {
      this.$emit("change", e.target.value, e.target.id);
      this.$emit("plusInp");
    },
    focusElem(e) {
      this.$emit("setFocus", e.target.id);
    },
  },
};
</script>
<style scoped>
.list {
  list-style-type: none;
  background: rgb(238, 238, 238);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 25%);
  padding: 0;
}
li {
  padding: 10px;
  min-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid rgb(206, 206, 206);
}
li:hover {
  background: rgb(224, 224, 224);
}
.img {
  max-width: 50px;
}
img {
  width: 100%;
}
.scale {
  width: 100px;
}
.active {
  background-color: rgb(224, 224, 224);
}
input {
  outline: none;
  width: 100px;
}
</style>
