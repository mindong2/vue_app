import { createRouter, createWebHistory } from "vue-router";
import vuex from "vue-router";
// import ListItem from "../components/ListItem.vue";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import store from '../store/index'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/item/:id",
    name: "item",
    component: ItemView,
  },
  {
    // Dynamic router params
    path: "/user/:id",
    name: "user",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit('startSpinner');
  setTimeout(() => {
      next();
  }, 750);
});

router.afterEach((to, from) => {
  store.commit('endSpinner');
})

export default router;
