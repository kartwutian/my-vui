<template>
    <header class="m-navbar navbar-bottom-line-color" :class="classes" :style="{backgroundColor: bgcolor, height: height}">
        <div class="navbar-item">
            <slot name="left"></slot>
        </div>
        <div class="navbar-center-box" :style="{height: height}">
            <div class="navbar-center">
                <slot name="center"><span class="center-title" :style="{color: color, fontSize: fontsize}">{{title}}</span></slot>
            </div>
        </div>
        <div class="navbar-item">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';
    import { mapState } from 'vuex'
    export default {
        name: 'v-nav-bar',
        computed: mapState({
            title: state => state.navbar.title || 'vui',
            color: state => state.navbar.color || '#5C5C5C',
            bgColor: state => state.navbar.bgColor || '#FFF',
            fontSize: state => state.navbar.fontSize || '.32rem',
            height: state => state.navbar.height || '.9rem',
            classes (state) {
                return state.navbar.fixed ? 'navbar-fixed' : '';
            }
        })
    }
</script>

<style lang="less">
    @import '../../../styles/components/navbar.less';
</style>
