import Vue from "vue";
import Router from "vue-router";

import index from "@/components/Index";
import rotate from "@/components/RotateBox";
import lines from "@/components/Lines";
import block from "@/components/Block";
import sample from "@/components/Sample";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: index
    },
    {
      path: "/rotate",
      component: rotate
    },
    {
      path: "/lines",
      component: lines
    },
    {
      path: "/block",
      component: block
    },
    {
      path: "/sample",
      component: sample
    }
  ]
});
