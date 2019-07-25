<template>
  <main class="wrapper">
    <headline />
    <no-ssr>
      <latestPost />
    </no-ssr>
  </main>
</template>

<script>
import headline from '~/components/index/headline.vue'
import latestPost from '~/components/index/latestPost.vue'
export default {
  components: {
    headline,
    latestPost
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>