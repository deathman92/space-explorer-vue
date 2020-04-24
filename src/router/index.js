import Vue from "vue";
import VueRouter from "vue-router";
import Launches from "../views/Launches";
import Launch from "../views/Launch";
import Cart from "../views/Cart";
import Profile from "../views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Launches",
    component: Launches
  },
  {
    path: "/launch/:launchId",
    name: "Launch",
    component: Launch
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
