<template>
  <div class="main-page">
    <the-main-page-section-hero />

    <the-main-page-section-discount />

    <the-main-page-section-calc />

    <the-main-page-section-stats />
  </div>
</template>

<script>
import AppFeedbackForm from "@/components/App/TheRequestForm.vue";
import TheMainPageSectionHero from "@/components/The/TheMainPageSectionHero.vue";
import TheMainPageSectionDiscount from "@/components/The/TheMainPageSectionDiscount.vue";
import TheMainPageSectionCalc from "@/components/The/TheMainPageSectionCalc.vue";
import TheMainPageSectionStats from "@/components/The/TheMainPageSectionStats.vue";

export default {
  components: {
    TheMainPageSectionStats,
    TheMainPageSectionCalc,
    TheMainPageSectionDiscount,
    TheMainPageSectionHero,
    AppFeedbackForm,
  },
};
</script>

<style lang="scss">
.main-page {
}
</style>
