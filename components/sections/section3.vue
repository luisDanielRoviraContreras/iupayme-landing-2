<template>
  <div id="sec-3" class="sec-3">
    <h2>
      Mira lo fácil que es usar <b>iu</b>
    </h2>

    <div class="con-mockup">
      <ul class="not-scroll-mobile">
        <li @click="active = 0" :class="{ active: active == 0 }">
          ¿Cómo me registro?
        </li>
        <li @click="active = 1" :class="{ active: active == 1 }">
          ¿Cómo transfiero?
        </li>
        <li>
          ¿Cómo ver mi saldo?
        </li>
        <li>
          ¿Cómo veo mis movimientos?
        </li>
        <li>
          ¿Cómo creo una sub-cuenta?
        </li>
        <li>
          ¿Cómo chateo con mis amigos?
        </li>
      </ul>
      <div class="mockup">
        <img class="img-mockup" src="/5.png" alt="">
        <img class="bg" :src="sections[active].items[subActive].img" alt="">
      </div>
      <div class="con-info">
        <span class="paso">
          Paso {{ subActive + 1 }}
        </span>
        <h3>
          {{ sections[active].items[subActive].title }}
        </h3>

        <p>
          {{ sections[active].items[subActive].text }}
        </p>

        <div class="pagination">
          <button @click="subActive > 0 ? subActive-- : subActive = 0">
            <i class='bx bxs-chevron-left'></i>
          </button>
          <span>
            {{ subActive + 1 }} / {{ sections[active].items.length }}
          </span>
          <button @click="subActive < sections[active].items.length - 1 ? subActive++ : subActive = sections[active].items.length - 1">
            <i class='bx bxs-chevron-right' ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component
export default class sec3 extends Vue {
  active: number = 0
  subActive: number = 0

  sections: any = [
    {
      title: 'Cómo me registro',
      items: [
        {
          img: 'print/n2.png',
          title: 'Escoge el diseño de tu tarjeta iu.',
          text: 'Al registrarte puedes elegir el estilo visual de tu tarjeta que sera enviada físicamente al terminar de verificar tu cuenta'
        },
        {
          img: 'print/n3.png',
          title: 'Fecha de nacimiento, términos y condiciones',
          text: 'Proporciona tu fecha de nacimiento y acepta los términos y condiciones'
        },
        {
          img: 'print/n4.png',
          title: 'Numero de celular',
          text: 'Proporciona tu numero de celular para ser verificado'
        },
        {
          img: 'print/n5.png',
          title: 'Mensaje de verificación',
          text: 'Mandaremos un mensaje para verificar el numero proporcionado, agregalo y dale a siguiente'
        },
        {
          img: 'print/n5.png',
          title: 'Correo y contraseña',
          text: 'Ingresa tu correo electrónico y la contraseña de manera segura'
        },
        {
          img: 'print/n5.png',
          title: 'Bienvenido a iu',
          text: 'Listo! asi de fácil en es registrarse en iu, que esperas para crear tu primera tarjeta y disfrutar de todos los beneficios'
        }
      ]
    },
    {
      title: '¿Cómo transfiero?',
      items: [
        {
          img: 'print/1-0.png',
          title: 'Selecciona o escanea el usuario',
          text: 'Primero seleccionamos al usuario al que vamos a enviar los fondos'
        },
        {
          img: 'print/1-1.png',
          title: 'Monto y descripción',
          text: 'Agregamos el monto a enviar y una descripción de la transferencia'
        },
        {
          img: 'print/1-2.png',
          title: 'Transferencia enviada!',
          text: 'Listo ya tu transferencia fue generada exitosamente y los fondos enviados con seguridad a el usuario receptor'
        }
      ]
    }
  ]

  @Watch('active')
  handleActive () {
    this.subActive = 0
  }
}
</script>
<style lang="sass" scoped>
.sec-3
  width: 100%
  height: 100vh
  padding-top: 80px
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
      height: 600px
      .img-mockup
        height: 100%
      .bg
        position: absolute
        left: 19px
        top: 18px
        z-index: -1
        max-height: 600px
        height: calc(600px - 40px)
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
        background: #e3e8ee
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
          top: calc(50% - 15px)
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
        height: auto
        .bg
          height: auto !important
          left: 16px
          width: calc(100% - 33px) !important
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
          &:before
            margin-top: 0px
            top: calc(50% - 3px)
// @media (max-width: 812px), (pointer:none), (pointer:coarse)
</style>
