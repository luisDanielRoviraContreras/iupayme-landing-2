<template>
  <div id="sec-3" class="sec-3">
    <h2>
      Mira lo fácil que es usar <b>iuPayme</b>
    </h2>

    <div class="con-mockup">
      <ul class="not-scroll-mobile">
        <li class="active">
          Como me registro?
        </li>
        <li>
          Como transfiero?
        </li>
        <li>
          Como ver mi saldo?
        </li>
        <li>
          Como veo mis movimientos?
        </li>
        <li>
          Como creo una sub-cuenta?
        </li>
        <li>
          Como chateo con mis amigos?
        </li>
      </ul>
      <div class="mockup">
        <img class="img-mockup" src="/5.png" alt="">
        <img class="bg" src="/n1.png" alt="">
      </div>
      <div class="con-info">
        <span class="paso">
          Paso 1
        </span>
        <h3>
          Escoge el diseño de tu tarjeta <b>iuPayme</b>
        </h3>

        <p>
          Al registrarte puedes elegir el estilo visual de tu tarjeta que sera enviada físicamente al terminar de verificar tu cuenta
        </p>

        <div class="pagination">
          <button>
            <i class='bx bxs-chevron-left'></i>
          </button>
          <span>
            1/2
          </span>
          <button>
            <i class='bx bxs-chevron-right' ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class sec3 extends Vue {
}
</script>
<style lang="sass" scoped>
.sec-3
  width: 100%
  height: 100vh
  h2
    text-align: center
    width: 100%
    padding: 20px
    font-weight: normal
    margin-bottom: 20px
  .con-mockup
    width: 100%
    display: flex
    max-width: 1200px
    margin: auto
    align-items: center
    justify-content: space-between
    .mockup
      position: relative
      z-index: 10
      .img-mockup
        max-height: 600px
        height: 60vh
      .bg
        position: absolute
        left: 16px
        top: 13px
        z-index: -1
        max-height: 600px
        height: calc(60vh - 26px)
        border-radius: 20px
    .con-info
      width: 33%
      max-width: 350px
      display: flex
      align-items: flex-start
      justify-content: center
      flex-direction: column
      .paso
        display: block
        border-radius: 10px
        padding: 5px 15px
        font-weight: bold
        background: -color('bg')
      h3
        font-weight: normal
        padding: 15px 0px
      .pagination
        display: flex
        align-items: center
        justify-content: center
        background: -color('bg-4')
        padding: 4px
        border-radius: 15px
        max-width: 145px
        margin-top: 20px
        span
          min-width: 60px
          display: flex
          align-items: center
          justify-content: center
          font-weight: bold
        button
          width: 35px
          height: 35px
          border: 0px
          border-radius: 15px
          background: -color('bg')
          display: flex
          align-items: center
          justify-content: center
          box-shadow: 0px 3px 12px 0px rgba(0,0,0,.08)
          cursor: pointer
          transition: all .25s ease
          &:hover
            transform: translate(0, -4px)
            box-shadow: 0px 6px 15px 0px rgba(0,0,0,.1)
          i
            font-size: 1.1rem
    ul
      width: 33%
      max-width: 350px
      li
        display: flex
        align-items: center
        justify-content: flex-start
        padding: 15px
        font-size: .9rem
        border-radius: 20px
        cursor: pointer
        transition: all .25s ease
        position: relative
        margin-top: 8px
        &:after
          content: ''
          left: -30px
          position: absolute
          width: 30px
          height: 30px
          background: -color('bg-3')
          border-radius: 15px
          opacity: 0
          transition: all .25s ease
        &:before
          content: ''
          left: 25px
          z-index: 100
          position: absolute
          width: 5px
          height: 5px
          background: -color('color')
          border-radius: 50%
          opacity: 0
          transition: all .25s ease
        &.active
          background: -color('bg')
          padding-left: 50px
          &:after
            opacity: 1
            left: 12px
          &:before
            opacity: 1
// responsive

@media (max-width: 1200px)
  .sec-3
    .con-mockup
      ul
        li
          border-radius: 0px 20px 20px 0px
@media (min-width: 900px)
  .sec-3
    .con-mockup
      ul
        li
          &:hover:not(.active)
            background: -color('bg')
            padding-left: 25px
@media (max-width: 900px)
  .sec-3
    height: auto
    padding-bottom: 60px
    h2
      padding: 10px
      font-size: 1.2rem
    .con-mockup
      flex-direction: column
      .mockup
        width: 220px
        .bg
          height: auto !important
          width: calc(100% - 30px) !important
        .img-mockup
          height: auto !important
          width: 100% !important
      .con-info
        width: 100%
        max-width: none
        padding: 10px 20px
        .pagination
          margin: auto
          margin-top: 10px
          span
            font-size: .9rem
        p
          font-size: .8rem
        .paso
          display: none
      ul
        flex-wrap: nowrap
        display: flex
        width: 100%
        flex-direction: row
        max-width: none
        overflow: auto
        padding: 0px 10px
        margin-bottom: 10px
        &
        li
          flex-basis: 1
          white-space: nowrap
          border-radius: 20px
          padding: 10px
// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
