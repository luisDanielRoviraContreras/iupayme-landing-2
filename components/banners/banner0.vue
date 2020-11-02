<template>
  <section
    id="banner-0"
    class="banner-0">
    <!-- <h2>
      Beneficios al usar <b>iu</b>
    </h2> -->

    <ul>
      <li
        :style="{
          transform: `translate(${left / 100}px, -${top / 100}px)`
        }"
      >
        <img
          :style="{
            transform: `translate(${left / 70}px, -${top / 70}px)`
          }"
          src="/img/card3.png"
          alt=""
        >
        <img
          class="blur"
          :style="{
            transform: `translate(${left / 50}px, -${top / 50}px)`
          }"
          src="/img/card3.png"
          alt=""
        >
        <p>
          Obtén tu tarjeta <b>iu</b> al toque
        </p>
      </li>
      <li
        :style="{
          transform: `translate(${left / 100}px, -${top / 100}px)`
        }"
      >
        <img
          :style="{
            transform: `translate(${left / 70}px, -${top / 70}px)`
          }"
          src="/img/puerquito2.png"
          alt=""
        >
        <img
          class="blur"
          :style="{
            transform: `translate(${left / 50}px, -${top / 50}px)`
          }"
          src="/img/puerquito2.png"
          alt=""
        >
        <p>
          Crea <b class="not-italic">chanchas</b> con tus amigos usando <b>iu</b>
        </p>
      </li>
      <li
        :style="{
          transform: `translate(${left / 100}px, -${top / 100}px)`
        }"
      >
        <img
          :style="{
            transform: `translate(${left / 70}px, -${top / 70}px)`
          }"
          src="/img/chat3.png"
          alt=""
        >
        <img
          class="blur"
          :style="{
            transform: `translate(${left / 50}px, -${top / 50}px)`
          }"
          src="/img/chat3.png"
          alt=""
        >
        <p>
          Chatea con tus amigos directamente desde <b>iu</b>
        </p>
      </li>
      <li
        :style="{
          transform: `translate(${left / 100}px, -${top / 100}px)`
        }"
      >
        <img
          :style="{
            transform: `translate(${left / 70}px, -${top / 70}px)`
          }"
          src="/img/escudo3.png"
          alt=""
        >
        <img
          class="blur"
          :style="{
            transform: `translate(${left / 50}px, -${top / 50}px)`
          }"
          src="/img/escudo3.png"
          alt=""
        >
        <p>
          Con <b>iu</b> transfieres de manera rápida y segura
        </p>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class sec3 extends Vue {
  left: number = 0
  top: number = 0
  mousemove (evt: any) {
    const left = evt.clientX
    const top = evt.clientY
    this.left = -(left - this.$el.clientWidth / 2)
    this.top = top
  }

  mounted () {
    window.addEventListener('mousemove', this.mousemove)
  }
}
</script>
<style lang="sass" scoped>
.banner-0
  widows: 100%
  position: relative
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  padding-top: 150px
  padding-bottom: 150px
  h2
    margin-bottom: 70px
    font-weight: normal
  ul
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    li
      background: -color('bg')
      width: calc(25% - 30px)
      margin: 15px
      max-width: 200px
      border-radius: 30px
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      min-height: 180px
      box-shadow: 0px 0px 40px 0px rgba(0,0,0,.05)
      transition: box-shadow .25s ease, transform .1s ease, margin-top .4s ease
      p
        text-align: center
        padding: 10px
        font-size: .8rem
        color: #8a95ac
        b
          color: #1d253c
        b:not(.not-italic)
          font-weight: bold
          font-style: italic
      img
        width: 100%
        max-width: 120px
        margin-top: -50px
        margin-bottom: 15px
        transition: margin .25s ease
        &.blur
          position: absolute
          filter: blur(14px)
          z-index: -1
          opacity: .4
// responsive

@media (min-width: 960px)
  .banner-0
    ul
      li
        &:hover
          box-shadow: 0px 10px 30px 0px rgba(0,0,0,.1)
          margin-top: -6px
          img
            margin-top: -60px !important
            margin-bottom: 25px

@media (max-width: 960px)
  .banner-0
    ul
      flex-wrap: wrap
      li
        max-width: none
        width: calc(50% - 50px)
        margin-bottom: 30px
@media (max-width: 560px)
  .banner-0
    padding-bottom: 80px
    ul
      li
        width: calc(100% - 30px)
        margin-bottom: 0px
        flex-direction: row
        min-height: auto
        padding: 10px
        img
          max-width: 70px
          margin-top: 0px
          margin-bottom: 0px
          &.blur
            display: none
        p
          width: 100%
// @media (max-width: 812px), (pointer:none), (pointer:coarse)

</style>
