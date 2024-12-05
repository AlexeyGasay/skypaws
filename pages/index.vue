<template>
  <div class="main-page">
    <div class="main-page__hero">
      <div class="main-page__hero-info">
        <h2 class="main-page__hero-info-title">
          Начните прибыльный бизнес: откройте школу пилотирования дронов для
          детей!
        </h2>

        <p class="main-page__hero-info-text">
          Откройте уникальную школу, где дети смогут развивать свои навыки в
          пилотировании дронов, программировании и&nbsp;дизайне
          в&nbsp;Photoshop! Присоединяйтесь к&nbsp;нам и&nbsp;начните свой
          прибыльный бизнес уже сегодня &mdash; мы&nbsp;обеспечим Вас всем
          необходимым для успешного старта!
        </p>

        <div class="main-page__hero-info-video">
          <div class="main-page__hero-info-video-inner">video</div>

          <div class="main-page__hero-info-video-caption">
            Посмотрите видеоролик о нас
          </div>
        </div>
      </div>

      <div class="main-page__hero-scroll-to">scroll-to</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-page {
  &__hero {
    min-height: 860px;
    padding: 140px 40px 60px;
    background-color: #2b1252;
  }

  &__hero-info {
    max-width: 850px;
    color: $white;
  }

  &__hero-info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 130%;
    text-transform: uppercase;
  }

  &__hero-info-text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
  }

  &__hero-info-video {
    margin-top: 30px;
  }

  &__hero-info-video-inner {
  }

  &__hero-info-video-caption {
    margin-top: 20px;
    font-size: 20px;
    line-height: 130%;
  }

  &__hero-scroll-to {
  }
}
</style>
