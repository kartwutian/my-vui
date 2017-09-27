<template>
  <div>
    <nav-bar :back="back">
        <nav-bar-back-icon slot="left" ></nav-bar-back-icon>
    </nav-bar>

  </div>
</template>

<script>
  import {NavBar, NavBarBackIcon, NavBarNextIcon} from './navbar'
  export default {
    name: 'buttons',
    mounted: function () {
      console.log(this.$router)
    },
    computed: {
      back (){
        return this.$store.state.buttons.back
      }
    },
    components: { NavBar, NavBarBackIcon, NavBarNextIcon }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon{
    font-size: 20px;
    line-height: 1;
    color: #f00
  }
  .text{
    font-size: 14px;
  }
</style>
