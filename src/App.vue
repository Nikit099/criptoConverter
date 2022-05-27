<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbarVue from "./components/form/navbar.vue";
import Navbar from "./components/form/navbar.vue";
export default {
  components: {
    navbarVue,
    Navbar,
  },
  data() {
    return {};
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,600;0,700;1,200;1,300;1,500;1,600&display=swap");

*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
</style>
