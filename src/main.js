import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import router from "./router";
import { createPinia } from "pinia";

// Style
import "@/assets/styles/index.scss";

// Components
import { useGlobalComponents } from "./components/global";
import { useAppComponents } from "./components/app";

const app = createApp(App);

useGlobalComponents(app);
useAppComponents(app);

app.mount("#app");

app.use(router);
app.use(createPinia);
