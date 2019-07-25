<template>
    <div>
        <article class="detail" v-for="(item, index) in detailArr" :key="index">
            <h2 class="article__title">{{item.title}}</h2>
            <div class="article__info">
                <span class="headline--content__category">{{item.category}}</span>
                <span class="article__author">{{item.author}} | {{item.date}}</span>
            </div>
            <img :src="item.image" alt="Change">
            <div v-html="item.content"></div>
        </article>
    </div>
</template>

<script>
import { articles } from '../../assets/dummy/articles'
export default {
    props:{
        param: String
    },
    data() {
        return {
            articles
        }
    },
    computed: {
      detailArr(){
        let arr = this.articles.filter(field => this.param == field.slug).slice(0,1)
        return arr
      }
    }
}
</script>
