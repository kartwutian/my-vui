<template>
  <div>
    <nav-bar>
      <nav-bar-back-icon slot="left" ></nav-bar-back-icon>
      <nav-bar-next-icon slot="right"></nav-bar-next-icon>
    </nav-bar>
    <h1 style="text-align: center;line-height: 100px;color: #f36;">一个随便玩玩的ui框架</h1>
    <grids-group >
      <grids-item  v-for="item in this.$store.state.grids.gItems" :link="item.link" :key="item.icon">
        <i :class="item.icon" slot="icon" ></i>
        <span class="text" slot="text" >{{ item.text }}</span>
      </grids-item>
    </grids-group>
    <div>{{ count }}</div>
    <div @click="increment">add</div>
  </div>
</template>

<script>
  import {NavBar, NavBarBackIcon, NavBarNextIcon} from './navbar'
  import {GridsItem, GridsGroup} from './grids'
  export default {
    name: 'entry',

    computed: {
      count (){
        return this.$store.state.count
      },
      link () {
          return '/'
      }
    },
    methods: {
      increment(){
        this.$store.state.count++
      }
    },
    components: { NavBar, NavBarBackIcon, NavBarNextIcon,GridsItem, GridsGroup }

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
