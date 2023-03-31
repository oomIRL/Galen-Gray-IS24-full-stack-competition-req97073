import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppDetails from '../views/AppDetails.vue'
import AppUpdate from '../views/AppUpdate.vue'
import AppCreate from '../views/AppCreate.vue'
import AppSearch from '../views/AppSearch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/apps/:id',
    name: 'details',
    component: AppDetails,
    props: true
  },
  {
    path: '/apps/update/:id',
    name: 'update',
    component: AppUpdate,
    props: true
  },
  {
    path: '/apps/new',
    name: 'new',
    component: AppCreate
  },
  {
    path: '/apps/search',
    name: 'search',
    component: AppSearch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
