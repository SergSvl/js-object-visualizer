<template>
  <div class="header navbar navbar-fixed-top">
    <div class="header-inner">
      <!-- BEGIN LOGO -->
      <div class="title_header">Визуализация объектов JavaScript и их свойств</div>
      <!-- END LOGO -->
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  // import {store} from '../store/'
  // import {mapGetters} from 'vuex'
  // import {mapMutations} from 'vuex'

  export default {
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
  .nav>li>a{display: block;}
  .nav>li>a:hover, .nav>li>a:focus{
    background-color: #428bca !important;
    border-radius: 6px;
  }
  /* .header.navbar .navbar-brand img{margin:4px 10px 4px 12px;} */
  /* .navbar-brand{padding:3px !important;} */
  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  dl, ol, ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  .navbar_icons{
    min-width:180px;
    right:0;
    top:0px;
    position:absolute;
    padding: 5px;
  }
  .header.navbar{
    width:100%;
    padding:0 20px 0 20px;
    margin:0;border:0px;
    padding:0px;
    box-shadow:none;
    height:50px;
  }
  .header.navbar.navbar-fixed-top{
    z-index:101;
  }
  .header.navbar .navbar-brand{
    /* display:inline-block; */
    /* margin-top:-5px; */
    margin-right:0;
    padding-left:0;
    padding-right:0;
    min-height:60px;
    float:left;
  }
  .header.navbar .navbar-brand.text-logo{
    padding-left:20px;
    padding-top:12px;
  }
  .header.navbar .navbar-toggle{
    padding-top:2px;
    padding-left: 8px !important;
    background-image:none;filter:none;box-shadow:none;color:#fff;border:0;
  }
  .header.navbar .navbar-toggle:hover{text-decoration:none;background:none;}
  .header.navbar .navbar-nav{
    /* margin-right:15px; */
    display:block;
  }
  .header.navbar .navbar-nav > li{margin:0px;padding:0px;}
  .header.navbar .navbar-nav > li.dropdown,
  .header.navbar .navbar-nav > li.dropdown .dropdown-toggle{
    /* margin: -4px 0; */
    /* padding:15px 5px 7px 10px; */
    /* padding:10px 0px 2px 5px; */
    padding: 10px 3px 2px 3px;
  }
  a, a:focus, a:hover, a:active{outline:0;}
  .header.navbar .navbar-nav > li.dropdown .dropdown-toggle > i{font-size:18px;}
  .header.navbar .navbar-nav > li.dropdown .dropdown-menu > li > a > i{font-size:14px;}
  .header.navbar .navbar-nav > li.dropdown.user .dropdown-toggle:hover{text-decoration:none;}
  .header.navbar .navbar-nav > li.dropdown.user .dropdown-toggle .username,
  .header.navbar .navbar-nav > li.dropdown.user .dropdown-toggle .about_mnu{color:#ddd;font-size:16px;text-shadow:2px 2px 5px black;}
  .header.navbar .navbar-nav > li.dropdown.user .dropdown-toggle i{display:inline-block;margin-top:5px;margin:0;color:#ffc63a !important;padding:0 5px 0 3px;text-shadow:3px 3px 6px black;}
  .header.navbar .navbar-nav > li.dropdown.user .dropdown-menu i{width:15px;display:inline-block;}
  .header.navbar .navbar-nav > li.dropdown .dropdown-toggle .badge{position:absolute;top:8px;right:20px;}
  .header.navbar .search-form{float:left;
  /* display:inline-block; */
  padding:0;height:41px;margin:0;}
  .header.navbar .search-form .form-control{margin-top:8px;border:0;padding-top:1px;padding-right:27px;}
  .header.navbar .search-form .submit{position:relative;display:block;float:right;margin-top:-21px;margin-right:8px;width:13px;height:15px;box-shadow:none;border:0px;padding:0px;background-color:none;background-repeat:no-repeat !important;outline:none !important;opacity:0.8;filter:alpha(opacity=80);}
  .header.navbar .search-form .submit:hover{opacity:1;filter:alpha(opacity=100);}
  .header.navbar .navbar-nav > li.dropdown.language{padding-left:0;padding-right:0;margin:0;}
  .header.navbar .navbar-nav > li.dropdown.language > a{color:#ddd;font-size:13px;padding:11px 1px 11px 5px;}
  .header.navbar .navbar-nav > li.dropdown.language > a > img{margin-bottom:2px;}
  .header.navbar .navbar-nav > li.dropdown.language > a > i{font-size:16px;}
  .header.navbar .navbar-nav > li.dropdown.language > .dropdown-menu > li > a > img{margin-bottom:2px;}
  .header.navbar .navbar-nav .dropdown-menu{margin-top:3px;}

  .header{filter:none !important;background-image:none !important;background-color:#212121 !important;background-image:-webkit-linear-gradient(left, rgb(0,0,0) 0, rgb(0, 0, 104) 100%) !important;background-image:-o-linear-gradient(left, rgb(0,0,0) 0, rgb(0, 0, 104) 100%) !important;background-image:linear-gradient(to right, rgb(0,0,0) 0, rgb(0, 0, 104) 100%) !important;background-repeat:repeat-x !important;}
  .header .btn-navbar{background-color:#212121 !important;}
  .header .navbar-nav .dropdown-toggle:hover,
  .header .navbar-nav .dropdown.open .dropdown-toggle{background-color:#428bca !important;border-radius:6px;}
  .header .navbar-nav li.dropdown .dropdown-toggle i{color:#8a8a8a !important;}
  .dropdown-toggle::after{border: 0px}
  .header .search-form{background-color:#000;}
  .header .search-form .form-control{color:#999;border:0;background-color:#000;}
  .header .search-form .form-control::-webkit-input-placeholder{color:#777;}
  .header .search-form .form-control:-moz-placeholder{color:#777;}
  .header .search-form .form-control::-moz-placeholder{color:#777;}
  .header .search-form .form-control:-ms-input-placeholder{color:#777;}
  .header .search-form .submit{background:url(/assets/img/search-icon-light.png);}
  .header .hor-menu ul.nav li a{color:#999;}
  .header .hor-menu ul.nav li.open > a,
  .header .hor-menu ul.nav li > a:hover,
  .header .hor-menu ul.nav li > a:focus{color:#fff;background:#383838;}
  .header .hor-menu .dropdown-menu li:hover > a,
  .header .hor-menu ul.nav li.active > a,
  .header .hor-menu ul.nav li.active > a:hover{color:#fff;background:#e02222 !important;}
  .header .hor-menu ul.nav li.current > a,
  .header .hor-menu ul.nav li.current > a:hover{color:#fff;background:#e02222 !important;}
  .header .hor-menu .dropdown-menu{background:#383838;}
  .header .hor-menu .dropdown-menu li > a{color:#999;}
  .header .hor-menu .hor-menu-search-form-toggler.off{background:#383838 url(/assets/hor-menu-search-close.png) no-repeat center;}
  .header .hor-menu .search-form{background:#383838;}
  .header .hor-menu .search-form form input{color:#999;}
  .header .hor-menu .search-form .btn{color:#999;background:url(/assets/img/search-icon.png) no-repeat center;}
  .header .hor-menu .search-form form input::-webkit-input-placeholder{color:#999;}
  .header .hor-menu .search-form form input:-moz-placeholder{color:#999;}
  .header .hor-menu .search-form form input::-moz-placeholder{color:#999;}
  .header .hor-menu .search-form form input:-ms-input-placeholder{color:#999;}
  .header-inner{
    /* margin-top:5px; */
    height: 100%;
    padding-left: 5px;
  }
  .logo_borders{
    /* margin:4px 10px 4px 12px; */
    float: left;
    margin: 0px 10px;
    /* padding: 3px !important; */
  }
  .logo_text,.title_header{
    color:#fefefe;
    text-align:left;
    padding-top:0px;
    -webkit-transition:.3s;
    transition:.3s;
    display:block;
    /* width:80%; */
    font-size:24px;
    padding: 7px;
  }
  .navbar-nav>li>a{
    line-height: 20px;
  }

  .about_mnu > i.fa {
    font-size: 30px;
  }

  @media screen and (max-width: 1030x){
    .title_header {
        width: 60%!important;
    }
  }

  /* @media screen and (max-width:830px){
    .logo_text_portal{width: 85%;}
  } */

  @media screen and (max-width:767px){
    .header > .header-inner > .logo_text{
      background-image:none !important;background-color:#212121 !important;background-image:-webkit-linear-gradient(left, rgb(0,0,0) 0, rgb(0, 0, 104) 100%) !important;background-image:-o-linear-gradient(left, rgb(0,0,0) 0, rgb(0, 0, 104) 100%) !important;background-image:linear-gradient(to right, rgb(0,0,0) 0, rgb(0, 0, 104) 100%) !important;background-repeat:repeat-x !important;
    }
    .header.navbar .navbar-nav{margin-right:0px;}
  }

  @media screen and (max-width:640px){
  /* .header.navbar .navbar-nav > li.dropdown,
  .header.navbar .navbar-nav > li.dropdown > a{padding-left:0px;padding-right:4px;} */
  .navbar-toggle{margin: 5px 0px; padding: 6px 4px 7px 8px;}
  /* .header.navbar .navbar-nav > li.dropdown:last-child {
    padding-right: 0px;
  } */
  }

  @media screen and (max-width: 420px){
    .title_header {
      font-size: 14px;
      width: 70%;
    }
  }

</style>
