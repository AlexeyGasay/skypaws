<template>
  <section class="the-services-qr">
    <div class="the-services-qr__wrapper">
      <h3 class="the-services-qr__title">остались вопросы?</h3>
      <p class="the-services-qr__text">
        Наш&nbsp;менеджер с&nbsp;радостью поможет Вам найти решение!
      </p>
      <img
        class="the-services-qr__qr"
        src="@/assets/images/slug/qr.png"
        alt="qr code"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "TheServicesQr",
};
</script>

<style lang="less">
.the-services-qr {
  height: 100vh;

  &__wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 64px;
    color: @white;
    font-weight: 900;
    text-transform: uppercase;
  }

  &__text {
    margin-top: 5px;
    font-size: 20px;
    color: @white;
    font-weight: 500;
  }

  &__qr {
    width: 209px;
    height: 209px;
    margin-top: 40px;
  }
}
</style>
