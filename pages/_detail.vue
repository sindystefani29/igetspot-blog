<template>
  <main class="wrapper">
    <articlePage
      :param="paramId"
    />
  </main>
</template>

<script>
import articlePage from '~/components/index/article.vue'
export default {
  components: {
    articlePage
  },
  async asyncData({ params }) {
    return {
       paramId: params.detail
    } 
  }
}
</script>