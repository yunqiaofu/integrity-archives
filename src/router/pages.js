
export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
  // {
  // path: '/about',
  // name: 'About',
  // component: () => import('../views/About.vue')
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // 懒加载
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
