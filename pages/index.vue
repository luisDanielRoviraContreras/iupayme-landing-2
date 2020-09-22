<template>
  <div class="index">
    <navbar />
    <sec1 />
    <sec2 />
    <master />
    <chat />
    <banner0 />
    <sec3 />
    <banner1 />
    <logos />
    <sec4 />
    <chamos />
    <sec5 />
    <c-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navbar from '@/components/layout/default/navbar.vue'
import cFooter from '@/components/layout/default/footer.vue'
import sec1 from '@/components/sections/section1.vue'
import sec2 from '@/components/sections/section2.vue'
import sec3 from '@/components/sections/section3.vue'
import sec4 from '@/components/sections/section4.vue'
import sec5 from '@/components/sections/section5.vue'
import banner1 from '@/components/banners/banner1.vue'
import banner0 from '@/components/banners/banner0.vue'
import master from '@/components/banners/mastercard.vue'
import chat from '@/components/banners/chat.vue'
import logos from '@/components/banners/logos.vue'
import chamos from '@/components/banners/chamos.vue'
@Component({
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  components: {
    navbar,
    cFooter,
    sec1,
    sec2,
    sec3,
    sec4,
    sec5,
    banner0,
    banner1,
    master,
    chat,
    logos,
    chamos
  }
})
export default class index extends Vue {

}
</script>
<style lang="sass">
  .index
    widows: 100%
    height: 100v
</style>
