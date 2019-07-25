<template>
    <section>
      <div v-for="(item, index) in field" :key="index" class="dflex align--items__center">
        <appImage 
          :urlImage="item.image"
          class="headline--image"
        />
        <div class="headline--content">
            <nuxt-link to="detail" class="headline--content__category">{{item.category}}</nuxt-link>
            <nuxt-link to="detail" class="headline--content__title"><h2>{{item.title}}</h2></nuxt-link>
            <ul class="dflex">
                <li>{{item.author}}</li>
                <li>|</li>
                <li>{{item.date}}</li>
            </ul>
        </div>
      </div>
    </section>
</template>

<script>
import { articles } from '../../assets/dummy/articles'
import appImage from '~/components/widget/appImage.vue'
export default {
  data () {
    return {
      articles,
      field: []
    }
  },
  components: {
    appImage
  },
  mounted(){
      this.field = articles.slice(0,1)
  }
}
</script>
