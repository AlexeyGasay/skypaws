<template>
  <div class="default-layout">
    <the-header class="default-layout__header" />
    <div class="default-layout__inner">
      <Nuxt />
    </div>

    <app-cookie-plate />

    <the-footer class="default-layout__footer" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { useDebounce } from "@/tools/useDebounce";
import TheHeader from "@/components/The/TheHeader.vue";
import UiButton from "@/components/Ui/UiButton.vue";
import TheFooter from "@/components/The/TheFooter.vue";
import AppCookiePlate from "@/components/App/AppCookiePlate.vue";

export default {
  components: {
    TheFooter,
    TheHeader,
    UiButton,
    AppCookiePlate,
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

    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      window.addEventListener("orientationchange", () => {
        window.location.reload();
      });
    } else {
      window.addEventListener("resize", () => {
        window.location.reload();
      });
    }
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
  min-height: 100vh;
  overflow: hidden;

  &__inner {
    position: relative;
    z-index: 1;
    height: 100%;
  }

  &__header {
    position: fixed;
    z-index: $z-5;
    width: 100%;
  }
}

.app-modal_name_calc-modal {
  .app-modal__wrapper {
    background-color: $purple;
    border-radius: 0;
  }

  .app-modal__background {
    padding: 0;
  }
}
</style>
