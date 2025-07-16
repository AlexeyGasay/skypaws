<template>
  <section class="the-services-slider">
    <div class="the-services-slider__wrapper">
      <swiper
        ref="slider"
        class="the-services-slider__slider"
        :options="{
          spaceBetween: 20,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
          breakpoints: {
            1023: {
              slidesPerView: 'auto',
              spaceBetween: 60,
            },
          },
        }"
      >
        <swiper-slide
          v-for="slide in slides"
          :key="slide"
          class="the-services-slider__slider-slide"
        >
          <img
            :src="slide"
            alt="слайд"
            class="the-services-slider__img"
          />
        </swiper-slide>
      </swiper>
    </div>

    <div class="the-services-slider__nav">
      <ui-nav-swiper
        class="the-services-slider__nav-button the-services-slider__nav-button_prev"
        :style="{ color: accent }"
        @click.native="slideHandler('prev')"
      />
      <ui-nav-swiper
        class="the-services-slider__nav-button the-services-slider__nav-button_next"
        :style="{ color: accent }"
        @click.native="slideHandler('next')"
      />
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import UiNavSwiper from "~/components/Ui/UiNavSwiper.vue";

export default {
  name: "TheServicesSlider",
  components: {
    Swiper,
    SwiperSlide,
    UiNavSwiper,
  },

  props: {
    slides: {
      type: Array,
      required: true,
    },

    accent: {
      type: String,
      required: true,
    },
  },

  methods: {
    slideHandler(nav) {
      if (nav === "prev") {
        this.$refs.slider.$swiper.slidePrev();
      } else if (nav === "next") {
        this.$refs.slider.$swiper.slideNext();
      }
    },
  },
};
</script>

<style lang="less">
.the-services-slider {
  min-height: 100vh;
  max-width: 100vw;

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
  }

  &__slider {
    margin: auto;
  }

  .swiper-wrapper {
    display: flex;
    width: 100vw;
  }

  .swiper-slide {
    max-height: 600px;
    height: 70vh;

    .tablet-max({
      display: flex;
      justify-content: center;
      width: 708px;
      max-height: 474px
    });

    .mobile-max({
      max-height: 228px;
      width: 350px;
    });

    img {
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
      transition: transform 0.3s, filter 0.3s;

      .tablet-max({
        height: auto;
        width: 708px;
      });

      .mobile-max({
        width: 340px;
      });
    }
  }

  .swiper-slide {
    img {
      filter: brightness(0.5);
      transform: scale(0.66);
    }

    &-active {
      img {
        filter: brightness(1);
        transform: scale(1);
      }
    }
  }

  &__nav {
    width: 1060px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 100;
    top: calc(50% - (54px / 2));
    left: 190px;
    pointer-events: none;

    .tablet-max({
      width: 126px;
      left: calc(50% - (126px / 2));
      top: 76vh;
    });

    .mobile-max({
      top: 69vh;
    });

    &-button {
      width: 54px;
      height: 54px;
      cursor: pointer;
      pointer-events: all;

      &_next {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
