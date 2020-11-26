// <reference path="../../typings/tsd.d.ts" />

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ContextMenu from 'primevue/contextmenu';
import Toolbar from 'primevue/toolbar';
import SplitButton from 'primevue/splitbutton';
import Dialog from 'primevue/dialog';
import createServer from '../mirage/server';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

Vue.component('Button', Button);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ContextMenu', ContextMenu);
Vue.component('Toolbar', Toolbar);
Vue.component('SplitButton', SplitButton);
Vue.component('Dialog', Dialog);
Vue.component('InputText', InputText);
Vue.component('Dropdown', Dropdown);

createServer();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
