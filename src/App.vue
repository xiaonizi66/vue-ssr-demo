<template>
  <div id="app">
    <p class="nav">
      <router-link :class="{'currentClass':path=='/'}" to="/">foo</router-link>
      <router-link :class="{'currentClass':path=='/Bar'}" to="/Bar">Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // data(){
  //     return {
  //         path: this.$store.state.route.path
  //     }
  // },
  computed: {
    path() {
      return this.$store.state.route.path;
    }
  }
};
</script>
<style lang="less" scope>
.nav {
  text-align: center;
  display: flex;
  align-items: center;
  a {
    flex: 2;
    background: #f5f5f5;
    text-decoration: none;
    color: #333;
    &.currentClass {
      background: #f43553;
      color: #fff;
    }
  }
}
</style>