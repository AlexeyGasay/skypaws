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
    </div>
    <video
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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

<style lang="scss">
.the-main-page-section-hero {
  @include container;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 140px 40px 60px;

  @include tablet-max {
    position: static;
  }

  &__kv {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: auto;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;

    @include tablet-max {
      display: none;
    }
  }

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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @include tablet-max {
      display: none;
    }
  }

  &__scroll-to {
  }
}
</style>
