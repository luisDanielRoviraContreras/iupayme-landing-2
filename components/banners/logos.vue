<template>
  <div class="logos">
    <div class="con-text">
      <p>
        <b class="logo">
          iuPayme
        </b>
        es un producto de <b>GMONEY SA</b> autorizada por la <b>SBS (super intendencia de banca y seguro)</b>
        con la licencia #7247-2015 que presta servicio de emisión de dinero electrónico
      </p>
    </div>
    <div class="con-logos">
      <ul>
        <!-- <li>
          <img src="/logo.png" alt="">
        </li> -->
        <li>
          <img src="/1200px-SBS.svg_.png" alt="">
        </li>
        <li>
          <img src="/as.png" alt="">
        </li>
        <li>
          <img class="master" src="/1200px-Mastercard-logo.svg.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class logos extends Vue {}
</script>
<style lang="sass" scoped>
.logos
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  padding: 50px 0px
  padding-top: 100px
  padding-bottom: 80px
  .con-text
    max-width: 460px
    padding: 15px
    padding-right: 40px
    p
      font-size: 1.1rem
      color: -color('color')
  .con-logos
    ul
      display: flex
      align-items: center
      justify-content: center
      flex-wrap: wrap
      max-width: 480px
      li
        width: calc(50% - 20px)
        display: flex
        align-items: center
        justify-content: center
        height: auto
        background: #fff
        height: 130px
        margin: 10px
        border-radius: 20px
        padding: 30px 0px
  img
    width: 130px
    &.master
      width: 100px
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .logos
    padding-top: 50px
    flex-direction: column
    .con-logos
      ul
        padding: 10px
        li
          padding: 10px
          height: 110px
          margin: 8px
          img
            width: 110px
          img.master
            width: 80px
    .con-text
      padding: 20px
      font-size: .8rem
</style>
