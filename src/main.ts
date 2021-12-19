import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faEllipsisV,
  faInfo,
  faLongArrowAltRight,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

library.add(
  faInfo,
  faPlus,
  faSearch,
  faChevronLeft,
  faEllipsisV,
  faLongArrowAltRight
);

const app = createApp(App).use(router);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
