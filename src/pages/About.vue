<template>
  <div class="row">
    <div class="col-lg-12">
      <p><h3>О ПОРТАЛЕ</h3></p>
      <br/><br/>
      <div class="row">
        <div class="col-lg-12">
          <div class="about_wrap">
            <div class="about_title">Доступные производственные задачи</div><div class="about_text"><div class="about_space"></div><ul><li>Управление персоналом</li><li>Складской учет</li></ul></div><div class="about_title"><br>Проектирование и разработка</div><div class="about_text"><div class="about_space"></div><ul><li class="about_list">Портал разработан специалистами филиала «Балтийский Алмаз»  АО «ЭлектроРадиоАвтоматика».</li></ul></div><div class="about_title"><br>Разработчики</div><div class="about_text"><div class="about_space"></div><ul><li>Программирование, дизайн - Шевляков С. П.</li><li>Постановка задач, контроль качества, тестирование - Благутин С. Б.</li></ul></div><div class="about_title"><br>Контакты</div><div class="about_text"><div class="about_space"></div><ul><li class="about_list">г. Санкт-Петербург </li><li class="about_list">Телефон: </li><li class="about_list">e-mail: </li></ul></div><div class="about_title"><br>Первый релиз</div><div class="about_text"><div class="about_space"></div><ul><li class="about_list">Июль 2016 г.</li></ul></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getDate: function(){
        let toDay = new Date();
        let year = toDay.getFullYear();
        // let month = toDay.getMonth() + 1;
        // let day = toDay.getDate();
        // let hour = toDay.getHours();
        // let minutes = toDay.getMinutes();
        // let seconds = toDay.getSeconds();
        // let dateTime = day+'.'+month+'.'+year+' '+hour+':'+minutes+':'+seconds;
        return year;
      }
    }
  }
</script>

<style scoped>