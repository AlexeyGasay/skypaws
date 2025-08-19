<template>
  <div
    class="the-header"
    :class="{ 'the-header--hidden': isHeaderHidden }"
  >
    <div class="the-header__inner">
      <nuxt-link
        to="/"
        class="the-header__logo"
      >
        <img
          src="@/assets/images/logo.svg"
          alt="logo"
          class="the-header__logo-icon"
        />

        <div class="the-header__logo-text">
          ШКОЛА ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ
        </div>
      </nuxt-link>

      <div class="the-header__contacts">
        <a
          href="https://wa.me/78007772132"
          target="_blank"
          class="the-header__contacts-phone"
        >
          +7(800) 777-21-32
        </a>

        <button
          v-if="$route.params.slug"
          class="the-header__course-btn the-header__course-btn_desk"
          :style="{ border: `2px solid ${accent}` }"
          @click="openModalCourse"
        >
          <span>записаться на&nbsp;курс</span>
          <div
            class="the-header__course-btn-bg"
            :style="{ '--accent': accent }"
          />
        </button>

        <ui-button
          v-else
          class="the-header__contacts-button"
          size="s"
          @click="openModal"
        >
          ОТКРЫТЬ БИЗНЕС
        </ui-button>
      </div>

      <div
        class="the-header__burger"
        :class="{ 'the-header__burger_no-border': $route.params.slug }"
        :style="{ '--accent': accent }"
        @click="mobileMenuHandler"
      />
    </div>

    <div :class="bem('the-header__inner-mobile', { open: isOpen })">
      <div class="the-header__inner-mobile-holder">
        <div
          class="the-header__inner-mobile-close-button"
          :class="{
            'the-header__inner-mobile-close-button_no-border':
              $route.params.slug,
          }"
          :style="{ '--accent': accent }"
          @click="mobileMenuHandler"
        />

        <perfect-scrollbar>
          <nav class="the-header__inner-mobile-menu">
            <nuxt-link
              to="/services/fpv"
              class="the-header__inner-mobile-menu-item"
              @click.native="mobileMenuHandler"
            >
              <div class="the-header__inner-mobile-menu-item-icon">
                <menu-drones-icon />
              </div>

              Дроны
            </nuxt-link>

            <nuxt-link
              to="/services/design"
              class="the-header__inner-mobile-menu-item"
              @click.native="mobileMenuHandler"
            >
              <div class="the-header__inner-mobile-menu-item-icon">
                <menu-design-icon />
              </div>

              Дизайн
            </nuxt-link>

            <nuxt-link
              to="/services/dev"
              class="the-header__inner-mobile-menu-item"
              @click.native="mobileMenuHandler"
            >
              <div class="the-header__inner-mobile-menu-item-icon">
                <menu-develop-icon />
              </div>

              Разработка
            </nuxt-link>

            <!-- <div class="the-header__inner-mobile-menu-item">
            <div class="the-header__inner-mobile-menu-item-icon">
              <menu-exams-icon />
            </div>

            огэ/егэ
          </div> -->
          </nav>
          <a
            href="https://wa.me/78007772132"
            class="the-header__inner-mobile-contact-phone"
          >
            +7(800) 777-21-32
          </a>

          <button
            v-if="$route.params.slug"
            class="the-header__course-btn the-header__course-btn_menu"
            :style="{ border: `2px solid ${accent}` }"
            @click="openModalCourse"
          >
            <span>записаться на&nbsp;курс</span>
            <div
              class="the-header__course-btn-bg"
              :style="{ '--accent': accent }"
            />
          </button>

          <ui-button
            v-else
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
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MenuDesignIcon from "@/assets/images/icons/MenuDesignIcon.vue";
import MenuDevelopIcon from "@/assets/images/icons/MenuDevelopIcon.vue";
import MenuDronesIcon from "@/assets/images/icons/MenuDronesIcon.vue";
import MenuExamsIcon from "@/assets/images/icons/MenuExamsIcon.vue";
import { scrollLock } from "@/tools";
import compensateScrollbar from "@/tools/compensateScrollbar";
import slugs from "../../data/slugs";

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
      isHeaderHidden: false,
      lastScrollY: 0,
    };
  },

  computed: {
    ...mapGetters({
      isDesktop: "mqHelper/isDesktop",
    }),

    accent() {
      if (this.$route.params.slug) {
        return slugs.find((el) => el.type === this.$route.params.slug).accent;
      }
      return "";
    },
  },

  watch: {
    isDesktop() {
      this.forceCloseHeader();
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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

    openModalCourse() {
      this.forceCloseHeader();

      this.SET_DATA({ accent: this.accent });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL_COURSE);
    },

    mobileMenuHandler() {
      this.isOpen = !this.isOpen;
      scrollLock(this.isOpen, this.uid);
      compensateScrollbar(this.isOpen);
    },

    handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        this.isHeaderHidden = false;
        return;
      }
      if (currentScrollY > this.lastScrollY) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<style lang="less">
.the-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  &__inner {
    .container();
    display: flex;
    align-items: center;
    padding: 12px 40px;
    background: linear-gradient(180deg, #180b2c 0%, rgb(24 11 44 / 0%) 100%);

    .tablet-max({
      padding: 12px 30px;
      justify-content: space-between;
    });

    .mobile-max({
      padding: 10px;
    });
  }

  &__logo {
    display: flex;
    align-items: center;
    width: max-content;
    text-decoration: none;
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
    margin-left: 250px;

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
    text-decoration: none;

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
    margin-left: auto;

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
    background-image: url("@/assets/images/icons/burger-icon.svg");
    background-size: cover;
    background-position: center;
    margin-left: 30px;
    cursor: pointer;

    &_no-border {
      .square(48px);
      background-image: none;
      border: 2px solid var(--accent);
      border-radius: 50%;
      background-image: url("@/assets/images/icons/burger-icon-no-border.svg");

      .tablet-max ({
        .square(41px);
      });;
    }

    .tablet-max({
      display: block;
    });
  }

  &__inner-mobile {
    position: fixed;
    top: 0;
    right: 0;
    z-index: @z-6;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    transition: opacity @transition-default ease-in-out;
    display: flex;
    pointer-events: none;

    .tablet-max ({
      background-color: rgba(0, 0, 0, 0.5);
    });;

    &-holder {
      max-width: 433px;
      width: 100%;
      padding: 20px 0px 20px 40px;
      background-color: @purple;
      height: 100vh;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      transition: transform @transition-default ease-in-out;
      transform: translateX(100%);
    }

    // .tablet-max({
    //   display: flex;
    //   flex-direction: column;
    // });

    &_open {
      opacity: 1;
      pointer-events: all;
      .the-header__inner-mobile-holder {
        transform: translateX(0);
      }
    }
  }

  &__inner-mobile-close-button {
    width: max-content;
    margin: 16px 40px 0 auto;
    cursor: pointer;
    background-image: url("@/assets/images/icons/cross-icon-white.svg");
    background-position: center;
    background-size: cover;
    .square(41px);

    &_no-border {
      .square(48px);
      background-image: none;
      border: 2px solid var(--accent);
      border-radius: 50%;
      background-image: url("@/assets/images/icons/cross-icon-white-no-border.svg");

      .tablet-max ({
        .square(41px);
      });;
    }

    .mobile-max({
      margin: 10px 10px 0 auto;
    });
  }

  &__inner-mobile-menu {
    // padding: 0 10px;
  }

  &__inner-mobile-menu-item {
    display: flex;
    align-items: center;
    color: @white;
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;

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

  &--hidden {
    transform: translateY(-100%);
  }

  &__course-btn {
    padding: 11px 18px;
    font-weight: 900;
    font-size: 14px;
    color: @white;
    text-transform: uppercase;
    background: none;
    border-radius: 10px;
    margin-left: 19px;
    font-family: Nunito;
    position: relative;
    z-index: 1;
    overflow: hidden;

    &_menu {
      margin-top: 20px;
      margin-left: 0;
    }

    span {
      position: relative;
      z-index: 2;
    }

    &-bg {
      content: "";
      background: var(--accent);
      width: 102%;
      height: 102%;
      position: absolute;
      z-index: 1;
      top: -1%;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.3s;
      border-radius: 4px;
    }

    .hover({
      .the-header__course-btn-bg {
        transform: translateX(0);
      }
    });
    .tablet-max({
      margin-left: 12px;
      margin-top: 20px;
    });

    &_desk {
      .tablet-max({
        display: none;
      });
    }
  }
}
</style>
