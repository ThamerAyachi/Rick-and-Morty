import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Character from '../views/Character.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Episode from '../views/Episode'
import Characters from '../views/Characters'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/', name: 'Home', component: Home },
      { path: '/about', name: 'About', component: About},
      { path: '/character/:id', name: 'Character', component: Character},
      { path: '/episode/:id', name: 'Episode', component: Episode },
      { path: '/characters', name: 'Characters', component: Characters}
    ]
  },
  { path: '/404', name: 'PageNotFound', component: PageNotFound },
  {path: '/:catchAll(.*)', redirect: '/404'}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
