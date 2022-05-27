<template>
  <div>
    <div v-if="selectedFirst !== '' && selectedSecond !== '' && value > 0">
      <div class="text1 text">
        <b> {{ value }} </b> {{ selectedFirst }}
      </div>
      <div class="text3 text">
        <b>{{ currency * value }} </b> {{ selectedSecond }}
      </div>
    </div>
    <div v-else>
      <p>Значения не выбраны</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectedSecond: {
      type: String,
    },
    selectedFirst: {
      type: String,
    },
    fixing: {
      type: Array,
    },
    currency: {
      type: Number,
    },
    value: {
      type: String,
    },
  },
};
</script>
<style>
.text {
  padding: 10px 0;
}
</style>
