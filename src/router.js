import Vue from "vue";
import Router from "vue-router";
import Home from "./Home";
import Demo_1_01_Scroll from "./demos/1.01-scroll/Inheritance";
import Demo_1_02_ScrollComponent from "./demos/1.02-scroll-component";
import Demo_1_03_Adaptive_Multiselect from "./demos/1.03-adaptive-multiselect";
import Demo_1_04_Modal from "./demos/1.04-modal";
import Demo_1_05_Search from "./demos/1.05-search";
import Demo_2_02_Async_Components from "./demos/2.02-async-components";
import Demo_2_03_Observer_Component from "./demos/2.03-observer-component";
import Demo_2_04_Lazy_Image from "./demos/2.04-lazy-image";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/1.01-scroll",
      component: Demo_1_01_Scroll
    },
    {
      path: "/1.02-scroll-component",
      component: Demo_1_02_ScrollComponent
    },
    {
      path: "/1.03-adaptive-multiselect",
      component: Demo_1_03_Adaptive_Multiselect
    },
    {
      path: "/1.04-modal",
      component: Demo_1_04_Modal
    },
    {
      path: "/1.05-search",
      component: Demo_1_05_Search
    },
    {
      path: "/2.02-async-components",
      component: Demo_2_02_Async_Components
    },
    {
      path: "/2.03-observer-component",
      component: Demo_2_03_Observer_Component
    },
    {
      path: "/2.04-lazy-image",
      component: Demo_2_04_Lazy_Image
    }
  ]
});
