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

      <nav class="the-header__menu">
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
      </nav>

      <div class="the-header__menu-contacts">
        <a
          href="tel:+7(800)777-21-32"
          class="the-header__menu-contacts-phone"
        >
          +7(800) 777-21-32
        </a>

        <div class="the-header__menu-contacts-button">ОТКРЫТЬ БИЗНЕС</div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuDesignIcon from "@/assets/images/icons/MenuDesignIcon.vue";
import MenuDevelopIcon from "@/assets/images/icons/MenuDevelopIcon.vue";
import MenuDronesIcon from "@/assets/images/icons/MenuDronesIcon.vue";
import MenuExamsIcon from "@/assets/images/icons/MenuExamsIcon.vue";

export default {
  name: "TheHeader",
  components: {
    MenuExamsIcon,
    MenuDronesIcon,
    MenuDevelopIcon,
    MenuDesignIcon,
  },
};
</script>

<style lang="scss">
.the-header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 40px;
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    max-width: 80px;
  }

  &__logo-text {
    max-width: 151px;
    margin-left: 5px;
    color: $white;
    font-weight: 500;
    font-size: 15px;
    line-height: 135%;
  }

  &__menu {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  &__menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $white;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

    &:not(&:first-child) {
      margin-left: 50px;
    }

    @include hover {
      .svg {
        opacity: 0;
      }

      .svg-gradient {
        opacity: 1;
      }
    }
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
        transition: $transition-default ease;
      }
    }
  }

  &__menu-contacts {
    display: flex;
    align-items: center;
  }

  &__menu-contacts-phone {
    color: $white;
    font-weight: 900;
    font-size: 16px;
    line-height: 120%;
    text-decoration: none;
  }

  &__menu-contacts-button {
    margin-left: 20px;
  }
}
</style>
