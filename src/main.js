import { createApp } from "vue";
import App from "./App.vue";
import router from "@/components/routing/router";
const app = createApp(App);
app.use(router).mount("#app");
