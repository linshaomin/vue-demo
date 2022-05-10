import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/childrenInfo',
    children: [
      {
        path: 'childrenInfo',
        name: 'childrenInfo',
        component: () => import('@/views/table/childrenInfo'),
        meta: { title: '儿童信息管理' }
      }
    ]
  },
  {
    path: '/childHealth',
    component: Layout,
    children: [
      {
        path: 'childHealth',
        component: () => import('@/views/table/childHealth'),
        meta: { title: '儿童健康管理' }
      }
    ]
  },
  {
    path: '/parentInfo',
    component: Layout,
    children: [
      {
        path: 'parentInfo',
        component: () => import('@/views/table/parentInfo'),
        meta: { title: '家长信息管理' }
      }
    ]
  },
  {
    path: '/schoolInfo',
    component: Layout,
    children: [
      {
        path: 'schoolInfo',
        component: () => import('@/views/table/schoolInfo'),
        meta: { title: '儿童在校记录' }
      }
    ]
  },
  {
    path: '/logisticsInfo',
    component: Layout,
    children: [
      {
        path: 'logisticsInfo',
        component: () => import('@/views/table/logisticsInfo'),
        meta: { title: '园内后勤管理' }
      }
    ]
  },
  {
    path: '/affairInfo',
    component: Layout,
    children: [
      {
        path: 'affairInfo',
        component: () => import('@/views/table/affairInfo'),
        meta: { title: '园内事务' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
