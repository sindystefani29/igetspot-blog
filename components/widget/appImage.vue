<template>
    <div class="glitch" :style="`background-image: url(${urlImage})`">
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
        <img :src="urlImage" alt="Article Title">
     </div> 
</template>

<script>
export default {
    props: {
        urlImage: String
    }
}
</script>
