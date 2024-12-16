<template>
  <div class="app-result-modal">
    <div class="app-result-modal__title">
      Спасибо! Данные успешно отправлены. наш менеджер скоро свяжется с вами!
    </div>

    <div class="app-result-modal__icon app-result-modal__icon_1" />

    <div class="app-result-modal__icon app-result-modal__icon_2" />
  </div>
</template>

<script>
export default {
  name: "AppResultModal",
};
</script>

<style lang="less">
.app-result-modal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  background-color: @white;
  border-radius: 15px;

  &__title {
    max-width: 70%;
    font-weight: 900;
    font-size: 24px;
    line-height: 130%;
    text-align: center;

    .tablet-max({
      max-width: unset;
      padding: 0 20px;
      font-size: 20px;
    });
  }

  &__icon {
    position: absolute;

    &_1 {
      .square(63px);
      top: 34px;
      left: 36px;
      background-image: url("@/assets/images/icons/thumbs-up-filled-icon.svg");
      background-position: center;
      background-size: cover;
    }

    &_2 {
      .square(85px);
      right: 30px;
      bottom: 30px;
      background-image: url("@/assets/images/icons/slide-6/add-business-icon.svg");
      background-position: center;
      background-size: cover;
    }
  }
}
</style>
