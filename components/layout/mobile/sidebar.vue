<template>
  <transition name="fade-sidebar">
    <div
      :class="{
        openSidebar
      }"
      :style="{
        transform: `translate(${getPercentLeft - 100}%)`
      }"
      class="sidebar mobile-sidebar"
    >
      <div class="con-sidebar">
        <div class="con-logo">
          <img src="/logo_iupayme_1.svg" alt="">
        </div>

        <ul>
          <li :class="{active: $route.name !== 'contact'}" id="sec-1-btn">
            <a v-if="$route.name !== 'contact'" href="#sec-1">Inicio</a>
            <nuxt-link v-else to="/">
              Inicio
            </nuxt-link>
          </li>
          <li id="sec-2-btn">
            <a v-if="$route.name !== 'contact'" href="#sec-2">Que es iuPayme?</a>
            <nuxt-link v-else to="/#sec-2">
              Que es iuPayme?
            </nuxt-link>
          </li>
          <li id="sec-3-btn">
            <a v-if="$route.name !== 'contact'" href="#sec-3">Como usar iuPayme</a>
            <nuxt-link v-else to="/#sec-3">
              Como usar iuPayme
            </nuxt-link>
          </li>
          <li id="sec-4-btn">
            <a v-if="$route.name !== 'contact'" href="#sec-4">Preguntas frecuentes</a>
            <nuxt-link v-else to="/#sec-4">
              Preguntas frecuentes
            </nuxt-link>
          </li>
          <li :class="{active: $route.name == 'contact'}" class="divider contact">
            <nuxt-link to="/contact">
              Contáctenos
            </nuxt-link>
          </li>
        </ul>
      </div>

      <ul class="social">
        <li>
          <a href="#"><i class='bx bxl-instagram' ></i></a>
        </li>
        <li>
          <a href="#"><i class='bx bxl-twitter'></i></a>
        </li>
        <li>
          <a href="#"><i class='bx bxl-facebook' ></i></a>
        </li>
        <li>
          <a href="#"><i class='bx bxl-linkedin' ></i></a>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class sidebar extends Vue {
  @Prop({ type: Boolean, default: false }) openSidebar: boolean
  @Prop({ default: null }) sidebarLeft!: number

  get getPercentLeft () {
    let percent = this.sidebarLeft * 100 / 280

    if (percent > 100) {
      percent = 100
    } else if (percent < 0) {
      percent = 0
    }

    return percent
  }

  @Watch('$route.name')
  handleRoute () {
    this.$emit('handleClick')
  }

  @Watch('$route.hash')
  handleRouteHash () {
    this.$emit('handleClick')
  }

  handleClick () {
    this.$emit('handleClick')
  }
}
</script>
<style lang="sass" scoped>
.fade-sidebar-enter-active, .fade-sidebar-leave-active
  transition: all .25s ease

.fade-sidebar-enter, .fade-sidebar-leave-to
  transform: translate(-100%)

.sidebar
  width: 400px
  max-width: 80%
  left: 0px
  height: 100vh
  background: -color('bg')
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,.1)
  position: fixed
  top: 0px
  z-index: 1200
  max-width: 280px
  border-radius: 0px 25px 25px 0px
  display: flex
  align-items: space
  justify-content: space-between
  flex-direction: column
  ul:not(.social)
    padding-top: 30px
    overflow-x: auto
    max-height: calc(100vh - 60px)
    li
      padding: 10px 20px
      padding-left: 25px
      a
        color: -color('color')
  .social
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    li
      a
        padding: 10px 12px
        display: block
        color: -color('color')
        font-size: 1.3rem
  .con-logo
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    padding: 20px
    img
      max-width: 110px
// responsive

// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
