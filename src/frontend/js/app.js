import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";
import MainNav from "./components/MainNav";
Vue.use(VueRouter);
const router = new VueRouter({ routes });
Vue.component("main-nav", MainNav);
new Vue({
  router,
  store,
  template: `
    <div class="fixed flex h-screen w-screen overflow-hidden select-none">
        <main-nav></main-nav>
        <div class="relative w-full bg-grey-light">
            <transition name="screen">
                <router-view></router-view>
            </transition>
        </div>
    </div>`,
  el: "#getcontent"
});
