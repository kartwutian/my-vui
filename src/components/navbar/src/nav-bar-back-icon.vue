<template>
      <span><i :class="arrClass" :style="{color: color}"></i><slot></slot></span>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'v-nav-bar-back-icon',
        props: {
          link: {
              default: ''
          }
        },
        computed: {
            color () {
                return this.$store.state.navbar.iconColor || '#5C5C5C'
            },
            arrClass(){
                return 'vfont '+ (this.$store.state.navbar.iconLeft || 'icon-back')
            }
        }

    }
</script>
