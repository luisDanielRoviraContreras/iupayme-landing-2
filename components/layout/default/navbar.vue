<template>
  <div
    :class="{ down }"
    class="navbar">
    <button :class="{ openSidebar }" @click="handleClickMenu" class="menu">
      <span />
      <span />
      <span />
    </button>
    <div class="con-logo">
      <img src="/logo_iupayme_1.svg" alt="">
    </div>

    <ul>
      <li>
        <a href="#sec-1">Inicio</a>
      </li>
      <li>
        <a href="#sec-2">Que es iuPayme?</a>
      </li>
      <li>
        <a href="#sec-3">Como usar iuPayme</a>
      </li>
      <li>
        <a href="#sec-4">Preguntas frecuentes</a>
      </li>
      <li class="divider">
        <a href="#sec-5">Contáctenos</a>
      </li>
    </ul>

    <div class="con-btns">
      <button class="login-btn">
        Acceder
      </button>
      <button class="sign-in">
        Abrir Cuenta
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class navbar extends Vue {
  @Prop({ type: Boolean, default: false }) openSidebar: boolean

  down: boolean = false

  handleClickMenu () {
    this.$emit('clickMenu', true)
  }

  handleScroll () {
    if (window.pageYOffset > 0) {
      this.down = true
    } else {
      this.down = false
    }
  }

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="sass" scoped>
// responsive
.navbar
  display: flex
  align-items: center
  justify-content: space-between
  position: fixed
  top: 0px
  left: 0px
  z-index: 1000
  width: 100%
  border-radius: 0px 0px 20px 20px
  padding-bottom: 20px
  transition: all .25s ease
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,.05)
  &.down
    padding-bottom: 0px
    background: -color('bg')
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,.05)
    .login-btn
      background: -color('bg-3') !important
  .menu
    display: none
    width: 50px
    height: 50px
    border: 0px
    background: transparent
    cursor: pointer
    align-items: center
    justify-content: center
    flex-direction: column
    margin-left: 8px
    transition: all .25s ease
    &.openSidebar
      transform: rotate(90deg)
    span
      position: relative
      width: 20px
      height: 2px
      background: -color('color')
      display: block
      margin: 2px 0px
  .con-btns
    margin-right: 20px
    button
      padding: 8px 20px
      border-radius: 14px
      border: 0px
      font-weight: bold
      cursor: pointer
      transition: all .25s ease
      min-width: 125px
      &.login-btn
        background: -color('bg')
        &:hover
          background: -color('color')
          color: #fff
      &.sign-in
        background: -color('color-2')
        color: #fff
        margin-left: 8px
        &:hover
          transform: translate(0,-3px)
          box-shadow: 0px 5px 12px 0px -color('color-2', .3)
  .con-logo
    width: 120px
    margin-left: 30px
    display: flex
    align-items: center
    justify-content: center
    img
      width: 100%
  ul
    display: flex
    align-items: center
    justify-content: center
    li
      position: relative
      &.divider
        &:before
          content: ''
          left: 0px
          top: 50%
          transform: translate(0,-50%)
          position: absolute
          width: 2px
          height: 50%
          background: -color('color', .1)
      a
        padding: 18px
        display: block
        font-size: .8rem
        color: -color('color')
        transition: all .25s ease
        font-weight: bold
        &:hover
          opacity: .7

@media (max-width: 1250px)
  .navbar
    .con-logo
      position: absolute
      left: 50%
      transform: translate(-50%)
      margin-left: 0px
    .menu
      display: flex
    ul
      display: none
@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .navbar
    .con-logo
      left: 64px
      transform: translate(0)
@media (max-width: 500px), (pointer:none), (pointer:coarse)
  .navbar
    .con-logo
      width: 90px
    .con-btns
      margin-right: 10px
      button
        min-width: auto
        padding: 7px 12px
        font-size: .7rem
        &.sign-in
          margin-left: 0px
</style>
