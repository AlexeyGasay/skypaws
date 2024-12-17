<template>
  <div class="the-main-page-section-calc">
    <div class="the-main-page-section-calc__inner">
      <div class="the-main-page-section-calc__info">
        <h2 class="the-main-page-section-calc__info-title">
          откройте свой бизнес с&nbsp;минимальными<br/> вложениями
          от&nbsp;599&nbsp;000&nbsp;₽
        </h2>

        <p class="the-main-page-section-calc__info-text">
          Выберите подходящий вариант приобретения оборудования и&nbsp;откройте
          свою школу пилотирования, программирования и&nbsp;дизайна. Пройдите
          квиз, который поможет Вам рассчитать стоимость Вашего бизнеса!
        </p>

        <ui-button
          class="the-main-page-section-calc__info-button"
          :size="isMobile ? 's' : 'm'"
          @click="SHOW_MODAL($MODAL_NAMES.CALC_MODAL)"
        >
          рассчитать стоимость
        </ui-button>
      </div>

      <img
        class="the-main-page-section-calc__image-stars"
        alt=""
        src="@/assets/images/stars.png"
      />

      <img
        class="the-main-page-section-calc__image-hands"
        alt=""
        src="@/assets/images/calc/hands.svg"
      />

      <img
        class="the-main-page-section-calc__image-drone"
        alt=""
        src="@/assets/images/calc/drone.svg"
      />

      <img
        class="the-main-page-section-calc__image-clouds"
        alt=""
        src="@/assets/images/calc/clouds.svg"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TheMainPageSectionCalc",

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

<style lang="less">
.the-main-page-section-calc {
  position: relative;
  z-index: 10;
  width: 100%;
  background-color: @purple;
  overflow: hidden;
  height: 500px;
  background-image: url("@/assets/images/gradient.png");
  background-size: cover;

  .tablet-max({
    position: relative;
    height: 677px;
  });

  .mobile-max({
    height: 398px;
  });

  &__inner {
    .container();
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 60px 40px;

    .tablet-max({
      align-items: flex-start;
      padding: 0 30px;
    });

    .mobile-max({
      padding: 0 10px;
    });
  }

  &__info {
    position: relative;
    z-index: @z-3;
    color: @white;
  }

  &__info-title {
    max-width: 780px;
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;

    .tablet-max({
      font-size: 30px;
    });

    .mobile-max({
      font-size: 16px;
    });
  }

  &__info-text {
    max-width: 578px;
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;

    .tablet-max({
      max-width: 5600px;
      margin-top: 6px;
      font-size: 16px;
    });

    .mobile-max({
      max-width: 325px;
      font-size: 12px;
    });
  }

  &__info-button {
    margin-top: 20px;
  }

  &__image-stars {
    position: absolute;
    z-index: 0;
    width: 100%;
    inset: 0;
    object-fit: contain;
    height: 160%;
    pointer-events: none;

    .tablet-max({
      top: -10%;
    });
  }

  &__image-hands {
    position: absolute;
    right: 39px;
    z-index: @z-3;
    width: 230px;
    pointer-events: none;
    bottom: 50px;

    .tablet-max({
      right: 20px;
      width: 219px;
      bottom: 0;
    });

    .mobile-max({
      right: 17px;
      width: 102px;
    });
  }

  &__image-drone {
    position: absolute;
    top: 20%;
    right: 80px;
    z-index: @z-2;
    width: 400px;
    transform: translateY(-50%);
    animation: drone-fly 5s infinite;
    pointer-events: none;

    .tablet-max({
      top: 55%;
      right: 25%;
      width: 353px;
    });

    .mobile-max({
      width: 156px;
    });
  }

  &__image-clouds {
    position: absolute;
    top: 75px;
    right: 6px;
    z-index: @z-1;
    width: 621px;
    pointer-events: none;

    .tablet-max({
      right: 0;
      top: unset;
      bottom: 174px;
      width: 596px;
    });

    .mobile-max({
      right: 0;
      top: unset;
      width: 280px;
      bottom: 80px;
    });
  }
}

@keyframes drone-fly {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  50% {
    transform: translate(30px, 20px) rotate(15deg);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}
</style>
