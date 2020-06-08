<template>
  <div class="master">
    <div class="con-master">
      <div class="con-img">
        <img src="/1200px-Mastercard-logo.svg.png" alt="">
      </div>
      <h2>
        <b>
          iuPayme
        </b> esta validado y <br> soportado 100% por <b>Mastercard</b>
      </h2>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class mastercard extends Vue {}
</script>
<style lang="sass" scoped>
.master
  width: 100%
  position: relative
  display: flex
  align-items: center
  justify-content: center
  padding: 100px 0px
  height: 35vh
  margin-top: 100px
  padding-bottom: 0px
  h2
    font-weight: normal
    font-size: 1.2rem
    padding: 0px 50px
  .con-master
    margin: 10px
    background: -color('bg')
    display: flex
    align-items: center
    justify-content: center
    padding: 20px 30px
    border-radius: 30px
    .con-img
      padding: 20px 35px
      background: -color('bg')
      border-radius: 30px
      margin-top: -50px
      box-shadow: 0px 5px 25px 0px rgba(0,0,0,.05)
      img
        width: 110px
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .master
    padding-top: 0px
    h2
      font-size: 1rem
      padding: 10px 20px
    .con-master
      width: calc(100% - 30px)
      margin: 0px 15px
      padding: 15px 10px
      .con-img
        img
          width: 80px
</style>
