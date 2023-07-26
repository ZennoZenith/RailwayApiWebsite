import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsView from '../views/DocsView.vue'
import WrapperView from '../views/WrapperView.vue'
import DocsAuthenticationView from '../views/DocsAuthView.vue'
import DocsResponseView from '../views/DocsResponseView.vue'
import DocsErrorCodeView from '../views/DocsErrorCodeView.vue'
import DocsIntroductionView from '../views/DocsIntroductionView.vue'
import DocsVersioningView from '../views/DocsVersioningView.vue'
import DocsOperationsView from '../views/DocsOperationsView.vue'
import DocsOpTrainsGenView from '../views/DocsOpTrainsGenView.vue'
import DocsOpTrainsInfoView from '../views/DocsOpTrainsInfoView.vue'
import DocsOpStationsGenView from '../views/DocsOpStationsGenView.vue'
import DocsOpStationsInfoView from '../views/DocsOpStationsInfoView.vue'
import DocsOpSchedulesViewVue from '../views/DocsOpSchedulesView.vue'
import DocsOpTrainsBtwStationsView from '../views/DocsOpTrainsBtwStationsView.vue'
import DocsOpMiscView from '../views/DocsOpMiscView.vue'
import NotFound from '../views/NotFoundView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/wrapper',
    name: 'wrapper',
    component: WrapperView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue'),
  // },
  {
    path: '/docs',
    component: DocsView,
    children: [
      {
        name: 'docs',
        path: '',
        component: DocsIntroductionView,
      },
      {
        path: 'authentication',
        component: DocsAuthenticationView,
      },
      {
        path: 'responsecodes',
        component: DocsResponseView,
      },
      {
        path: 'errorcodes',
        component: DocsErrorCodeView,
      },
      {
        path: 'versioning',
        component: DocsVersioningView,
      },
      {
        path: 'operations',
        component: DocsOperationsView,
      },
      {
        path: 'operation/train-list',
        component: DocsOpTrainsGenView,
      },
      {
        path: 'operation/train-info',
        component: DocsOpTrainsInfoView,
      },
      {
        path: 'operation/station-list',
        component: DocsOpStationsGenView,
      },
      {
        path: 'operation/station-info',
        component: DocsOpStationsInfoView,
      },
      {
        path: 'operation/schedule',
        component: DocsOpSchedulesViewVue,
      },
      {
        path: 'operation/trains-between-stations',
        component: DocsOpTrainsBtwStationsView,
      },
      {
        path: 'operation/misc',
        component: DocsOpMiscView,
      },
    ],
  },
  { path: '/:pathMatch(.*)', name: 'notFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link-exact',
})

export default router
