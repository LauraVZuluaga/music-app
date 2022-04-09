import { createApp, VueElement } from 'vue'
import Vue from 'vue'
import vueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from "@/plugins/font-awesome";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// const i18n = new vueI18n({
//   messages,
//   locale: defaultLocale,
//   fallbackLocale: defaultLocale
// });


createApp(App).use(store).use(router).component("fa", FontAwesomeIcon).mount('#app')
