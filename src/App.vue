<template>
  <div class="app-wrapper">
    <div class="header-wrapper">
      <Header></Header>
      <NewYearBalls v-if="winter"></NewYearBalls>
    </div>
    <div class="content-wrapper">
      <div class="page-content">
        <router-view></router-view>
      </div>
      <YaMetrikaInformer></YaMetrikaInformer>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';
  import NewYearBalls from './components/NewYearBalls';
  import YaMetrikaInformer from './components/YaMetrikaInformer';
  
  export default {
    name: 'app',
    
    components: {
      Header,
      Footer,
      NewYearBalls,
      YaMetrikaInformer
    },

    data () {
      return {
        winter: false,
        reflectHeight: 0.35,
        reflectOpacity: 0.5,
      }
    },

    methods: {
      NewYearBalls: function(){
        let width = document.body.clientWidth;
        let cont = document.querySelector('.content-wrapper');
        // console.log(width)
        let routePath = this.$route.path
        // console.log('route: ', routePath)
        let toDay = new Date();
        let month = toDay.getMonth() + 1;
        if (routePath == '/' && (month == 12 || month == 1 || month == 2) && width > 576){
          // console.log(month);
          var lastScr = document.getElementsByTagName("script"),
              lastScrLen = lastScr.length,
              notExistScript = true

          // console.log('lastScr: ', lastScr)
          for (var i=0; i < lastScrLen; i++){
            if (lastScr[i].src.indexOf('/assets/js/balls.js') != -1){
              notExistScript = false
            }
          }
          if (notExistScript){
            cont.style.marginTop = '125px';            
            var num = lastScr[lastScrLen-1],
                scrBalls = document.createElement("script")
            num.parentNode.insertBefore(scrBalls, num);
            scrBalls.type = "text/javascript";
            scrBalls.async = true;
            scrBalls.src = "/assets/js/balls.js";
            this.winter = true; // зима пришла, пора включить шары
          }
          // console.log('scrBalls: ', scrBalls)
        } else {
          cont.style.marginTop = '40px'
          this.winter = false
        }
      },
      /* Библиотека reflection.js for jQuery v1.11 */
      /* Для этой библиотеки используется jQuery, подключаемое в index.html */
      getReflect(height, opacity){
        $(".reflect img").reflect({
          height: height, // высота отражения: 90 px = 35%
          opacity: opacity
        });
      },
    },

    updated: function(){
      this.getReflect(this.reflectHeight, this.reflectOpacity)
      this.NewYearBalls()
    },

    mounted: function(){
      // console.log('devServer: ', this.devServer);
      this.NewYearBalls()
      this.getReflect(this.reflectHeight, this.reflectOpacity)
      // console.log('BASE_URL: ', this.$router.base);
      // console.log('NODE_ENV: ', this.$store.strict);
      // console.log('ENV: ', this.$store.env);
      // console.log('BASE_URL: ', this.$store.base);
      // console.log('process: ', this.$store.process);

      /*
      // ф-ция вешает событие клика на кнопки
      (function() {
        let buttons = document.querySelectorAll('.btn_title_icon');
        
        buttons.forEach((elem)=>{
          elem.addEventListener('click',()=>{
            let el = elem.parentNode.querySelector('.wrap-slide');
              // console.log(el.classList.contains('btn_text_closed'));
              el.classList.toggle('btn_text_closed');
              el.classList.toggle('btn_text_open');
          })
        })
        console.log(buttons);
      })();*/

      /*
      (function() {
      $('.btn_title_icon').click(function() {
          var speed = 200;
          var elem = $(this).next();
          if (elem.css('display') == 'none') $(elem).slideDown(speed);
          else $(elem).slideUp(speed);
        });
      })();*/
    },
  }
</script>

<style lang="less">
  @import "~less/app"; // файл app.less, ~less - это алиас пути
</style>
