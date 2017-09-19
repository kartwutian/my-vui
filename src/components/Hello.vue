<template>
  <div>

    <nav-bar>
      <nav-bar-back-icon slot="left"></nav-bar-back-icon>
      <nav-bar-next-icon slot="right"></nav-bar-next-icon>
    </nav-bar>
    <h1 style="text-align: center;line-height: 50px">一个随便玩玩的ui框架</h1>
    <grids-group >
      <grids-item :link="this.$store.state.grids.link[0]">
            <i class="vfont icon-btn-mor icon" slot="icon"></i>
            <span class="text" slot="text">btn</span>
      </grids-item>
      <grids-item :link="this.$store.state.grids.link[0]">
            <i class="vfont icon-time icon" slot="icon"></i>
            <span class="text" slot="text">123萨达法萨芬撒的发大水发撒旦法第三方三房</span>
      </grids-item>
      <grids-item :link="this.$store.state.grids.link[0]">
            <i class="vfont icon-time icon" slot="icon"></i>
            <span class="text" slot="text">123萨达法萨芬撒的发大水发撒旦法第三方三房</span>
      </grids-item>
      <grids-item :link="this.$store.state.grids.link[0]">
            <i class="vfont icon-time icon" slot="icon"></i>
            <span class="text" slot="text">123萨达法萨芬撒的发大水发撒旦法第三方三房</span>
      </grids-item>
      <grids-item :link="this.$store.state.grids.link[0]">
            <i class="vfont icon-time icon" slot="icon"></i>
            <span class="text" slot="text">123萨达法萨芬撒的发大水发撒旦法第三方三房</span>
      </grids-item>
      <grids-item :link="this.$store.state.grids.link[0]">
            <i class="vfont icon-time icon" slot="icon"></i>
            <span class="text" slot="text">123萨达法萨芬撒的发大水发撒旦法第三方三房</span>
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
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      count (){
        return this.$store.state.count
      }
    },
    methods: {
      increment(){
        this.$store.state.count++
      }
    },
    components: {NavBar, NavBarBackIcon, NavBarNextIcon,GridsItem, GridsGroup}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .icon{
      font-size: 24px;
      color: #f00
    }
    .text{
      font-size: 14px;
    }
</style>
