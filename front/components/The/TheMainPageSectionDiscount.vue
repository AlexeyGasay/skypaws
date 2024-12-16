<template>
  <div class="the-main-page-section-discount">
    <div class="the-main-page-section-discount__inner">
      <div class="the-main-page-section-discount__info">
        <h2 class="the-main-page-section-discount__info-title">
          получите скидку на&nbsp;наш пакет для&nbsp;бизнеса
        </h2>

        <p class="the-main-page-section-discount__info-text">
          Не&nbsp;упустите шанс сэкономить и&nbsp;инвестировать в&nbsp;будущее
          Вашего бизнеса. Свяжитесь с&nbsp;нами сегодня, чтобы узнать больше
          о&nbsp;наших предложениях и условиях скидки!
        </p>

        <ui-button
          class="the-main-page-section-discount__info-button"
          :size="isMobile ? 's' : 'm'"
          @click="openModal"
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
      SET_DATA: "modals/SET_DATA",
    }),

    openModal() {
      this.SET_DATA({ title: "успейте получить скидку 30%" });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL);
    },
  },
};
</script>

<style lang="less">
.the-main-page-section-discount {
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 500px;
  background-image: url("@/assets/images/gradient.png");
  background-size: cover;

  .tablet-max({
    position: relative;
    height: 677px;
  });

  .mobile-max({
    height: 400px;
  });

  &__inner {
    .container();
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 40px;

    .tablet-max({
      align-items: flex-start;
      padding: 0 30px;
    });

    .mobile-max({
      padding: 0 10px;
    });
  }

  &__info {
    z-index: @z-3;
    max-width: 460px;
    color: @white;
  }

  &__info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;

    .tablet-max({
      font-size: 30px;
    });

    .mobile-max({
      font-size: 16px;
      max-width: 200px;
    });
  }

  &__info-text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;

    .tablet-max({
      max-width: 460px;
      font-size: 16px;
    });

    .mobile-max({
      max-width: 315px;
      font-size: 12px;
    });
  }

  &__info-button {
    margin-top: 20px;

    .mobile-max({
      margin-top: 15px;
    });
  }

  &__image-stars {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
    inset: 0;
  }

  &__image-hands {
    position: absolute;
    right: 5px;
    bottom: 0;
    z-index: @z-2;
    width: 400px;
    pointer-events: none;

    .tablet-max({
      width: 373px;
      bottom: 0;
      right: 15px;
    });

    .mobile-max({
      width: 173px;
    });
  }

  &__image-drone {
    position: absolute;
    top: 15%;
    right: 120px;
    z-index: @z-3;
    width: 400px;
    animation: drone-fly 5s infinite;
    pointer-events: none;

    .tablet-max({
      top: 60%;
      right: 12%;
      width: 240px;
    });

    .mobile-max({
      width: 200px;
    });
  }

  &__image-clouds {
    position: absolute;
    top: 58px;
    right: 30px;
    z-index: @z-1;
    width: 762px;
    pointer-events: none;
    height: 196px;

    .tablet-max({
      bottom: 176px;
      top: unset;
      right: unset;
      left: 0;
      width: 96%;
    });

    .mobile-max({
      height: 88px;
      width: 100%;
      bottom: 70px;
    });
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
