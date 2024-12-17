<template>
  <client-only v-if="isVisibleInternal">
    <app-teleport to="body">
      <div
        v-escape="escapeHandler"
        :class="
          bem('app-modal', {
            visible: isVisibleInternal,
            closing: isClosing,
            name,
          })
        "
        :style="`--width: ${computedWidth}; z-index: ${zIndex}`"
      >
        <div class="app-modal__background">
          <div
            v-click-outside="closeModal"
            :class="bem('app-modal__wrapper', { isResultModal })"
            :style="`--offset-top-wrapper: ${offsetTopWrapper}%; --height: ${height}`"
          >
            <div class="app-modal__header">
              <slot
                v-if="$slots.header"
                name="header"
              />

              <div
                v-if="haveCloseButton"
                class="app-modal__header-close-button"
                @click="closeModal($event, true)"
              >
                <div class="app-modal__header-close-button-icon" />
              </div>
            </div>
            <div class="app-modal__body">
              <perfect-scrollbar
                v-if="isDesktop"
                class="app-modal__body-inner"
              >
                <slot />
              </perfect-scrollbar>

              <template v-else>
                <div class="app-modal__body-inner">
                  <slot />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </app-teleport>
  </client-only>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { pixelsToRem, scrollLock } from "@/tools";
import compensateScrollbar from "@/tools/compensateScrollbar";

export default {
  name: "AppModal",

  props: {
    name: {
      type: String,
      required: false,
      default: "",
    },

    isResultModal: {
      type: Boolean,
      required: false,
      default: false,
    },

    title: {
      type: String,
      required: false,
      default: "",
    },

    width: {
      type: String,
      required: false,
      default: "420px",
    },

    height: {
      type: String,
      required: false,
      default: "auto",
    },

    offsetTopWrapper: {
      type: Number,
      required: false,
      default: 50,
    },

    haveCloseButton: {
      type: Boolean,
      required: false,
      default: true,
    },

    canBeEscaped: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  emits: ["close", "before-close"],

  data() {
    return {
      isVisible: false,
      isVisibleInternal: false,
      isClosing: false,
      uid: Math.random(),
      zIndex: 7,
      zIndexInitial: 7,
    };
  },

  computed: {
    ...mapGetters({
      isDesktop: "mqHelper/isDesktop",
      isModalOpen: "modals/isModalOpen",
    }),

    openModalsCount() {
      return this.$store.state.modals.openModals.length;
    },

    allowTargetsToCloseModal() {
      return ["app-modal__background", "app-modal__header-close-button"];
    },

    computedWidth() {
      return this.width.includes("px") ? pixelsToRem(this.width) : this.width;
    },
  },

  watch: {
    openModalsCount: {
      handler() {
        this.isVisible = this.isModalOpen(this.name);
      },

      immediate: true,
    },

    isVisible: {
      async handler() {
        this.$nextTick(async () => {
          if (this.isVisible) {
            await this.openModal();
          } else {
            await this.closeModal();
          }
        });
      },
    },
  },

  async mounted() {
    this.$nextTick(() => {
      if (this.isVisible) {
        this.openModal();
      }
    });
  },

  beforeDestroy() {
    scrollLock(false, this.uid);
    localStorage.removeItem("firstModal");
    localStorage.removeItem("modalCount");
  },

  methods: {
    ...mapMutations({
      HIDE_MODAL: "modals/HIDE_MODAL",
    }),

    escapeHandler() {
      if (this.canBeEscaped) {
        this.HIDE_MODAL(this.name);
      }
    },

    modalCountHandler() {
      const count = +localStorage.getItem("modalCount");
      this.zIndex = this.zIndexInitial + count;
      localStorage.setItem("modalCount", String(count + 1));
    },

    clearQueryModal() {
      const { path } = this.$route;
      const query = { ...this.$route.query };

      delete query.auth;
      delete query.reg;

      this.$router.push({ path, query });
    },

    async openModal() {
      this.isVisibleInternal = true;
      this.$store.commit(
        "mqHelper/SET_SCROLLBAR_WIDTH",
        compensateScrollbar(true),
      );
      scrollLock(true, this.uid);
      this.modalCountHandler();

      if (!localStorage.getItem("firstModal")) {
        localStorage.setItem("firstModal", String(this.uid));
      }
    },

    async closeModal(e, force) {
      if (
        !force &&
        e?.target &&
        !this.allowTargetsToCloseModal.includes(e.target.className)
      )
        return;

      this.$store.commit(
        "mqHelper/SET_SCROLLBAR_WIDTH",
        compensateScrollbar(false),
      );
      scrollLock(false, this.uid);
      this.isClosing = true;
      this.$emit("before-close");
      if (+localStorage.getItem("firstModal") === this.uid) {
        localStorage.removeItem("firstModal");
      }

      setTimeout(() => {
        this.isVisibleInternal = false;
        this.HIDE_MODAL(this.name);
        this.$emit("close");
        this.isClosing = false;
        this.clearQueryModal();
      }, 300);
    },
  },
};
</script>

<style lang="less">
.app-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: @z-4;
  width: 100%;
  height: 100%;
  transform: scale(0);

  &_name_calc-modal {
    .app-modal__header {
      display: flex !important;
    }
  }

  &_visible {
    transform: scale(1);

    .app-modal {
      &__background {
        background: rgb(0 0 0 / 0%);
        animation: app-modal-fade-in @transition-normal
          cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }

      &__wrapper {
        opacity: 1;
        animation: app-modal-scale-up @transition-normal;
      }
    }
  }

  &_closing {
    animation: app-modal-quickscale-down 0s @transition-normal linear forwards;

    .app-modal {
      &__background {
        animation: app-modal-fade-out @transition-normal
          cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }

      &__wrapper {
        animation: scale-down @transition-normal
          cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }

  &__background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    padding: 48px;

    .tablet-max({
      padding: 0;
    });
  }

  .tablet-max({
    padding: 0;
  });

  &__wrapper {
    position: relative;
    top: var(--offset-top-wrapper);
    left: 50%;
    z-index: @z-5;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--width);
    height: var(--height);
    max-height: 100%;
    overflow: hidden;
    background-color: @white;
    border-radius: 24px;
    transform: translate(-50%, -50%);

    &:not(&_is-result-modal) {
      .tablet-max({
        top: 50%;
        max-width: calc(100%-16px);
        border-radius: unset;
        border-radius: 8px
      });
    }
  }

  &__header {
    align-items: flex-start;
    justify-content: space-between;
    padding: 36px;
    position: absolute;
    z-index: 999999;
    top: 0;
    right: 0;
    display: none;

    .tablet-max({
      align-items: center;
      padding: 16px 30px 0;
    });

    .mobile-max({
      padding: 16px 16px 0;
    });
  }

  &__header-close-button {
    margin-left: auto;
    border-radius: 50%;
    cursor: pointer;
  }

  &__header-close-button-icon {
    .square(30px);
    background-image: url("@/assets/images/icons/cross-icon.svg");
    background-position: center;
    background-size: cover;
  }

  &__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }

  &__body-inner {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: scroll;
  }

  @keyframes app-modal-fade-out {
    0% {
      background: rgba(@black, 80%);
    }

    100% {
      background: rgb(0 0 0 / 0%);
    }
  }

  @keyframes scale-down {
    0% {
      transform: scale(1) translate(-50%, -50%);
      opacity: 1;
    }

    100% {
      transform: scale(1) translate(-50%, 50vh);
      opacity: 0;
    }
  }

  @keyframes app-modal-fade-in {
    0% {
      background: rgb(0 0 0 / 0%);
    }

    100% {
      background: rgba(@black, 80%);
    }
  }

  @keyframes app-modal-quickscale-down {
    0% {
      transform: scale(1);
    }

    99.9% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes app-modal-scale-up {
    0% {
      transform: translate(-50%, 50vh);
      opacity: 0;
    }

    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
}

.app-modal_name_calc-modal {
  .app-modal__wrapper {
    .tablet-max({
      max-width: 100% !important;
    });
  }
}
</style>
