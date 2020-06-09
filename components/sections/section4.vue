<template>
  <section id="sec-4" class="sec-4">
    <h2>
      Preguntas Frecuentes
    </h2>

    <div class="con-content">
      <collapse>
        <template #title>
          Que es iuPayme?
        </template>

        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor metus at euismod varius. Pellentesque dignissim dolor nulla, in rhoncus turpis blandit in. Sed volutpat, nisi euismod bibendum tristique, est mauris porta nulla, at dictum mauris ligula sed justo. Aliquam nec mauris velit. Donec egestas erat ac faucibus interdum. Nunc eget nisi elementum, convallis nunc a, consequat justo. Morbi ac dolor lobortis, placerat quam a, gravida massa.
      </collapse>
      <collapse>
        <template #title>
          Desde que edad puedo tener una cuenta?
        </template>

        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor metus at euismod varius. Pellentesque dignissim dolor nulla, in rhoncus turpis blandit in. Sed volutpat, nisi euismod bibendum tristique, est mauris porta nulla, at dictum mauris ligula sed justo. Aliquam nec mauris velit. Donec egestas erat ac faucibus interdum. Nunc eget nisi elementum, convallis nunc a, consequat justo. Morbi ac dolor lobortis, placerat quam a, gravida massa.
      </collapse>
      <collapse>
        <template #title>
          Cual es el limite de dinero permitido que puedo transferir ?
        </template>

        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor metus at euismod varius. Pellentesque dignissim dolor nulla, in rhoncus turpis blandit in. Sed volutpat, nisi euismod bibendum tristique, est mauris porta nulla, at dictum mauris ligula sed justo. Aliquam nec mauris velit. Donec egestas erat ac faucibus interdum. Nunc eget nisi elementum, convallis nunc a, consequat justo. Morbi ac dolor lobortis, placerat quam a, gravida massa.
      </collapse>
      <collapse>
        <template #title>
          Cuantos usuarios puedo tener ?
        </template>

        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor metus at euismod varius. Pellentesque dignissim dolor nulla, in rhoncus turpis blandit in. Sed volutpat, nisi euismod bibendum tristique, est mauris porta nulla, at dictum mauris ligula sed justo. Aliquam nec mauris velit. Donec egestas erat ac faucibus interdum. Nunc eget nisi elementum, convallis nunc a, consequat justo. Morbi ac dolor lobortis, placerat quam a, gravida massa.
      </collapse>
      <collapse>
        <template #title>
          Que documentos necesito para crear mi cuenta ?
        </template>

        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor metus at euismod varius. Pellentesque dignissim dolor nulla, in rhoncus turpis blandit in. Sed volutpat, nisi euismod bibendum tristique, est mauris porta nulla, at dictum mauris ligula sed justo. Aliquam nec mauris velit. Donec egestas erat ac faucibus interdum. Nunc eget nisi elementum, convallis nunc a, consequat justo. Morbi ac dolor lobortis, placerat quam a, gravida massa.
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
export default class sec4 extends Vue {}
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
      font-size: 1.5rem
</style>
