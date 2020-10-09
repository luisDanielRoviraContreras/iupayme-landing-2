<template>
  <section id="sec-4" class="sec-4">
    <h2>
      Preguntas Frecuentes
    </h2>

    <div class="con-content">
      <collapse v-model="open" val="1">
        <template #title>
          ¿Qué es iu?
        </template>

        <b>iu</b> es un servicio innovador de billetera dirigido a jóvenes que les permite manejar su dinero de manera confiable dejando atrás los procesos complejos para obtener cuentas bancarias, les da la oportunidad de iniciarse en la experiencia del manejo responsable e independiente del dinero y les proporciona la facilidad para esto mediante una tarjeta propia y una aplicación adaptada a sus necesidades y la de sus padres o representantes.
      </collapse>
      <collapse v-model="open" val="2">
        <template #title>
          ¿Desde qué edad puedo tener una cuenta?
        </template>

        Si actualmente tienes entre 11 y 17 años puedes desenvolverte de manera independiente con tu tarjeta iu de forma fácil, rápida y confiable.  ¡Garantizándole a tus padres y a ti total tranquilidad mediante nuestra plataforma!
      </collapse>
      <collapse v-model="open" val="3">
        <template #title>
          ¿Cuál es el límite de dinero permitido para transferir?
        </template>

        En <b>iu</b> puedes transferir hasta un máximo de S/. 999 por cada operación que realices y hasta 10 operaciones al día permitiéndote contar con tus ingresos al instante y sin complicaciones.
      </collapse>
      <collapse v-model="open" val="4">
        <template #title>
          ¿Cuántos usuarios puedo tener?
        </template>

        En <b>iu</b> puedes contar con varios usuarios en una sola cuenta los cuales podrán tener acceso personalizado a sus funciones siempre supervisadas por un padre o representante legal para mantener la tranquilidad y seguridad de toda la familia.
      </collapse>
      <collapse v-model="open" val="5">
        <template #title>
          ¿Qué documentos necesito para crear mi cuenta?
        </template>

        Para tener tu cuenta en iu solo necesitas lo siguiente: <br> <br>
        - Número de tu Documento de Identidad. <br>
        - Foto frontal y posterior de tu Documento de Identidad. <br>
        - Número de Documento de uno de tus padres o representante legal. <br>
        - Foto frontal y posterior del Documento de Identidad de tu padre o representante legal. <br>
        - Un número de Teléfono móvil propio y de uno de los padres o representante legal. <br>
        - Correo electrónico propio y de uno de los padres o representante legal. <br>
        - Debes contar con una edad comprendida entre 11 y 17 años.
      </collapse>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import collapse from '@/components/common/collapse.vue'
@Component({
  components: {
    collapse
  }
})
export default class sec4 extends Vue {
  open: any = 0
}
</script>
<style lang="sass" scoped>
.sec-4
  widows: 100%
  position: relative
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  padding: 150px 20px
  padding-bottom: 0px
  h2
    margin-bottom: 45px
    font-size: 2rem
  .con-content
    width: 100%
    max-width: 600px
    display: flex
    align-items: center
    flex-direction: column
    justify-content: center
// responsive

@media (max-width: 812px), (pointer:none), (pointer:coarse)
  .sec-4
    padding-top: 80px
    h2
      font-size: 1.3rem
</style>
