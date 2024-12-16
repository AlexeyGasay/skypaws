<template>
  <div class="the-main-page-section-hero">
    <div class="the-main-page-section-hero__info">
      <h2 class="the-main-page-section-hero__info-title">
        Начните прибыльный бизнес: откройте школу пилотирования дронов для
        детей!
      </h2>

      <p class="the-main-page-section-hero__info-text">
        Откройте уникальную школу, где дети смогут развивать свои навыки в
        пилотировании дронов, программировании и&nbsp;дизайне<br />
        Присоединяйтесь к&nbsp;нам и&nbsp;начните свой прибыльный бизнес уже
        сегодня &mdash; мы&nbsp;обеспечим Вас всем необходимым для успешного
        старта!
      </p>
    </div>
    <video
      src="/kv.mov"
      playsinline
      muted
      loop
      controls
      class="the-main-page-section-hero__info-video"
    />

    <img
      class="the-main-page-section-hero__kv"
      src="@/assets/images/boy.png"
      alt="Ключевой образ"
    />
  </div>
</template>

<script>
export default {
  name: "TheMainPageSectionHero",
};
</script>

<style lang="less">
.the-main-page-section-hero {
  .container();
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 140px 40px 60px;

  .tablet-max({
    align-items: flex-start;
    padding: 100px 40px 60px;
  });

  .mobile-max({
    padding: 100px 10px 60px;
  });

  &__kv {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: auto;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;

    .tablet-max({
      top: 30vh;
      bottom: unset;
      height: 70vh;
    });

    .mobile-max({
      top: 40vh;
      bottom: unset;
      height: 60vh;
    });
  }

  &__info {
    max-width: 850px;
    color: @white;
  }

  &__info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 130%;
    text-transform: uppercase;

    .tablet-max({
      font-size: 32px;
    });

    .mobile-max({
      font-size: 20px;
    });
  }

  &__info-text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;

    .tablet-max({
      font-size: 18px;
    });

    .mobile-max({
      font-size: 12px;
    });
  }

  &__info-video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: none;
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }

  &__scroll-to {
  }
}
</style>
