<template>
  <div class="app-result-modal">
    <div class="app-result-modal__title">
      Спасибо! Данные успешно отправлены. наш менеджер скоро свяжется с вами!
    </div>

    <div class="app-result-modal__icon app-result-modal__icon_1">
      <svg-icon name="thumbs-up-filled-icon" />
    </div>

    <div class="app-result-modal__icon app-result-modal__icon_2">
      <svg-icon name="slide-6/add-business-icon" />
    </div>
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
      top: 34px;
      left: 36px;

      * {
        .square(63px);
      }
    }

    &_2 {
      right: 30px;
      bottom: 30px;

      * {
        .square(85px);
      }
    }
  }
}
</style>
