<template>
  <div class="app-wrapper">
    <div class="header-wrapper">
      <Header></Header>
    </div>
    <div class="content-wrapper">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'app',

    components: {
      Header,
      Footer,
    },

    data () {
      return {

      }
    },

    methods: {

    },

    updated: function(){

    },

    mounted: function(){
      // console.log('devServer: ', this.devServer);
      // console.log('BASE_URL: ', this.$router.base);
      // console.log('NODE_ENV: ', this.$store.strict);
      // console.log('ENV: ', this.$store.env);
      // console.log('BASE_URL: ', this.$store.base);
      // console.log('process: ', this.$store.process);
    },
  }
</script>

<style lang="less">
  @import "~less/app" // файл app.less, ~less - это алиас пути
</style>
