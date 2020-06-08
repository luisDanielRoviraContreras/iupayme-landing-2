<template>
  <div
    class="container"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchmove="onTouchMove"
  >
    <transition name="fade-bg">
      <div v-show="openSidebar || sidebarLeft > 250" @click="openSidebar = false, sidebarLeft = 0" class="bg" />
    </transition>
    <navbar @clickMenu="openSidebar = true, sidebarLeft = 280" />
    <sidebar @handleClick="openSidebar = false, sidebarLeft = 0" :sidebar-left="sidebarLeft" :open-sidebar.sync="openSidebar" />
    <nuxt />
    <c-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navbar from '@/components/layout/default/navbar.vue'
import cFooter from '@/components/layout/default/footer.vue'
import sidebar from '@/components/layout/mobile/sidebar.vue'
@Component({
  components: {
    navbar,
    sidebar,
    cFooter
  }
})
export default class mobileLayout extends Vue {
  openSidebar: boolean = false
  sidebarLeft: number = 0
  touchStart: any = {
    x: 0
  }

  // side swipe
  onTouchMove (e: any) {
    const dx = e.changedTouches[0].clientX - this.touchStart.x
    if (this.touchStart.x < 35) {
      this.sidebarLeft = dx
    } else if (e.srcElement.closest('.mobile-sidebar') || e.srcElement.closest('.bg')) {
      this.sidebarLeft = 280 + dx
    }

    if (this.sidebarLeft >= 160) {
      this.openSidebar = true
    } else {
      this.openSidebar = false
    }
    if (this.sidebarLeft >= 280) {
      this.sidebarLeft = 280
    }

    if (this.sidebarLeft > 40) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  onTouchStart (e: any) {
    this.touchStart = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    }
  }

  onTouchEnd () {
    const sidebar = (document.querySelector('.mobile-sidebar') as HTMLElement)
    sidebar.style.transition = 'all .25s ease'

    if (this.sidebarLeft > 160) {
      this.sidebarLeft = 280
      this.openSidebar = true
    } else {
      this.sidebarLeft = 0
      this.openSidebar = false
    }

    setTimeout(() => {
      sidebar.style.transition = ''
    }, 250)
  }
}
</script>
<style lang="sass" scoped>
.container
  width: 100%
  overflow: hidden
.fade-bg-enter-active, .fade-bg-leave-active
  transition: all .25s ease

.fade-bg-enter, .fade-bg-leave-to
  opacity: 0

.bg
  width: 100%
  height: 100%
  z-index: 1100
  background: rgba(0,0,0,.2)
  left: 0px
  top: 0px
  position: fixed
  backdrop-filter: saturate(180%) blur(15px)
</style>
