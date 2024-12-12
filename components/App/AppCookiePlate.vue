<template>
  <div class="app-cookie-plate">
    <div class="app-cookie-plate__title">
      сайт использует cookie для персонализации сервисов и удобства
      пользователей. политика использования cookie-файлов.
    </div>

    <ui-button
      class="app-cookie-plate__button"
      type="filled"
    >
      принять и закрыть
    </ui-button>
  </div>
</template>

<script>
export default {
  name: "AppCookiePlate",
};
</script>

<style lang="scss">
.app-cookie-plate {
  padding: 14px 20px;
  background-color: $white;
  border-radius: 15px;

  &__title {
    font-weight: 900;
    font-size: 10px;
    line-height: 130%;
  }

  &__button {
    margin-top: 5px;
  }
}
</style>
