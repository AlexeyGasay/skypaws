<template>
  <div class="default-layout">
    <the-header class="default-layout__header" />
    <div class="default-layout__inner">
      <Nuxt />
    </div>

    <app-cookie-plate />

    <app-modal :name="$MODAL_NAMES.REQUEST_MODAL">
      <the-request-form />
    </app-modal>

    <app-modal :name="$MODAL_NAMES.REQUEST_MODAL_COURSE">
      <the-request-form-course />
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

    <a
      href="https://t.me/+jyYtUDbQz9VmZTUy"
      target="_blank"
      class="default-layout__tg"
    >
      <img
        src="@/assets/images/telegram.gif"
        alt="Телеграм"
        class="default-layout__tg-img"
      />
    </a>

    <the-footer class="default-layout__footer" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import gsap from "gsap";
import { useDebounce } from "@/tools/useDebounce";
import TheHeader from "@/components/The/TheHeader.vue";
import UiButton from "@/components/Ui/UiButton.vue";
import TheFooter from "@/components/The/TheFooter.vue";
import AppCookiePlate from "@/components/App/AppCookiePlate.vue";
import AppModal from "@/components/App/AppModal.vue";
import TheRequestForm from "@/components/The/TheRequestForm.vue";
import TheCalcForm from "@/components/The/TheCalcForm.vue";
import AppEcosystemModalInner from "@/components/App/AppEcosystemModalInner .vue";
import AppResultModal from "@/components/App/AppResultModal.vue";

export default {
  components: {
    TheFooter,
    TheHeader,
    UiButton,
    AppCookiePlate,
    TheRequestForm,
    AppModal,
    TheCalcForm,
    AppEcosystemModalInner,
    AppResultModal,
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
    gsap.set("body", {
      opacity: 1,
      delay: 0.6,
    });
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

<style lang="less">
.default-layout {
  min-height: 100vh;
  overflow: hidden;

  &__tg {
    position: fixed;
    z-index: 9999;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;

    @media (max-width: 1200px) {
      width: 90px;
      height: 90px;
    }

    .mobile-max({
      right: 4px;
      width: 60px;
      height: 60px;
    });
  }

  &__tg-img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &__inner {
    position: relative;
    z-index: 1;
    height: 100%;
  }

  &__header {
    position: fixed;
    z-index: @z-5;
    width: 100%;
  }
}

.app-modal_name_calc-modal {
  .app-modal__wrapper {
    background-color: @purple;
    border-radius: 0;
  }

  .app-modal__background {
    padding: 0;
  }
}
</style>
