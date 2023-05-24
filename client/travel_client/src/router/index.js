import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../pages/Home.vue";
import Travel from "../pages/Travel.vue";
import Hotel from "../pages/Hotel.vue";
import About from '../pages/About.vue'
import Insurance from '../pages/Insurance.vue'
const routes = [
  { path: "/", component: Home },
  { path: "/travel", component: Travel },
  { path: "/hotel", component: Hotel },
  { path: "/about", component: About },
  { path: "/Insurance", component: Insurance },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
