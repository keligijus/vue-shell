import Vue from 'vue';
import App from './App.vue';
import PortalVue from 'portal-vue';

const mountVueApp = mountTarget => {
  Vue.use(PortalVue);

  // Global Vue component to be used to emit and consume data
  const EventBus = new Vue();
  const eventPlugin = {
    install() {
      Vue.prototype.$bus = EventBus;
    }
  };
  Vue.use(eventPlugin);

  const app = new Vue({
    template: `<vue-app />`,
    render: h => h(App)
  });

  const targetEl = document.querySelector(mountTarget || '#vue-app');

  if (targetEl) {
    app.$mount(mountTarget || '#vue-app');
  }
};

export default mountVueApp;
