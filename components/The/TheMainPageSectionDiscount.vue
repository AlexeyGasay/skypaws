<template>
  <div class="the-main-page-section-discount">
    <div class="the-main-page-section-discount__inner">
      <div class="the-main-page-section-discount__info">
        <h2 class="the-main-page-section-discount__info-title">
          получите скидку на&nbsp;наш пакет для бизнеса
        </h2>

        <p class="the-main-page-section-discount__info-text">
          Не&nbsp;упустите шанс сэкономить и&nbsp;инвестировать в&nbsp;будущее
          Вашего бизнеса. Свяжитесь с&nbsp;нами сегодня, чтобы узнать больше
          о&nbsp;наших предложениях и условиях скидки!
        </p>

        <ui-button
          class="the-main-page-section-discount__info-button"
          :size="isMobile ? 's' : 'm'"
          @click="SHOW_MODAL($MODAL_NAMES.REQUEST_MODAL)"
        >
          Оставить заявку
        </ui-button>
      </div>

      <img
        class="the-main-page-section-discount__image-stars"
        alt=""
        src="@/assets/images/stars.png"
      />

      <img
        class="the-main-page-section-discount__image-hands"
        alt=""
        src="@/assets/images/discount/hands.svg"
      />

      <img
        class="the-main-page-section-discount__image-drone"
        alt=""
        src="@/assets/images/discount/drone.svg"
      />

      <img
        class="the-main-page-section-discount__image-clouds"
        alt=""
        src="@/assets/images/discount/clouds.svg"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TheMainPageSectionDiscount",

  computed: {
    ...mapGetters({
      isMobile: "mqHelper/isMobile",
    }),
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
    }),
  },
};
</script>

<style lang="scss">
.the-main-page-section-discount {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: $purple;

  @include tablet-max {
    position: static;
  }

  &__inner {
    @include container;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 40px;

    @include tablet-max {
      align-items: flex-start;
      padding: 0 40px;
    }

    @include mobile-max {
      padding: 0 12px;
    }
  }

  &__info {
    position: relative;
    z-index: $z-3;
    max-width: 460px;
    color: $white;
  }

  &__info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;

    @include tablet-max {
      font-size: 30px;
    }

    @include mobile-max {
      font-size: 16px;
    }
  }

  &__info-text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;

    @include tablet-max {
      max-width: 460px;
      font-size: 16px;
    }

    @include mobile-max {
      max-width: 315px;
      font-size: 12px;
    }
  }

  &__info-button {
    margin-top: 20px;

    @include mobile-max {
      margin-top: 15px;
    }
  }

  &__image-stars {
    position: absolute;
    z-index: 0;
    max-width: 100%;
    inset: 0;
    pointer-events: none;
  }

  &__image-hands {
    position: absolute;
    top: 87.6%;
    right: 0;
    z-index: $z-2;
    transform: translateY(-50%);
    pointer-events: none;

    @include tablet-max {
      top: 62%;
      width: 373px;
    }

    @include mobile-max {
      top: 40%;
      width: 173px;
    }
  }

  &__image-drone {
    position: absolute;
    top: 20.5%;
    right: 120px;
    z-index: $z-3;
    animation: drone-fly 5s infinite;
    pointer-events: none;

    @include tablet-max {
      top: 46%;
      right: 12%;
    }

    @include mobile-max {
      top: 32%;
      width: 173px;
    }
  }

  &__image-clouds {
    position: absolute;
    top: 42%;
    right: 22px;
    z-index: $z-1;
    transform: translateY(-50%);
    pointer-events: none;

    @include tablet-max {
      top: 44%;
      right: unset;
      left: 0;
      width: 100%;
    }

    @include mobile-max {
      top: 31%;
    }
  }
}

@keyframes drone-fly {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  50% {
    transform: translate(-50px, -50px) rotate(15deg);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}
</style>
