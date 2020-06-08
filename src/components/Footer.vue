<template>
  <div class="footer">
    <div class="row">
      <div class="col-lg-12">
        <div class="footer_txt">
          JS-objects-visualizer 2016&nbsp;-&nbsp;{{ getDate() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getDate: function(){
        let toDay = new Date()
        let year = toDay.getFullYear()
        // let month = toDay.getMonth() + 1;
        // let day = toDay.getDate();
        // let hour = toDay.getHours();
        // let minutes = toDay.getMinutes();
        // let seconds = toDay.getSeconds();
        // let dateTime = day+'.'+month+'.'+year+' '+hour+':'+minutes+':'+seconds;
        return year
      }
    }
  }
</script>

<style scoped>

</style>
