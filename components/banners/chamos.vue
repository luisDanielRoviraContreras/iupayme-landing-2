<template>
  <div class="chamos">
    <img class="img-1" src="/img/chicos1.png" alt="">
    <img class="img-2" src="/img/chicos2.png" alt="">
    <h2>
      Ahora con <b>iuPayme</b> <br> tus hijos pueden tener su propia tarjeta
    </h2>

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
          <use xlink:href="#onda" x="48" y="7" fill="#fff" />
          <use xlink:href="#onda" x="48" y="0" fill="#f7f8fa" />
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
          <use xlink:href="#onda" x="48" y="7" fill="#fff" />
          <use xlink:href="#onda" x="48" y="0" fill="#f7f8fa" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class chamos extends Vue {}
</script>
<style lang="sass" scoped>
.chamos
  height: 300px
  background: #f7f8fa
  position: relative
  z-index: 200
  margin-top: 180px
  z-index: 200
  .img-1
    position: absolute
    left: 10%
    top: -50px
    width: 230px
    z-index: 200
  .img-2
    position: absolute
    right: 10%
    bottom: -80px
    width: 400px
    z-index: 200
  h2
    font-weight: normal
    max-width: 400px
    position: absolute
    left: 30%
    bottom: 100px
    font-size: 1.8rem
// responsive

@media (max-width: 1100px)
  .chamos
    .img-1
      left: 10px
    .img-2
      right: 10px
@media (max-width: 950px)
  .chamos
    h2
      left: 40px
    .img-1
      left: 10px
      top: -100px
    .img-2
      right: -40px
@media (max-width: 700px)
  .chamos
    h2
      width: calc(100% - 40px)
      left: 20px
      max-width: none
      text-align: center
      bottom: 30px
      font-size: 1.2rem
    .img-1
      left: 10px
      top: -100px
    .img-2
      top: -100px
      bottom: auto
      right: -40px
      width: 300px
@media (max-width: 550px)
  .chamos
    display: flex
    align-items: center
    justify-content: center
    h2
      position: relative
      font-size: 1.1rem
    .img-1
      top: -60px
      width: 140px
    .img-2
      top: auto
      bottom: -60px
      width: 190px
      right: 20px
</style>
<style scoped>
  .onde {
  position: absolute;
  width: 100%;
  height:10vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
  left: 0px;
  top: -10vh;
  }

  /* Animation */

  .parallaxonde > use {
    animation: move-forever 50s cubic-bezier(.55,.5,.45,.5) infinite;
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
      height:50px;
      top: -50px;
      min-height:40px;
    }
  }
</style>
<style scoped>
  .onde2 {
  position: absolute;
  width: 100%;
  height:10vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
  left: 0px;
  bottom: -9vh;
  transform: rotate(180deg);
  }

  /* Animation */

  .parallaxonde2 > use {
    animation: move-forever 30s cubic-bezier(.55,.5,.45,.5) reverse infinite;
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
      bottom: -30px;
      min-height:40px;
    }
  }
</style>
