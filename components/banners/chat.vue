<template>
  <section id="chat" class="chat">
    <div class="con con-2">
      <div class="con-content">
        <video autoplay muted loop src="video_chat.mp4"></video>
        <!-- <img
          src="/iphones.png"
          alt=""
        > -->
      </div>
    </div>
    <div class="con con-1">
      <div class="con-content">
        <h2>
          Chatea con tus amigos, enviá y recibe dinero desde <b>iu</b>
        </h2>
        <p>
          iu te permite comunicarte con tus amigos y familiares, realizar recargas, coordinar pagos en conjunto y más...
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class chat extends Vue {
}
</script>
<style lang="sass" scoped>
.onda
  position: absolute
  top: 0px
  transform: translate(0,-20%)
  width: auto
  min-width: 120%
  height: 50vw
  min-height: 1000px
  z-index: -1
.chat
  widows: 100%
  position: relative
  display: flex
  align-items: center
  justify-content: center
  z-index: 200
  margin-top: -50px
  padding-top: 70px
  min-height: 90vh
  .con
    width: 50%
    max-width: 600px
    height: 600px
    display: flex
    align-items: center
    justify-content: center
    position: relative
    &.con-1
      max-width: 500px
      padding: 20px
      margin-left: 40px
    &.con-2
      max-width: 550px
      .con-content
        width: 100%
      video
        width: 100%
    h2
      font-weight: normal
      font-size: 1.8rem
    p
      padding: 20px 0px
      font-size: 1rem
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .chat
    height: auto
    min-height: auto
    flex-direction: column
    .con
      height: auto
      &.con-2
        padding: 10px
        width: 100%
      &.con-1
        width: 100%
        text-align: center
        margin-left: 0px
      h2
        font-size: 1rem
      p
        font-size: .8rem
</style>
