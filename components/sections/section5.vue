<template>
  <section id="sec-5" class="sec-5">
    <div class="con-1 con">
      <div class="con-img">
        <img src="/img/1.png" alt="">
      </div>

      <div class="con-svg svg-2">
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
      <div class="con-svg svg-3">
        <div class="con-points points-2">
          <span
            v-for="(span, i) in 8"
            :key="i"
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.985 111.403">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="1.004"
              y1="0.475"
              x2="0.172"
              y2="1.066"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#965aff"/>
              <stop offset="1" stop-color="#6031ff"/>
            </linearGradient>
          </defs>
          <path id="Oval" d="M69.763,98.443c34.221-5.513,67.12-25.7,67.12-58.629s-36.153-21.76-70.374-16.247S0,28.931,0,61.864,35.542,103.956,69.763,98.443Z" transform="translate(-3.871 14.024) rotate(-13)" fill="url(#linear-gradient)"/>
        </svg>
      </div>

      <div class="con-svg svg-1">
        <div class="con-points points-3">
          <span
            v-for="(span, i) in 8"
            :key="i"
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 366.16 344.766">
          <defs>
            <linearGradient
              id="linear-gradient-x"
              x1="0.143"
              y1="1.315"
              x2="1.047"
              y2="0.641"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#ff2753"/>
              <stop offset="1" stop-color="#ff2097"/>
            </linearGradient>
          </defs>
          <path id="Oval" d="M97.093,72.861c79.57,0,188.417,4.135,188.417,83.7A144.074,144.074,0,0,1,141.436,300.639c-79.57,0-132.988-87.129-144.074-144.074S17.524,72.861,97.093,72.861Z" transform="translate(399.571 260.171) rotate(149)" fill="url(#linear-gradient-x)"/>
        </svg>
      </div>
    </div>
    <div class="con-2 con">
      <div class="content-con">
        <h2>
          Descarga la App ahora y obtén tu tarjeta <b>iuPayme</b> al toque
        </h2>
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
    top: 120px
    left: 50px
    width: 50px
  &.points-2
    top: -12px
    left: -20px
    width: 100px
  &.points-3
    top: 140px
    right: 0px
    width: 100px
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
.sec-5
  widows: 100%
  position: relative
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: 100px
  .con
    width: 50%
    max-width: 600px
    // background: rgba(0,0,0,.1)
    height: 100vh
    margin: 0px 20px
    display: flex
    align-items: center
    justify-content: center
    &.con-1
      position: relative
      .con-img
        margin-bottom: -200px
        img
          width: 100%
          max-width: 400px
      .con-svg
        position: absolute
        &.svg-1
          top: 190px
          right: 70px
          width: 360px
          z-index: -1
        &.svg-2
          bottom: 80px
          left: 0px
          width: 300px
          fill: rgb(255, 217, 23)
          z-index: -1
        &.svg-3
          bottom: 0px
          right: 80px
          width: 130px
    &.con-2
      .content-con
        display: flex
        align-items: flex-start
        justify-content: center
        flex-direction: column
        text-align: left
        margin-top: 30px
        p
          padding: 20px 0px
      h2
        font-weight: normal
        font-size: 1.8rem
        b
          font-weight: bold
      .con-download
        display: flex
        align-items: center
        justify-content: center
        margin-top: 30px
        img
          max-width: 160px
          margin-right: 12px
          transition: all .25s ease
          &:hover
            transform: scale(1.05)
    .con-img
      width: 100%
      height: 100vh
      display: flex
      align-items: flex-end
      justify-content: center
      max-width: 500px
      img
        width: 100%
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .sec-5
    flex-direction: column
    height: auto
    padding-top: 100px
    margin-bottom: 30px
    .con
      height: auto
      width: 100%
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
            width: 40vw
      &.con-2
        order: -1
        padding: 0px 30px
        margin: 0px
        .con-download
          width: 100%
          margin-top: 20px
          img
            max-width: 120px
        p
          font-size: .8rem
          padding: 10px 0px !important
        h2
          text-align: center
          width: 100%
          font-size: 1.1rem
      .con-img
        height: auto
        max-width: 200px
        margin-bottom: -50px !important
</style>
