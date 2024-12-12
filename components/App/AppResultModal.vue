<template>
  <div class="app-result-modal">
    <div class="app-result-modal__title">
      Спасибо! Данные успешно отправлены. наш менеджер скоро свяжется с вами!
    </div>

    <div class="app-result-modal__close-button">
      <svg-icon name="cross-icon" />
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

<style lang="scss">
.app-result-modal {
  height: 350px;
  background-color: $white;
  border-radius: 15px;

  &__title {
    font-weight: 900;
    font-size: 24px;
    line-height: 130%;
    text-align: center;
  }

  &__close-button {
    @include square(53px);
    top: 20px;
    right: 20px;
  }

  &__icon {
    &_1 {
      svg {
        @include square(63px);
        top: 34px;
        left: 36px;
      }
    }

    &_2 {
      svg {
        @include square(85px);
        right: 30px;
        bottom: 30px;
      }
    }
  }
}
</style>
