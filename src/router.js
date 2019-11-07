import Vue from "vue";
import Router from "vue-router";
import index from "./components/index.vue";
import barang from "./components/barang/index.vue";
// import AddCustomer from "./components/AddCustomer.vue";
// import SearchCustomers from "./components/SearchCustomers.vue";
// import Customer from "./components/Customer.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      alias: "/index",
      component: index
    },
    {
      path: "/barang",
      name: "index",
      alias: "/index",
      component: barang
    }
  ]

    //   children: [
    //     {
    //       path: "/customer/:id",
    //       name: "customer-details",
    //       component: Customer,
    //       props: true
    //     }
    //   ]

    // {
    //   path: "/add",
    //   name: "add",
    //   component: AddCustomer
    // },
    // {
    //   path: "/search",
    //   name: "search",
    //   component: SearchCustomers
    // }
});