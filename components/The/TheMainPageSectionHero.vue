<template>
  <div class="the-main-page-section-hero">
    <div class="the-main-page-section-hero__info">
      <h2 class="the-main-page-section-hero__info-title">
        Начните прибыльный бизнес: откройте школу пилотирования дронов для
        детей!
      </h2>

      <p class="the-main-page-section-hero__info-text">
        Откройте уникальную школу, где дети смогут развивать свои навыки в
        пилотировании дронов, программировании и&nbsp;дизайне в&nbsp;Photoshop!
        Присоединяйтесь к&nbsp;нам и&nbsp;начните свой прибыльный бизнес уже
        сегодня &mdash; мы&nbsp;обеспечим Вас всем необходимым для успешного
        старта!
      </p>

      <div class="the-main-page-section-hero__info-video">
        <div class="the-main-page-section-hero__info-video-inner">video</div>

        <div class="the-main-page-section-hero__info-video-caption">
          Посмотрите видеоролик о нас
        </div>
      </div>
    </div>

    <div class="the-main-page-section-hero__scroll-to">scroll-to</div>
  </div>
</template>

<script>
export default {
  name: "TheMainPageSectionHero",
};
</script>

<style lang="scss">
.the-main-page-section-hero {
  @include container;
  height: 100vh;
  padding: 140px 40px 60px;

  &__info {
    max-width: 850px;
    color: $white;
  }

  &__info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 130%;
    text-transform: uppercase;
  }

  &__info-text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
  }

  &__info-video {
    margin-top: 30px;
  }

  &__info-video-inner {
  }

  &__info-video-caption {
    margin-top: 20px;
    font-size: 20px;
    line-height: 130%;
  }

  &__scroll-to {
  }
}
</style>
