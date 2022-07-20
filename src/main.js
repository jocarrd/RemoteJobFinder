import Vue from "vue";
import App from "./App.vue";
import Chakra, {
  CThemeProvider,
  CReset,
  CColorModeProvider,
  CBox,
} from "@chakra-ui/vue";

Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
  render: (h) =>
    h(CThemeProvider, [h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])])]),
}).$mount("#app");
