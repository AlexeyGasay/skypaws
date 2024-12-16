<template>
  <div class="the-header">
    <div class="the-header__inner">
      <div class="the-header__logo">
        <img
          src="@/assets/images/logo.svg"
          alt="logo"
          class="the-header__logo-icon"
        />

        <div class="the-header__logo-text">
          ШКОЛА ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ
        </div>
      </div>

      <!-- <nav class="the-header__menu">
        <div class="the-header__menu-item">
          <div class="the-header__menu-item-icon">
            <menu-drones-icon />
          </div>
          дроны
        </div>

        <div class="the-header__menu-item">
          <div class="the-header__menu-item-icon">
            <menu-design-icon />
          </div>
          дизайн
        </div>

        <div class="the-header__menu-item">
          <div class="the-header__menu-item-icon">
            <menu-develop-icon />
          </div>
          Разработка
        </div>

        <div class="the-header__menu-item">
          <div class="the-header__menu-item-icon">
            <menu-exams-icon />
          </div>
          огэ/егэ
        </div>
      </nav> -->

      <div class="the-header__contacts">
        <a
          href="tel:+7(800)777-21-32"
          class="the-header__contacts-phone"
        >
          +7(800) 777-21-32
        </a>

        <ui-button
          class="the-header__contacts-button"
          size="s"
          @click="openModal"
        >
          ОТКРЫТЬ БИЗНЕС
        </ui-button>
      </div>

      <div
        class="the-header__burger"
        @click="mobileMenuHandler"
      />
    </div>

    <div :class="bem('the-header__inner-mobile', { open: isOpen })">
      <div
        class="the-header__inner-mobile-close-button"
        @click="mobileMenuHandler"
      />

      <perfect-scrollbar>
        <!-- <nav class="the-header__inner-mobile-menu">
          <div class="the-header__inner-mobile-menu-item">
            <div class="the-header__inner-mobile-menu-item-icon">
              <menu-drones-icon />
            </div>

            Дроны
          </div>

          <div class="the-header__inner-mobile-menu-item">
            <div class="the-header__inner-mobile-menu-item-icon">
              <menu-design-icon />
            </div>

            Дизайн
          </div>

          <div class="the-header__inner-mobile-menu-item">
            <div class="the-header__inner-mobile-menu-item-icon">
              <menu-develop-icon />
            </div>

            Разработка
          </div>

          <div class="the-header__inner-mobile-menu-item">
            <div class="the-header__inner-mobile-menu-item-icon">
              <menu-exams-icon />
            </div>

            огэ/егэ
          </div>
        </nav> -->
        <a
          href="tel:+7(800) 777-21-32"
          class="the-header__inner-mobile-contact-phone"
        >
          +7(800) 777-21-32
        </a>

        <ui-button
          type="outlined"
          class="the-header__inner-mobile-menu-button"
          size="s"
          @click="openModal"
        >
          Открыть бизнес
        </ui-button>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import MenuDesignIcon from "@/assets/images/icons/MenuDesignIcon.vue";
import MenuDevelopIcon from "@/assets/images/icons/MenuDevelopIcon.vue";
import MenuDronesIcon from "@/assets/images/icons/MenuDronesIcon.vue";
import MenuExamsIcon from "@/assets/images/icons/MenuExamsIcon.vue";
import { mapGetters, mapMutations } from "vuex";
import { scrollLock } from "@/tools";
import compensateScrollbar from "@/tools/compensateScrollbar";

export default {
  name: "TheHeader",
  components: {
    MenuExamsIcon,
    MenuDronesIcon,
    MenuDevelopIcon,
    MenuDesignIcon,
  },

  data() {
    return {
      isOpen: false,
      uid: Math.random(),
    };
  },

  computed: {
    ...mapGetters({
      isDesktop: "mqHelper/isDesktop",
    }),
  },

  watch: {
    isDesktop() {
      this.forceCloseHeader();
    },
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
      SET_DATA: "modals/SET_DATA",
    }),

    forceCloseHeader() {
      if (this.isDesktop) {
        this.isOpen = false;
        scrollLock(false, this.uid);
        compensateScrollbar(false);
      }
    },

    openModal() {
      this.forceCloseHeader();

      this.SET_DATA({ title: "откройте бизнес вместе со skypaws" });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL);
    },

    mobileMenuHandler() {
      this.isOpen = !this.isOpen;
      scrollLock(this.isOpen, this.uid);
      compensateScrollbar(this.isOpen);
    },
  },
};
</script>

<style lang="less">
.the-header {
  &__inner {
    .container();
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 40px;
    background: linear-gradient(180deg, #180b2c 0%, rgb(24 11 44 / 0%) 100%);

    .tablet-max({
      padding: 12px 30px;
    });

    .mobile-max({
      padding: 10px;
    });
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    width: 80px;

    .tablet-max({
      width: 68px;
    });
  }

  &__logo-text {
    max-width: 151px;
    margin-left: 5px;
    color: @white;
    font-weight: 500;
    font-size: 15px;
    line-height: 135%;

    .tablet-max({
      font-size: 11px;
    });
  }

  &__menu {
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    .tablet-max({
      display: none;
    });
  }

  &__menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: @white;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

    &:not(&:first-child) {
      margin-left: 50px;
    }

    .hover({
      .svg {
        opacity: 0;
      }

      .svg-gradient {
        opacity: 1;
      }
    });
  }

  &__menu-item-icon {
    width: 100% !important;
    max-width: 40px;

    &:first-child {
      max-width: 84px;
    }

    svg {
      width: 100%;
      height: 36px !important;

      .svg-gradient {
        opacity: 0;
      }

      .svg,
      .svg-gradient {
        transition: @transition-default ease;
      }
    }
  }

  &__contacts {
    display: flex;
    align-items: center;

    .tablet-max({
      margin-left: auto;
    });

    .mobile-max({
      display: none;
    });
  }

  &__contacts-phone {
    color: @white;
    font-weight: 900;
    font-size: 16px;
    line-height: 120%;
    text-decoration: none;
  }

  &__contacts-button {
    margin-left: 20px;

    .tablet-max({
      display: none !important;
    });
  }

  &__burger {
    .square(41px);
    display: none;
    background-image: url("@/assets/images/icons/burger-icon.svg");
    background-size: cover;
    background-position: center;
    margin-left: 30px;
    cursor: pointer;

    .tablet-max({
      display: block;
    });
  }

  &__inner-mobile {
    position: fixed;
    top: 0;
    left: 0;
    z-index: @z-6;
    display: none;
    width: 100%;
    height: 100vh;
    background-color: @purple;
    transform: translateX(100%);
    transition: transform @transition-default ease-in-out;

    .tablet-max({
      display: flex;
      flex-direction: column;
    });

    &_open {
      transform: translateX(0);
    }
  }

  &__inner-mobile-close-button {
    width: max-content;
    margin: 16px 40px 0 auto;
    cursor: pointer;
    background-image: url("@/assets/images/icons/cross-icon.svg");
    background-position: center;
    background-size: cover;
    .square(41px);

    .mobile-max({
      margin: 10px 10px 0 auto;
    });
  }

  &__inner-mobile-menu {
    padding: 0 10px;
  }

  &__inner-mobile-menu-item {
    display: flex;
    align-items: center;
    color: @white;
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;

    &:not(&:first-child) {
      margin-top: 20px;
    }
  }

  &__inner-mobile-menu-item-icon {
    margin-right: 10px;

    svg {
      .square(30px);
    }
  }

  &__inner-mobile-contact-phone {
    display: block;
    margin-top: 20px;
    padding: 0 10px;
    color: @white;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
  }

  &__inner-mobile-menu-button {
    margin: 20px 0 0 10px;
  }
}
</style>
