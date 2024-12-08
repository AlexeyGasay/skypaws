<template>
  <div class="the-main-page-section-calc">
    <div class="the-main-page-section-calc__inner">
      <div class="the-main-page-section-calc__info">
        <h2 class="the-main-page-section-calc__info-title">
          откройте свой бизнес с&nbsp;минимальными вложениями
          от&nbsp;599&nbsp;000&nbsp;₽
        </h2>

        <p class="the-main-page-section-calc__info-text">
          Выберите подходящий вариант приобретения оборудования и&nbsp;откройте
          свою школу пилотирования, программирования и&nbsp;дизайна. Пройдите
          квиз, который поможет Вам рассчитать стоимость Вашего бизнеса!
        </p>

        <ui-button class="the-main-page-section-calc__info-button">
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
export default {
  name: "TheMainPageSectionCalc",
};
</script>

<style lang="scss">
.the-main-page-section-calc {
  height: 100vh;
  background-color: $purple;

  &__inner {
    @include container;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 40px;
  }

  &__info {
    position: relative;
    z-index: $z-3;
    color: $white;
  }

  &__info-title {
    max-width: 780px;
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;
  }

  &__info-text {
    max-width: 578px;
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;
  }

  &__info-button {
    margin-top: 20px;
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
    top: 56.6%;
    right: 39px;
    z-index: $z-3;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &__image-drone {
    position: absolute;
    top: 45%;
    right: 12px;
    z-index: $z-2;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &__image-clouds {
    position: absolute;
    top: 43%;
    right: 6px;
    z-index: $z-1;
    transform: translateY(-50%);
    pointer-events: none;
  }
}
</style>
