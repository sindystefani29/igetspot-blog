<template>
    <section>
        <div class="dflex align--items__center latest--title">
            <h3>Latest Post</h3>
        </div>
        <div v-masonry transition-duration="1s" item-selector=".item" class="latest masonry-container dflex">
            <nuxt-link :to="item.slug" v-masonry-tile class="item latest--card dflex" v-for="(item, index) in field" :key="index">
                <div class="latest--image">
                    <appImage 
                        :urlImage="item.image"
                    />
                </div>
                <div class="latest--content">
                    <nuxt-link :to="item.category" class="latest--content__category">{{item.category}}</nuxt-link>
                    <nuxt-link :to="item.slug" class="latest--content__title"><h3>{{item.title}}</h3></nuxt-link>
                    <ul class="dflex">
                        <li>{{item.author}}</li>
                        <li>|</li>
                        <li>{{item.date}}</li>
                    </ul>
                    <p>{{item.excerpt}}</p>
                </div>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
import { articles } from '../../assets/dummy/articles'
import appImage from '~/components/widget/appImage.vue'
export default {
  components: {
    appImage
  },
  data() {
    return {
      articles,
      field: []
    }
  },
  mounted () {
      this.field = articles.slice(0,16)
  }
}
</script>