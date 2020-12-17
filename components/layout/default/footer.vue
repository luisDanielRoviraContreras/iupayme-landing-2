<template>
  <div class="footer">
    <div class="con-logo-footer">
      <img src="icon.png" alt="">
    </div>
    <div class="ondebox">
      <svg
        class="onde"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto">
        <defs>
          <path id="onda" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z" />
        </defs>
        <g class="parallaxonde">
          <use xlink:href="#onda" x="48" y="0" fill="#ebedf2" />
          <use xlink:href="#onda" x="48" y="3" fill="rgba(255,255,255,.8)" />
          <use xlink:href="#onda" x="48" y="5" fill="rgba(255,255,255,.6)" />
          <use xlink:href="#onda" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>

    <div class="con-footer">
      <div class="con-links">
        <ul class="links">
          <li>
            <h4>
              Mas de iu
            </h4>
          </li>
          <li>
            <a href="#">
              ¿Eres Programador?
            </a>
          </li>
          <li>
            <a href="#">
              Trabaja con nosotros
            </a>
          </li>
          <li>
            <a href="#">
              Contáctenos
            </a>
          </li>
        </ul>

        <div class="con-redes">
          <h4>
            Síguenos
          </h4>

          <ul>
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
      </div>

      <div class="con-logos">
        <!-- <img src="/1200px-Mastercard-logo.svg.png" alt=""> -->
        <img src="/1200px-SBS.svg_.png" alt="">
        <img src="/as.png" alt="">
        <!-- <img src="/logo.png" alt=""> -->
      </div>
    </div>

    <div class="con-text-copy">
      <p>
        2020 iu .All rights reserved
      </p>
      <p>
        Al usar este sitio web estas aceptando los términos y condiciones. KYC & AML Polices. para mas información accede al CENTRO DE SOPORTE
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class cfooter extends Vue {}
</script>
<style lang="sass" scoped>
.con-logo-footer
  position: absolute
  width: 60px
  height: 60px
  background: -color('bg')
  border-radius: 20px
  display: flex
  align-items: center
  justify-content: center
  box-shadow: 0px 8px 25px 0px rgba(0,0,0,.05)
  top: 0px
  z-index: 10
  img
    max-width: 40px
.con-text-copy
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  font-size: .7rem
  padding-bottom: 20px
  p
    padding: 5px 10px
    color: #bdc1cd
.con-footer
  padding: 30px
  padding-bottom: 20px
  padding-top: 50px
  max-width: 1200px
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  background: #fff
  .con-links
    display: flex
    align-items: flex-start
    justify-content: center
    .links
      li:first-child
        margin-bottom: 10px
      li:not(:first-child)
        padding: 10px 0px
        a
          color: -color('color')
          font-size: .9rem
    .con-redes
      margin-left: 60px
      ul
        display: flex
        align-items: center
        justify-content: flex-start
        li
          display: flex
          align-items: center
          justify-content: center
          margin-right: 10px
          a
            color: -color('color')
      h4
        margin-bottom: 10px
.con-logos
  img
    max-height: 55px
    margin-right: 30px
    &:last-child
      margin-right: 0px !important
.ondebox
  width: 100%
  position: absolute
  top: 0px
  transform: translate(0,-100%)
.footer
  width: 100%
  position: relative
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  z-index: 200
  height: auto
  background: #fff
  .onda
    position: absolute
    bottom: 0px
    width: auto
    // min-width: 120%
    height: 200px
    width: 100%
    // min: 200px
    z-index: -1
// responsive

@media (max-width: 960px)
  .con-footer
    flex-direction: column
    .con-links
      width: 100%
      justify-content: space-between
      padding-bottom: 20px

  .con-text-copy
    p
      font-size: .7rem
      text-align: center
  .con-logos
    img
      max-height: 40px
      margin-right: 20px
@media (max-width: 540px)
  .con-footer
    .con-links
      .con-redes
        h4
          font-size: .9rem !important
      .links
        h4
          font-size: .9rem !important
        li:not(:first-child)
          padding: 5px 0px
          a
            font-size: .8rem
  .con-logos
    img
      max-height: 30px
      margin-right: 20px
  .con-text-copy
    font-size: .6rem
    flex-direction: column
    justify-content: center
    p
      font-size: .6rem
@media (max-width: 400px)
  .con-footer
    .con-links
      flex-direction: column
      align-items: flex-start
      justify-content: flex-start
      .con-redes
        margin-left: 0px
        margin-top: 20px
        margin-bottom: 20px
  .con-logos
    img
      max-height: 25px
      margin-right: 15px
</style>

<style scoped>
  .onde {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
  }

  /* Animation */

  .parallaxonde > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
  }
  .parallaxonde > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallaxonde > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallaxonde > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallaxonde > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% {
      transform: translate3d(85px,0,0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .onde {
      height:50px;
      min-height:50px;
    }
  }
</style>
