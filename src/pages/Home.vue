<template>
  <div class="row-btn">
    <VisualizeObj :obj="Obj"></VisualizeObj>
  </div>
</template>

<script>
import { store } from '../store/'
import VisualizeObj from '../components/VisualizeObj'

export default {
  data() {
    return {
      Obj: { el: window.event },
    }
  },
  created() {
    console.log('obj = ', this.Object)
  },
  components: {
    VisualizeObj,
  },
  methods: {
  },

  mounted() {
    document.title = this.taskTitle
  },
}
</script>

<style>
hr {
  border-top: 1px solid #ccc !important;
}
@media screen and (max-width: 1200px) {
  .input_rgba,
  .wrap_preview_site,
  .save_btn {
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
