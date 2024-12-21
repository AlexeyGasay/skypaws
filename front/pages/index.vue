<template>
  <div class="main-page">
    <the-main-page-section-hero />

    <the-main-page-section-discount />

    <the-main-page-section-ecosystem />

    <the-main-page-section-calc />

    <the-main-page-section-stats
      :plannedOpening="plannedOpening"
      :negotiationStage="negotiationStage"
    />
  </div>
</template>

<script>
// import gsap from "gsap";
import TheMainPageSectionHero from "@/components/The/TheMainPageSectionHero.vue";
import TheMainPageSectionDiscount from "@/components/The/TheMainPageSectionDiscount.vue";
import TheMainPageSectionCalc from "@/components/The/TheMainPageSectionCalc.vue";
import TheMainPageSectionStats from "@/components/The/TheMainPageSectionStats.vue";
import TheMainPageSectionEcosystem from "@/components/The/TheMainPageSectionEcosystem.vue";
// import { animation, animationMobile } from "../animation/main-page";

export default {
  components: {
    TheMainPageSectionStats,
    TheMainPageSectionCalc,
    TheMainPageSectionDiscount,
    TheMainPageSectionHero,
    TheMainPageSectionEcosystem,
  },

  data: () => {
    return {
      plannedOpening: 0,
      negotiationStage: 0,
    };
  },

  async fetch() {
    try {
      const response = await this.$api.stats.getStats();

      this.plannedOpening = response.data.plannedOpening;
      this.negotiationStage = response.data.negotiationStage;
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  },

  mounted() {
    // const mm = gsap.matchMedia();
    // mm.add("(min-width: 1024px)", animation);
    // mm.add("(max-width: 1023px)", animationMobile);
  },
};
</script>

<style lang="less">
.main-page {
}
</style>
