import VueRouter from 'vue-router'
// import Home from './pages/Home'
// import E404 from './pages/E404'
// import wordersInfo from './pages/worders/Info'
// import archiveStart from './pages/archive/Start'
// import wordersLogin from './pages/worders/Login'
// import archiveLogin from './pages/archive/Login'
// import About from './pages/About'

// import path from 'path'
// path: path.resolve(__dirname, './dist'),
// console.log(__dirname);
// console.log(path.resolve(__dirname, '//login'));

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/about',
    //   component: About
    // component: () => import('./pages/About')
    // },
    {
      path: '',
      name: "home", // это имя подставляется в router-link в тэг :to={name:"home"}
      // component: Home
      // @ts-ignore
      component: () => import('../pages/Home')
    },
    {
      path: '*',
      name: '',
      // component: E404
      // @ts-ignore
      component: () => import('../pages/E404')
    },
  ]
})
