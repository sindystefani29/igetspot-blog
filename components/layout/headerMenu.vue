<template>
    <header class="topbar">
        <h2>BLOG.</h2>

        <menu class="float-menu" id="float-menu">
            <h4 class="float-menu__heading">Categories</h4>

            <ul class="menu list" id="menu">
                <li>
                    <a href="" 
                       data-background="https://images.unsplash.com/photo-1480779687977-36af2e48d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=70">Photography</a>
                </li>
                <li>
                    <a href=""
                       data-background="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=70">Videography</a>
                </li>
                <li>
                    <a href=""
                       data-background="https://images.unsplash.com/photo-1505682732560-497f376018e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=70">Fashion</a>
                </li>
                <li>
                    <a href=""
                       data-background="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=70">Food</a>
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
export default {
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
            ease: Power4.easeInOut,
            onComplete: switchMenuStat
          }
        )
      }else{
        TweenMax.to(floatMenu, 1, 
          {
            y: '0', 
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
