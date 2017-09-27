<template>
    <div>
        <div class="m-gridstitle" v-if="title">{{title}}</div>
        <div :class="classes">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default{
        name: 'v-grids-group',
        computed: {
            title() {
                return this.$store.state.grids.title || '';
            },
            classes() {
                return 'm-grids-' + this.$store.state.grids.columns || '3';
            }
        }
    }
</script>
