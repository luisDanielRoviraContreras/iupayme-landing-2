<template>
  <div class="container">
    <nuxt />
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
  removeActives () {
    const btns = document.querySelectorAll('.navbar > ul > li')
    btns.forEach((btn) => {
      btn.classList.remove('active')
    })
  }

  handleScroll () {
    const sec2: HTMLElement = document.querySelector('#sec-2')
    const sec3: HTMLElement = document.querySelector('#sec-3')
    const sec4: HTMLElement = document.querySelector('#sec-4')
    if (!sec2) {
      return
    }
    if (window.pageYOffset > sec2.offsetTop - 150 && window.pageYOffset < sec3.offsetTop - 150) {
      this.removeActives()
      document.querySelector('#sec-2-btn').classList.add('active')
    } else if (window.pageYOffset > sec3.offsetTop - 150 && window.pageYOffset < sec4.offsetTop - 150) {
      this.removeActives()
      document.querySelector('#sec-3-btn').classList.add('active')
    } else if (window.pageYOffset > sec4.offsetTop - 150) {
      this.removeActives()
      document.querySelector('#sec-4-btn').classList.add('active')
    } else {
      this.removeActives()
      document.querySelector('#sec-1-btn').classList.add('active')
    }
  }

  mounted () {
    if (window.innerWidth > 812) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
}
</script>
<style lang="sass" scoped>
.container
  position: relative
</style>
