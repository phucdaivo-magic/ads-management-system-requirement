import Vue from 'vue';
import Router from 'vue-router';
// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer');

Vue.use(Router);

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/Index')
        },
        {
          path: '/report',
          name: 'Report',
          component: () => import('@/views/report/Index')
        }
      ]
    },
    // {
    //   path: '/',
    //   redirect: '/apartment/table',
    //   name: 'Home',
    //   component: DefaultContainer,
    //   children: [
    //     {
    //       path: '/apartment/table',
    //       name: 'table-apartment',
    //       component: Apartment
    //     },
    //     {
    //       path: '/apartment/create',
    //       name: 'create-apartment',
    //       component: ApartmentCreate
    //     },
    //     {
    //       path: '/apartment/:id',
    //       name: 'detail-apartment',
    //       component: ApartmentDetail
    //     },
    //   ]
    // },
  ]
})
