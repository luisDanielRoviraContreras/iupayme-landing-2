<template>
  <div @click="handleToggleOpen" class="collapse">
    <button :class="{ open }" class="btn">
      <i class='bx bxs-chevron-down'></i>
    </button>
    <div class="con-coll">
      <h4 :class="{ open }">
        <slot name="title" />
      </h4>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <p class="text" v-if="open">
          <slot />
        </p>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class collapse extends Vue {
  open: boolean = false

  beforeEnter (el: any) {
    el.style.height = 0
  }

  enter (el: any, done: any) {
    const h = el.scrollHeight
    el.style.height = h - 1 + 'px'
    done()
  }

  leave (el: any) {
    el.style.minHeight = '0px'
    el.style.height = '0px'
  }

  handleToggleOpen () {
    this.open = !this.open
  }
}
</script>
<style lang="sass" scoped>
.collapse
  width: 100%
  max-width: 600px
  position: relative
  background: -color('bg')
  border-radius: 20px
  padding: 16px 20px
  cursor: pointer
  margin-bottom: 18px
  .btn
    position: absolute
    right: 10px
    width: 38px
    height: 38px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 16px
    border: 0px
    top: 8px
    transition: all .25s ease
    background: -color('bg-2')
    &.open
      transform: rotate(-180deg)
    i
      font-size: 1.25rem
  h4
    padding-bottom: 0px
    font-size: .9rem
    transition: all .25s ease
    &.open
      padding-bottom: 20px
  p
    font-size: .8rem
    overflow: hidden
    transition: all .25s ease
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .collapse
    padding: 17px 20px
    h4
      font-size: .8rem
      padding-right: 35px
    p
      font-size: .75rem
</style>
