import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Adminlogin from "@/views/Adminlogin.vue";
import Adminhome from "@/views/Adminhome.vue";
import Homechars from "@/views/Homechars.vue";
import Shortlist from "@/views/Shortlist.vue";
import Advertisement from "@/views/Advertisement.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/adminlogin",
    name: "Adminlogin",
    component: Adminlogin,
  },
  {
    path: "/adminhome",
    name: "Adminhome",
    component: Adminhome,
    children:[
      {
        path: "/adminhome/homechars",
        name: "Homechars",
        component: Homechars,
      },
      {
        path: "/adminhome/shortlist",
        name: "Shortlist",
        component: Shortlist,
      },
      {
        path: "/adminhome/advertisement",
        name: "Advertisement",
        component: Advertisement,
      },
    ]
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
