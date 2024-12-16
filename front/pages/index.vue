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

    <app-modal :name="$MODAL_NAMES.REQUEST_MODAL">
      <the-request-form />
    </app-modal>

    <app-modal
      :name="$MODAL_NAMES.CALC_MODAL"
      width="100%"
      height="100%"
    >
      <the-calc-form />
    </app-modal>

    <app-modal
      :name="$MODAL_NAMES.ECOSYSTEM_MODAL"
      width="743px"
    >
      <app-ecosystem-modal-inner />
    </app-modal>

    <app-modal
      :name="$MODAL_NAMES.RESULT_MODAL"
      width="600px"
      is-result-modal
    >
      <app-result-modal />
    </app-modal>
  </div>
</template>

<script>
import gsap from "gsap";
import TheMainPageSectionHero from "@/components/The/TheMainPageSectionHero.vue";
import TheMainPageSectionDiscount from "@/components/The/TheMainPageSectionDiscount.vue";
import TheMainPageSectionCalc from "@/components/The/TheMainPageSectionCalc.vue";
import TheMainPageSectionStats from "@/components/The/TheMainPageSectionStats.vue";
import TheMainPageSectionEcosystem from "@/components/The/TheMainPageSectionEcosystem.vue";
import TheRequestForm from "@/components/The/TheRequestForm.vue";
import TheCalcForm from "@/components/The/TheCalcForm.vue";
import AppModal from "@/components/App/AppModal.vue";
import AppEcosystemModalInner from "@/components/App/AppEcosystemModalInner .vue";
import AppResultModal from "@/components/App/AppResultModal.vue";
import { animation, animationMobile } from "../animation/main-page";

export default {
  components: {
    TheMainPageSectionStats,
    TheMainPageSectionCalc,
    TheMainPageSectionDiscount,
    TheMainPageSectionHero,
    TheMainPageSectionEcosystem,
    TheRequestForm,
    AppModal,
    TheCalcForm,
    AppEcosystemModalInner,
    AppResultModal,
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
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", animation);
    mm.add("(max-width: 1023px)", animationMobile);
  },
};
</script>

<style lang="scss">
.main-page {
}
</style>
