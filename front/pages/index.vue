<template>
  <div class="main-page">
    <div class="main-page__inner">
      <the-main-page-section-hero />

      <the-main-page-section-discount />

      <the-main-page-section-ecosystem />

      <the-main-page-section-calc />

      <the-main-page-section-stats />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import AppFeedbackForm from "~/components/The/TheRequestForm.vue";
import TheMainPageSectionHero from "@/components/The/TheMainPageSectionHero.vue";
import TheMainPageSectionDiscount from "@/components/The/TheMainPageSectionDiscount.vue";
import TheMainPageSectionCalc from "@/components/The/TheMainPageSectionCalc.vue";
import TheMainPageSectionStats from "@/components/The/TheMainPageSectionStats.vue";
import TheMainPageSectionEcosystem from "@/components/The/TheMainPageSectionEcosystem.vue";
import { animation } from "../animation/main-page";

export default {
  components: {
    TheMainPageSectionStats,
    TheMainPageSectionCalc,
    TheMainPageSectionDiscount,
    TheMainPageSectionHero,
    TheMainPageSectionEcosystem,
    AppFeedbackForm,
  },

  mounted() {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", animation);
    mm.add("(max-width: 1023px)", animation);
  },
};
</script>

<style lang="scss">
.main-page {
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;

  &__inner {
    position: relative;
    z-index: 1;
  }
}
</style>
