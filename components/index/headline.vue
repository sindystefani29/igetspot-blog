<template>
    <section>
      <div v-for="(item, index) in field" :key="index" class="dflex align--items__center">
        <div class="headline--image glitch"
            :style="`background-image: url(${item.image})`">
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
            <img :src="item.image" alt="Article Title">
        </div>  
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
export default {
  data () {
    return {
      articles,
      field: []
    }
  },
  mounted(){
      this.field = articles.slice(0,1)
  }
}
</script>
