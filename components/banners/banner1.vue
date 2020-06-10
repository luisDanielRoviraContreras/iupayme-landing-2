<template>
  <div class="banner1">
    <div class="con-text">
      <h2>
        Compra con tu tarjeta virtual <b>iuPayme</b> en cualquier comercio o de manera online
      </h2>
    </div>

    <div class="ondebox">
      <svg
        class="onde"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto">
        <defs>
          <path id="onda" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z" />
        </defs>
        <g class="parallaxonde">
          <use xlink:href="#onda" x="48" y="7" fill="#fed500" />
          <use xlink:href="#onda" x="48" y="0" fill="#eff2f6" />
        </g>
      </svg>
    </div>
    <div class="ondebox2">
      <svg
        class="onde2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto">
        <defs>
          <path id="onda2" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z" />
        </defs>
        <g class="parallaxonde2">
          <use xlink:href="#onda2" x="48" y="0" fill="#7641ff" />
          <use xlink:href="#onda2" x="48" y="5" fill="#eff2f6" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class banner1 extends Vue {}
</script>
<style lang="sass" scoped>
.banner1
  width: 100%
  height: 75vh
  background-image: url('/06.jpg')
  background-attachment: fixed
  position: relative
  background-size: cover
  display: flex
  align-items: center
  justify-content: flex-start
  &:after
    content: ''
    position: absolute
    left: 0px
    top: 0px
    width: 60%
    background: linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 74%)
    z-index: 100
    height: 100%
  .con-text
    position: absolute
    color: -color('bg')
    z-index: 200
    font-size: 1.3rem
    max-width: 600px
    left: 150px
    h2
      font-size: 1.6rem
      font-weight: normal
    &:after
      position: absolute
      top: -10px
      left: 0px
      width: 30px
      height: 4px
      background: -color('bg')
      content: ''
      border-radius: 10px
  .ondebox
    bottom: 0px
    position: absolute
    width: 100%
    z-index: 300
  .ondebox2
    z-index: 300
    top: -20px
    position: absolute
    width: 100%
    transform: rotate(180deg)
// responsive

@media (max-width: 1000px)
  .banner1
    display: flex
    align-items: center
    justify-content: center
    &:after
      width: 100%
      background: rgba(0,0,0,.5)
    .con-text
      position: relative
      left: 0px
      text-align: center
      padding: 0px 20px
@media (max-width: 768px), (pointer:none), (pointer:coarse)
  .banner1
    height: 350px
    background-size: auto 100%
    background-position: center
    .con-text
      font-size: 1rem
      &:after
        display: none
</style>
<style scoped>
  .onde {
  position:relative;
  width: 100%;
  height:10vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
  }

  /* Animation */

  .parallaxonde > use {
    animation: move-forever 70s cubic-bezier(.55,.5,.45,.5) infinite;
  }
  .parallaxonde > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 17s;
  }
  .parallaxonde > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 20s;
  }
  .parallaxonde > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 23s;
  }
  .parallaxonde > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 30s;
  }
  @keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% {
      transform: translate3d(85px,0,0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .onde {
      height:40px;
      min-height:40px;
    }
  }
</style>

<style scoped>
  .onde2 {
  position:relative;
  width: 100%;
  height:10vh;
  margin-bottom: 7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
  }

  /* Animation */

  .parallaxonde2 > use {
    animation: move-forever 50s cubic-bezier(.55,.5,.45,.5) reverse infinite;
  }
  .parallaxonde2 > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 17s;
  }
  .parallaxonde2 > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 20s;
  }
  .parallaxonde2 > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 23s;
  }
  .parallaxonde2 > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 30s;
  }
  @keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% {
      transform: translate3d(85px,0,0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .onde2 {
      height:40px;
      min-height:40px;
    }
  }
</style>
