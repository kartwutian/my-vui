<template>
    <yd-layout title="Transition">
        <!--<div id="demo">-->
            <!--<button v-on:click="show = !show">-->
                <!--Toggle-->
            <!--</button>-->
            <!--<transition name="fade">-->
                <!--<p v-if="show">hello</p>-->
            <!--</transition>-->
        <!--</div>-->
        <yd-button-group class="demo-pitch">

            <yd-button type="primary">primary</yd-button>
            <yd-button type="danger">danger</yd-button>
            <yd-button type="warning">warning</yd-button>
            <yd-button type="hollow">hollow</yd-button>

            <yd-button size="large" type="primary">primary</yd-button>
            <yd-button size="large" type="danger">danger</yd-button>
            <yd-button size="large" type="warning">warning</yd-button>
            <yd-button size="large" type="disabled" disabled>disabled</yd-button>
            <yd-button size="large" type="hollow">hollow</yd-button>

            <yd-button size="large" type="primary" shape="circle">shape="circle"</yd-button>
            <yd-button size="large" type="hollow" shape="circle">shape="circle"</yd-button>

        </yd-button-group>

    </yd-layout>
</template>

<script type="text/babel">
    export default {
      data(){
          return {
          show: true
        }
      }
    }
</script>

<style>
  /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .5s*/
  /*}*/
  /*.fade-enter, .fade-leave-to !* .fade-leave-active in below version 2.1.8 *! {*/
    /*opacity: 0*/
  /*}*/
</style>
