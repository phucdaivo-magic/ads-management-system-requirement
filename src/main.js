// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import DatatableFactory from 'vuejs-datatable/dist/vuejs-datatable.esm.js';
import moment from 'moment-timezone'

window.moment = moment;
window.Swal = require('sweetalert2');
// Magic component
import DataForm from './components/form/form';
import DataTable from './components/table/Table';
window._ = require('lodash');
// Utils
window.utils = _.merge(
  require('./utlis/formats').default,
  require('./utlis/comon').default
)
Vue.use(DatatableFactory)
Vue.use(BootstrapVue)
Vue.component('DataForm', DataForm);
Vue.component('DataTable', DataTable);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
