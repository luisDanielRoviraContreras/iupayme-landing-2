<template>
  <section id="sec-2" class="sec-2">
    <div class="con con-1">
      <div class="con-content">
        <h2>
          ¿Qué es <b>iuPayme</b>?
        </h2>
        <p>
          Es el nuevo método para realizar pagos, enviar, recibir dinero y mucho más del modo más cómodo, rápido y fácil posible.
          <br><br>
          ¡Únete ya a la nueva forma de manejar tu dinero con iuPayme!
        </p>
      </div>
    </div>
    <div class="con con-2">
      <div class="con-content">
        <img
          :style="{
            transform: `translate(${left / 35}px, -${top / 35}px)`
          }"
          class="card-1"
          src="/A1.png"
          alt=""
        >
        <img
          :style="{
            transform: `translate(${left / 50}px, -${top / 50}px)`
          }"
          class="card-2"
          src="/A2.png"
          alt=""
        >
        <img
          :style="{
            transform: `translate(${left / 75}px, -${top / 75}px)`
          }"
          class="bg-card"
          src="/A3.png"
          alt=""
        >
      </div>
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
          <use xlink:href="#onda" x="48" y="0" fill="rgba(255,255,255,1)" />
          <use xlink:href="#onda" x="48" y="3" fill="rgba(255,255,255,.8)" />
          <use xlink:href="#onda" x="48" y="5" fill="rgba(255,255,255,.6)" />
          <use xlink:href="#onda" x="48" y="7" fill="#eff2f6" />
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
          <use xlink:href="#onda" x="48" y="0" fill="rgba(255,255,255,1)" />
          <use xlink:href="#onda" x="48" y="3" fill="rgba(255,255,255,.8)" />
          <use xlink:href="#onda" x="48" y="5" fill="rgba(255,255,255,.6)" />
          <use xlink:href="#onda" x="48" y="7" fill="#eff2f6" />
        </g>
      </svg>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class sec2 extends Vue {
  left: number = 0
  top: number = 0
  mousemove (evt: any) {
    const left = evt.clientX
    const top = evt.clientY
    this.left = -(left - this.$el.clientWidth / 2)
    this.top = top
  }

  mounted () {
    if (window.innerWidth > 812) {
      window.addEventListener('mousemove', this.mousemove)
    }
  }
}
</script>
<style lang="sass" scoped>
.bg-card
  width: 100%
  z-index: 1
  position: relative
.card-1
  position: absolute
  width: 50% !important
  top: -9%
  display: block
  right: 20%
  z-index: 10
.card-2
  right: 20%
  top: 18%
  width: 50% !important
  position: absolute
  z-index: 2
.onda
  position: absolute
  top: 0px
  transform: translate(0,-20%)
  width: auto
  min-width: 120%
  height: 50vw
  min-height: 1000px
  z-index: -1
.sec-2
  widows: 100%
  position: relative
  background: -color('bg-3')
  display: flex
  align-items: center
  justify-content: center
  z-index: 200
  margin-top: -50px
  padding-top: 130px
  .con
    width: 50%
    max-width: 600px
    display: flex
    align-items: center
    justify-content: center
    position: relative
    &.con-1
      max-width: 500px
      padding: 20px
    &.con-2
      max-width: 500px
      .con-content
        width: 100%
      img
        width: 100%
    h2
      font-weight: normal
      font-size: 1.8rem
    p
      padding: 20px 0px
      font-size: 1rem
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .sec-2
    .con
      h2
        font-size: 1.2rem
      p
        font-size: .8rem
@media (max-width: 500px), (pointer:none), (pointer:coarse)
  .sec-2
    flex-direction: column
    padding-top: 60px
    .con-1
      width: 100%
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
  bottom: -10vh;
  transform: rotate(180deg);
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
      bottom: -30px;
      min-height:40px;
    }
  }
</style>
