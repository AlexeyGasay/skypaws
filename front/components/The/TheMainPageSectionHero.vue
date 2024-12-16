<template>
  <div class="the-main-page-section-hero">
    <div class="the-main-page-section-hero__info">
      <h2 class="the-main-page-section-hero__info-title">
        Начните прибыльный бизнес: откройте школу пилотирования дронов для
        детей!
      </h2>

      <div class="the-main-page-section-hero__info-text">
        <div ref="quote1">
          Откройте уникальную школу, где дети смогут развивать свои навыки
          в&nbsp;пилотировании дронов, программировании и&nbsp;дизайне!
        </div>
        <div ref="quote2">
          Присоединяйтесь к&nbsp;нам и&nbsp;начните свой прибыльный бизнес уже
          сегодня &mdash; мы&nbsp;обеспечим Вас всем необходимым для успешного
          старта!
        </div>
        <div ref="quote3">
          Откройте уникальную школу, где дети смогут развивать свои навыки
          в&nbsp;пилотировании дронов, программировании и&nbsp;дизайне!
        </div>
      </div>
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

    <div class="the-main-page-section-hero__gradient" />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "TheMainPageSectionHero",
  mounted() {
    gsap.set(this.$refs.quote1, {
      x: "-50rem",
    });
    gsap.set(this.$refs.quote2, {
      x: "-50rem",
    });

    const tlChangeQuote = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tlChangeQuote.to(
      this.$refs.quote3,
      {
        opacity: 0,
        filter: "blur(12px)",
        x: "50rem",
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.set(this.$refs.quote3, {
      x: "-50rem",
      opacity: 1,
      filter: "blur(0)",
    });
    tlChangeQuote.to(
      this.$refs.quote1,
      {
        x: 0,
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.to(
      this.$refs.quote1,
      {
        opacity: 0,
        filter: "blur(12px)",
        x: "50rem",
        duration: 0.6,
        delay: 3,
      },
      "<",
    );
    tlChangeQuote.to(
      this.$refs.quote2,
      {
        x: 0,
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.to(
      this.$refs.quote2,
      {
        opacity: 0,
        filter: "blur(12px)",
        x: "50rem",
        duration: 0.6,
        delay: 3,
      },
      "<",
    );
    tlChangeQuote.to(
      this.$refs.quote3,
      {
        x: 0,
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.to(
      this.$refs.quote3,
      {
        delay: 3,
      },
      "<",
    );
  },
};
</script>

<style lang="less">
.the-main-page-section-hero {
  .container();
  position: relative;
  z-index: 1;
  height: 100vh;
  padding: 140px 40px 60px;

  &__gradient {
    background: linear-gradient(
      180deg,
      rgba(43, 18, 82, 0) 0%,
      rgba(43, 18, 82, 0.6) 30%,
      #2b1252 100%
    );
    height: 30vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .tablet-max({
    align-items: flex-start;
    padding: 84px 20px 60px;
    height: 800px;
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
      bottom: 30px;
      height: 500px;
    });

    .mobile-max({
      bottom: 30px;
      height: 400px;
    });
  }

  &__info {
    max-width: 850px;
    color: @white;
    margin-top: 143px;
    position: relative;
    z-index: 10000;

    .tablet-max({
      margin-top: 0;
    });
  }

  &__info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 137%;
    text-transform: uppercase;

    .tablet-max({
      font-size: 30px;
    });

    .mobile-max({
      font-size: 16px;
    });
  }

  &__info-text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;
    position: relative;
    z-index: 1;
    transition: none;

    div {
      width: 720px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      transition: none;
    }

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
