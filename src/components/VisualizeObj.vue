<template>
  <div class="card-wrapper">
    <el-card class="box-card"
      v-for="(val, name) in obj" :key="name"
    >
      <div class="title">
        <span>{{ name }}</span>
        <span>{{ val }}</span>
      </div>
      <!-- <div class="text">
        <span>{{ ob.val}}</span>
      </div> -->
    </el-card>
  </div>
</template>

<script>
  import '@babel/polyfill'
  import Vuex from 'vuex'
  // Настройки темы element-ui
  import { Card } from 'element-ui'
  import lang from 'element-ui/lib/locale/lang/ru-RU'
  import locale from 'element-ui/lib/locale'
  locale.use(lang)
  // import {store} from '../store/'
  // import {mapGetters} from 'vuex'
  // import {mapMutations} from 'vuex'

  export default {
    components: {
      'el-card': Card
    },
    props: {
      obj: {
        type: Object,
        default: ''
      },
    },
    data(){
      return {
        activeUser: '',
        activeUserEmail: '',
        tableName: 'announcement',
      }
    },
    computed: {
      // ...mapGetters([
      //   'task',
      //   'config',
      // ])
    },
    methods: {
      // ...mapMutations([

      // ])
    },
    beforeMount(){
    }

  }
</script>

<style scoped>

</style>
