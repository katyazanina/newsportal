import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import router from "./router";
import { createPinia } from "pinia";

// Style
import "@/assets/styles/index.scss";

const app = createApp(App);
app.mount("#app");

app.use(router);
app.use(createPinia);
