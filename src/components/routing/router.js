import { createRouter, createWebHashHistory } from "vue-router";
import criptoList from "@/components/pages/criptoList";
import criptoListEth from "@/components/pages/criptoListEth";
import cryptaPortfolio from "@/components/pages/cryptaPortfolio";
const routes = [
  {
    path: "/",
    component: criptoList,
  },
  {
    path: "/eth",
    component: criptoListEth,
  },
  {
    path: "/portfolio",
    component: cryptaPortfolio,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});
export default router;
