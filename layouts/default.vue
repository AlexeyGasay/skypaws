<template>
  <div class="default-layout">
    <the-header class="default-layout__header" />
    <div class="default-layout__inner">
      <Nuxt />
    </div>

    <the-footer class="default-layout__footer" />

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
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { useDebounce } from "@/tools/useDebounce";
import TheHeader from "@/components/The/TheHeader.vue";
import UiButton from "@/components/Ui/UiButton.vue";
import TheFooter from "@/components/The/TheFooter.vue";
import TheRequestForm from "@/components/App/TheRequestForm.vue";
import AppModal from "@/components/App/AppModal.vue";
import TheCalcForm from "@/components/The/TheCalcForm.vue";

export default {
  components: {
    TheCalcForm,
    AppModal,
    TheRequestForm,
    TheFooter,
    TheHeader,
    UiButton,
  },

  created() {
    this.debouncedSetWindowWidth = useDebounce(this.SET_WINDOW_WIDTH, 50);
  },

  async mounted() {
    this.SET_WINDOW_WIDTH(window.innerWidth);
    window.addEventListener("resize", this.resizeHandler);
    localStorage.removeItem("firstModal");
    localStorage.removeItem("modalCount");
    localStorage.removeItem("first-scroll-locked");
    // await this.$recaptcha.init();
  },

  methods: {
    ...mapMutations({
      SET_WINDOW_WIDTH: "mqHelper/SET_WINDOW_WIDTH",
      HIDE_ALL_MODALS: "modals/HIDE_ALL_MODALS",
      SHOW_MODAL: "modals/SHOW_MODAL",
    }),

    resizeHandler() {
      this.debouncedSetWindowWidth(window.innerWidth);
    },
  },
};
</script>

<style lang="scss">
.default-layout {
  min-height: 50vh;
  overflow: hidden;

  &__header {
    position: fixed;
    z-index: $z-5;
    width: 100%;
  }
}

.app-modal_name_calc-modal {
  .app-modal__wrapper {
    background-color: $purple;
  }
}
</style>
