<template>
    <span><slot></slot><i :class="arrClass" :style="{color: color}"></i></span>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'v-nav-bar-next-icon',
        computed: {
            color () {
              return this.$store.state.navbar.iconColor || '#5C5C5C'
            },
            arrClass () {
                return'vfont '+ (this.$store.state.navbar.iconRight || 'icon-more')
            }
        }
    }
</script>
