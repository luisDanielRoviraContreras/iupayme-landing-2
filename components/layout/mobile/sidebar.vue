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
  </transition>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
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
  ul
    padding-top: 30px
    overflow-x: auto
    max-height: calc(100vh - 60px)
    li
      padding: 10px 15px
      a
        color: -color('color')
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
