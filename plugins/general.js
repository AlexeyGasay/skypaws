import Vue from "vue";
import { formatNumber } from "~/tools/formatNumber";
import {
  bem,
  camelToKebab,
  declensionOfNumerals,
  priceFormatting,
  reachGoal,
  shuffleArray,
} from "@/tools";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import { formatPhoneNumber } from "@/tools/formatPhone";

Vue.mixin({
  methods: {
    bem,
    camelToKebab,
    reachGoal,
    shuffleArray,
    priceFormatting,
    declensionOfNumerals,
  },
});

Vue.use(PerfectScrollbar);

Vue.filter("formatNumber", (value) => {
  if (!value) return 0;

  return formatNumber(value);
});

Vue.filter("formatPhone", (value) => formatPhoneNumber(value));
