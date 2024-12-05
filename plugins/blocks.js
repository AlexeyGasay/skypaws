import Vue from "vue";

import Teleport from "vue2-teleport";

import UiButton from "@/components/Ui/UiButton.vue";
import UiCheckbox from "@/components/Ui/UiCheckbox.vue";
import UiInput from "@/components/Ui/UiInput.vue";
import UiLink from "@/components/Ui/UiLink.vue";
import UiTextarea from "@/components/Ui/UiTextarea.vue";

Vue.component("AppTeleport", Teleport);

Vue.component("UiButton", UiButton);
Vue.component("UiCheckbox", UiCheckbox);
Vue.component("UiInput", UiInput);
Vue.component("UiLink", UiLink);
Vue.component("UiTextarea", UiTextarea);
