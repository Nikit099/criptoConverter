<template>
  <div class="inpBlok">
    <input :value="value" @input="changeInput" min="1" type="number" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    changeInput(e) {
      this.$emit("setValue", e.target.value);
    },
  },
};
</script>
<style scoped>
inpBlok {
  max-width: 286px;
}
input {
  background-color: #fbfbfb;
  border: 1px solid #e8e8e8;
  width: 100%;
  height: 27px;
  border-radius: 5px;
  margin-bottom: 28px;
}
input:focus {
  outline: none;
}
</style>
