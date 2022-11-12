import { createApp } from "vue";
import App from "./App.vue";
import TypeBox from "./components/TypeBox.vue";
import SpeedDisplay from "./components/SpeedDisplay.vue";
const app = createApp(App);

app.component("type-box", TypeBox);
app.component("speed-display", SpeedDisplay);

app.mount("#app");
