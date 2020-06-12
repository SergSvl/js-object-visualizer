<template>
  <div class="row-btn">
    Здесь объект
    <!-- <portal-btn v-for="(item, index) in buttons"
      :key="index"
      :item="item"
    ></portal-btn> -->
  </div>
</template>

<script>
  import {store} from '../store/'
  // import {mapMutations} from 'vuex'

  export default {
    data () {
      return {
        // buttons: GetButtons,
        // taskTitle: 'Визуализация объектов JavaScript и их свойств',
      }
    },
    created(){
      // this.btnHomeOff()
      // this.btnLogoutOff()
      // this.btnLoginOff()
    },
    components: {
      // PortalBtn,
      // GetButtons
    },
    methods: {
      // ...mapMutations([
      //   'btnHomeOff',
      //   'btnLogoutOff',
      //   'btnLoginOff'
      // ])
    },

    mounted(){
      document.title = this.taskTitle
    }
  }
</script>

<style>
  hr {
    border-top: 1px solid #ccc !important;
  }
  @media screen and (max-width: 1200px) {
    .input_rgba, .wrap_preview_site, .save_btn {
      width: 100% !important;
    }
    .wrap_preview_site {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  textarea {
    width: 100% !important;
  }
</style>
