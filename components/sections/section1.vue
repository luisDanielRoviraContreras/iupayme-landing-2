<template>
  <section id="sec-1" class="sec-1">
    <div class="con-1 con">
      <div class="con-img">
        <img src="/img/2.png" alt="">
      </div>

      <div class="con-svg svg-1">
        <div class="con-points points-1">
          <span
            v-for="(span, i) in 10"
            :key="i"
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.512 208.324">
          <path id="Oval" d="M124.185.49S216.733-5.256,250.3,22.6c15.56,12.913,21.279,30.254,9.048,53.138-26.736,56.534-67.093,88.9-135.162,88.9S0,142.853,0,74.784,124.185.49,124.185.49Z" transform="matrix(0.985, -0.174, 0.174, 0.985, 0, 46.184)" />
        </svg>
      </div>
      <div class="con-svg svg-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 207.448 182.802">
          <defs>
            <linearGradient id="linear-gradient" x1="0.204" x2="1" y2="1.175" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#8a5aff" />
              <stop offset="1" stop-color="#3a00ff" />
            </linearGradient>
          </defs>
          <path id="Oval2" d="M89.57,27.942c49.468,0,89.57,7.215,89.57,56.683A89.57,89.57,0,1,1,0,84.624C0,35.156,40.1,27.942,89.57,27.942Z" transform="matrix(-0.974, -0.225, 0.225, -0.974, 168.263, 210.028)" fill="url(#linear-gradient)" style="mix-blend-mode: darken;isolation: isolate" />
        </svg>
      </div>
      <div class="con-svg svg-3">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 329.129 359.375">
          <defs>
            <linearGradient
              id="linear-gradient-2"
              x1="0.034"
              y1="0.231"
              x2="1.05"
              y2="1.207"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#ff2753" />
              <stop offset="1" stop-color="#ff2097" />
            </linearGradient>
          </defs>
          <path id="Oval3" d="M97.093,72.861c79.57,0,188.417,4.135,188.417,83.7A144.074,144.074,0,0,1,141.436,300.639c-79.57,0-132.988-87.129-144.074-144.074S17.524,72.861,97.093,72.861Z" transform="translate(-64.005 227.968) rotate(-65)" fill="url(#linear-gradient-2)" />
        </svg>
      </div>
    </div>
    <div class="con-2 con">
      <div class="content-con">
        <h1>
          Bienvenido a <b>iuPayme</b>
        </h1>

        <p>
          Chatea y envia dinero a tus amigos de forma rapida <br> y segura desde tu telefono, tablet o pc, <b>descarga ya <br> la App en:</b>
        </p>
        <div class="con-download">
          <a href="#">
            <img src="/img/Grupo 1593.png" alt="">
          </a>
          <a href="#">
            <img src="/img/Grupo 1592.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class sec1 extends Vue {}
</script>
<style lang="sass" scoped>
.con-points
  width: 125px
  height: auto
  position: absolute
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
  z-index: 200
  &.points-1
    top: 60px
    left: 30px
  span
    display: block
    width: 25px
    height: 25px
    display: flex
    align-items: center
    justify-content: center
    &:hover
      &:after
        transform: scale(2)
    &:after
      transition: all .25s ease
      content: ''
      width: 5px
      background: -color('bg')
      height: 5px
      position: relative
      border-radius: 50%
.onda
  position: absolute
  bottom: 0px
  transform: translate(0,80%)
  width: auto
  min-width: 120%
  height: 50vw
  min-height: 1000px
.sec-1
  widows: 100%
  position: relative
  height: 100vh
  background: -color('bg-2')
  display: flex
  align-items: center
  justify-content: center
  .con
    width: 50%
    max-width: 600px
    // background: rgba(0,0,0,.1)
    height: 100vh
    margin: 0px 20px
    display: flex
    align-items: center
    justify-content: center
    padding-bottom: 100px
    &.con-1
      position: relative
      max-width: 700px
      .con-svg
        position: absolute
        &.svg-1
          fill: rgb(255, 217, 23)
          top: 240px
          left: 100px
          width: 210px
        &.svg-2
          bottom: 80px
          left: 0px
          // opacity: .8
          width: 150px
        &.svg-3
          bottom: 100px
          right: -30px
          // opacity: .6
          width: 250px
    &.con-2
      .content-con
        display: flex
        align-items: flex-start
        justify-content: center
        flex-direction: column
        text-align: left
        p
          padding: 20px 0px
      h1
        font-weight: normal
        font-size: 1.8rem
        b
          font-weight: bold
      .con-download
        display: flex
        align-items: center
        justify-content: center
        img
          max-width: 160px
          margin-right: 12px
    .con-img
      width: 100%
      height: 100vh
      display: flex
      align-items: flex-end
      justify-content: center
      max-width: 700px
      img
        width: 100%
        min-width: 700px
// responsive

@media (max-width: 768px), (pointer:none), (pointer:coarse)
  .sec-1
    flex-direction: column
    height: auto
    .con
      height: auto
      &.con-1
        width: 100%
        .con-svg
          .con-points
            display: none
          &.svg-1
            top: 0px
            left: 0px
            width: 30vw
          &.svg-2
            left: -40px
            width: 30vw
          &.svg-3
            right: -60px
            bottom: 0px
            width: 45vw
      &.con-2
        order: -1
        padding: 15px
        padding-bottom: 0px
        width: 100%
        padding-top: 100px
        min-width: auto
        h1
          font-size: 1.3rem
        p
          font-size: .8rem
      .con-img
        height: auto
    .con-1
      padding-bottom: 0px
</style>
