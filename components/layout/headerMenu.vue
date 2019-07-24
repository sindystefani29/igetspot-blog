<template>
    <header class="topbar">
        <h2>BLOG.</h2>

        <menu class="float-menu" id="float-menu">
            <h4 class="float-menu__heading">Categories</h4>

            <ul class="menu list" id="menu">
                <li v-for="(menu, index) in category" :key="index">
                    <a href="" 
                       :data-background="menu.image">{{menu.name}}</a>
                </li>
            </ul>
        </menu>

        <a href="javascript:;" id="triggerer" class="circle">
            <span class="burger">
                <span class="burger__line"></span>
            </span>
        </a>
    </header>
</template>

<script>
import { category } from '../../assets/dummy/category'
export default {
  data () {
    return {
      category
    }
  },
  mounted(){
    const listMenu = document.querySelectorAll('.menu li a')
    const floatMenu = document.getElementById('float-menu')
    const burger = document.querySelector('#triggerer')

    let windowHeight = window.innerHeight
    let menuIsOpen = false

    const switchMenuStat = () => {
      return menuIsOpen = !menuIsOpen
    }

    listMenu.forEach((menu) => {
      menu.addEventListener('mouseenter', function() {
        let dataBackground = this.dataset.background

        floatMenu.style.backgroundImage = `url(${dataBackground})`
      })

      menu.addEventListener('mouseout', function() {
        floatMenu.style.backgroundImage = ''
      })
    })

    burger.addEventListener('click', () => {
      if (menuIsOpen) {
        TweenMax.to(floatMenu, 1, 
          {
            y: `-${windowHeight}`,
            scaleY: '0', 
            ease: Power4.easeInOut,
            onComplete: switchMenuStat
          }
        )
      }else{
        TweenMax.to(floatMenu, 1, 
          {
            y: '0',
            scaleY: '1',
            ease: Power4.easeInOut,
            onComplete: switchMenuStat
          }
        )

        TweenMax.staggerFrom(listMenu, .8, 
          {
            y: 100, 
            delay: .5, 
            opacity: 0,
            ease: Power2.easeInOut
          }, 
        .2)
      }
    })
  }
}
</script>
