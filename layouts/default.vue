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
      <the-request-form />
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

export default {
  components: { AppModal, TheRequestForm, TheFooter, TheHeader, UiButton },

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
  transition: transform $transition-normal;

  &_scale-down {
    transform: scale(0.99);
  }

  &__inner {
    transition: transform $transition-normal;

    &_scale-down {
      transform: scale(0.99);
    }
  }

  &__header {
    position: fixed;
    z-index: $z-5;
    width: 100%;
  }

  &__footer {
    z-index: $z-2;
    width: 100%;

    @include tablet-max {
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: $white;
    }
  }

  &__auth-modal {
    position: relative;
  }

  &__auth-modal-header {
    display: flex;
    align-items: center;
  }

  &__auth-modal-advantages-p-a {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    display: block;
    width: 100%;
    transform: translate(-50%, 0%);

    @include tablet-max {
      display: none;
    }
  }

  &__request-callback-footer {
    padding: 0 40px 40px;

    @include tablet-max {
      margin-top: auto;
      padding: 8px 16px;
      border-top: 1px solid rgba($black, 5%);
    }

    @include mobile-max {
      padding: 8px;
    }
  }

  &__request-callback-footer-button {
    width: 100% !important;
  }

  &__pickup-select-shop-modal-header {
    display: flex;
    align-items: center;
  }

  &__pickup-select-shop-modal-header-title {
    // @include display-l-d;
    margin-right: 24px;
  }

  &__pickup-select-shop-modal-header-change-city-button {
  }

  &__delivery-select-address-modal-header {
    display: flex;
    align-items: center;
  }

  &__delivery-select-address-modal-header-title {
    // @include display-l-d;
    margin-right: 24px;
  }

  &__delivery-select-address-modal-header-change-city-button {
  }
}

.app-modal_name_auth-modal {
  .app-modal__wrapper {
    overflow: visible;
  }

  .app-modal__body {
    overflow: visible;

    @include tablet-max {
      overflow: scroll;
    }

    .ps__rail-x,
    .ps__rail-y {
      display: none;
    }
  }

  .app-modal__body-inner {
    overflow: visible !important;
  }
}

.app-modal_name_product-remains-modal {
  .app-modal__wrapper {
    @include tablet-max {
      background-color: $grey;
    }
  }
}
</style>
