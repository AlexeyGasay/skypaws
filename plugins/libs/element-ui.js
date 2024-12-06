import Vue from "vue";
import { Tooltip, Select, DatePicker, TimePicker } from "element-ui";
import locale from "element-ui/lib/locale";
import lang from "element-ui/lib/locale/lang/ru-RU";

locale.use(lang);

Vue.component(Tooltip.name, Tooltip);
Vue.component(Select.name, Select);
Vue.component(DatePicker.name, DatePicker);
Vue.component(TimePicker.name, TimePicker);
