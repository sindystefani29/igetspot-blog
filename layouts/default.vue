<template>
  <div>
    <headerMenu />
    <nuxt />
    <footerMenu />
  </div>
</template>

<script>
import headerMenu from '~/components/layout/headerMenu.vue'
import footerMenu from '~/components/layout/footerMenu.vue'
export default {
  components: {
    headerMenu,
    footerMenu
  }
}
</script>