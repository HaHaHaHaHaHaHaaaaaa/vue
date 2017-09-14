import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Wbl from '@/views/Wbl'
import Child from '@/views/components/Child'
import Child1 from '@/views/components/Child1'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: Full,
    children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'wbl',
        name: 'Wbl',
        component: Wbl
      },
      {
        path: 'components',
        redirect: '/components/child',
        name: 'Components',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [{
            path: 'child',
            name: 'Child',
            component: Child
          },
          {
            path: 'child1',
            name: 'Child1',
            component: Child1
          }
        ]
      },

    ]
  }]
})
