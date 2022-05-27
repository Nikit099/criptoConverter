<template>
  <div class="nav">
    <router-link class="link link1" to="/">График Bitcoin</router-link>
    <router-link class="link link2" to="/eth">График Ethereum</router-link>

    <router-link class="link link3" to="/portfolio">Мой портфель</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media (max-width: 530px) {
  .link {
    text-align: center;
    font-size: 13px;
  }
}
@media (min-width: 530px) {
  .link {
    font-size: 17px;
  }
}
.link {
  color: #000;
  margin: 0 15px;

  text-decoration: none;
  transition: 0.3s;
}
.link:hover {
  color: rgb(130, 136, 184);
}
.nav {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 25%);

  display: flex;
  justify-content: center;
  background-color: rgb(226, 226, 226);
  padding: 20px 0;
  margin: 0;
}
</style>
