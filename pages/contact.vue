<template>
  <div class="contact">
    <div class="con-contact">
      <h1>
        Si buscas más información <br> <b>Contáctenos</b>
      </h1>

      <div class="con-input">
        <label for="name">Nombres</label>
        <input placeholder="Ingresa tus nombres" id="name" type="text">
      </div>
      <div class="con-input">
        <label for="lastName">Apellidos</label>
        <input placeholder="Ingresa tus apellidos" id="lastName" type="text">
      </div>
      <div class="con-input">
        <label for="email">E-mail</label>
        <input placeholder="juan@ejemplo.com" id="email" type="text">
      </div>
      <div class="con-input">
        <label for="tel">Teléfono</label>
        <input id="tel" type="text">
      </div>
      <div class="con-input all">
        <label for="sms">Mensaje</label>
        <textarea id="sms" />
      </div>
      <button>
        Enviar Mensaje
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
})
export default class contact extends Vue {
  removeActives () {
    const btns = document.querySelectorAll('.navbar > ul > li:not(.contact)')
    btns.forEach((btn) => {
      btn.classList.remove('active')
    })
  }

  mounted () {
    this.removeActives()
  }
}
</script>
<style lang="sass" scoped>
.contact
  width: 100%
  position: relative
  min-height: 100vh
  margin-bottom: 60px
  padding-top: 100px
  display: flex
  align-items: center
  justify-content: center
  .con-contact
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
    max-width: 500px
    padding: 20px
    button
      padding: 10px 20px
      border-radius: 20px 5px 20px 20px
      border: 0px
      background: linear-gradient(135deg, #FF3163 0%, #FF0683 74%)
      color: #fff
      margin-left: auto
      margin-right: 8px
      margin-top: 10px
      cursor: pointer
      transition: all .25s ease
      font-weight: bold
      &:hover
        transform: translate(0,-3px)
        box-shadow: 0px 5px 12px 0px -color('color-2', .3)
  .con-input
    width: 50%
    display: flex
    align-content: center
    justify-content: flex-start
    flex-direction: column
    padding: 8px
    &.all
      width: 100%
    input,textarea
      padding: 10px
      background: -color('bg')
      border-radius: 14px
      border: 0px
      width: 100%
      resize: none
      transition: all .25s ease
      &::placeholder
        color: rgba(0,0,0,.35)
      &:focus
        transform: translate(0,-3px)
        box-shadow: 0px 5px 15px 0px rgba(0,0,0,.1)
    label
      font-weight: bold
      font-size: .85rem
      display: block
      padding: 5px 0px
  h1
    font-weight: normal
    width: 100%
    padding: 0px 8px
    b
      font-weight: bold
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .contact
    .con-input
      width: 100%
</style>
