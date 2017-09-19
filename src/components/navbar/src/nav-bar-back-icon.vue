<template>
    <span><i class="vfont icon-back" :style="{color: color}"></i><slot></slot></span>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'v-nav-bar-back-icon',
        computed: {
            color () {
                return this.$store.state.navbar.iconColor || '#5C5C5C'
            }
        }

    }
</script>
