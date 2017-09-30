<template>
  <transition name="component-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import "./styles/demo.less";
  @import "../ydui/styles/base.less";
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-active {
    opacity: 0;
  }
</style>
