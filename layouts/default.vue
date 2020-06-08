<template>
  <div class="container">
    <navbar />
    <nuxt />
    <c-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navbar from '@/components/layout/default/navbar.vue'
import cFooter from '@/components/layout/default/footer.vue'
@Component({
  components: {
    navbar,
    cFooter
  }
})
export default class index extends Vue {

}
</script>
<style lang="sass" scoped>
.container
  position: relative
</style>
