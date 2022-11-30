import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// plugin
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// fonts
import "@/assets/css/vendor/font-awesome.min.css";
import "@/assets/css/vendor/materialdesignicons.css";
// main style
import "@/assets/css/responsive.css";
import "@/assets/scss/main.scss";

createApp(App).use(store).use(router).mount("#app");
