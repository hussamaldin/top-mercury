import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";
import Why from "../components/Why.vue";
import FaceBook from "../components/FaceBook.vue";
import Instagram from "../components/Instagram.vue";
import Penterist from "../components/Penterist.vue";
import Quora from "../components/Quora.vue";
import Youtube from "../components/Youtube.vue";
import Snapshat from "../components/Snapshat.vue";
import Twitter from "../components/Twitter.vue";
import TikTok from "../components/TikTok.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/why-topmercury",
    name: "why",
    component: Why,
  },
  {
    path: "/tiktok",
    name: "tiktok",
    component: TikTok,
  },
  {
    path: "/facebook",
    name: "facebook",
    component: FaceBook,
  },
  {
    path: "/instagram",
    name: "instagram",
    component: Instagram,
  },
  {
    path: "/quora",
    name: "quora",
    component: Quora,
  },
  {
    path: "/snapshat",
    name: "snapshat",
    component: Snapshat,
  },
  {
    path: "/twitter",
    name: "twitter",
    component: Twitter,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: Youtube,
  },
  {
    path: "/penterist",
    name: "penterist",
    component: Penterist,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
