import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';

const routes = [
  { path: "/", component: Home },

  { 
    path: "/list", 
    component: List,
    props: route => ({ blogs: route.query.blogs })
  },

  { 
    path: "/detail/:id", 
    component: Detail,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;