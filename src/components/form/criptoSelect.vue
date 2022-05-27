<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled selected>Выбери валюту</option>
    <option
      v-for="select in selectedArray"
      :key="select.vlaue"
      :value="select.Value"
    >
      {{ select.Value }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    selectedArray: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
    },
  },
  methods: {
    changeOption(e) {
      this.$emit("update", e.target.value);
    },
  },
};
</script>
<style scoped>
select {
  background-color: #fbfbfb;
  border: 1px solid #e8e8e8;
  width: 293px;
  height: 27px;
  padding: 5px;
  border-radius: 5px;
}
option {
  border: 5px solid black;
}
select:focus {
  outline: none;
}
</style>
