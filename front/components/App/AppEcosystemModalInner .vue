<template>
  <div class="app-ecosystem-modal-inner">
    <div class="app-ecosystem-modal-inner__slider-handlers">
      <div
        v-if="currentSlide > 0"
        class="app-ecosystem-modal-inner__slider-handlers-item"
        @click="slideHandler('prev')"
      >
        <div
          class="app-ecosystem-modal-inner__slider-handlers-item-icon app-ecosystem-modal-inner__slider-handlers-item-icon_arrow-left"
        />
      </div>

      <div
        class="app-ecosystem-modal-inner__slider-handlers-item"
        @click="slideHandler('next')"
      >
        <div
          v-if="currentSlide < slides.length - 1"
          class="app-ecosystem-modal-inner__slider-handlers-item-icon app-ecosystem-modal-inner__slider-handlers-item-icon_arrow-right"
        />

        <div
          v-else
          class="app-ecosystem-modal-inner__slider-handlers-item-icon app-ecosystem-modal-inner__slider-handlers-item-icon_cross"
          @click="HIDE_ALL_MODALS"
        />
      </div>
    </div>

    <swiper
      ref="slider"
      :options="options"
      class="app-ecosystem-modal-inner__slider"
      @slideChange="slideChangeHandler"
    >
      <swiper-slide
        v-for="(slide, slideIndex) in slides"
        :key="slideIndex"
        class="app-ecosystem-modal-inner__slider-slide"
      >
        <div class="app-ecosystem-modal-inner__slider-slide-title">
          {{ slide.title }}
        </div>

        <div
          class="app-ecosystem-modal-inner__slider-text"
          v-html="slide.text"
        />

        <ui-button
          class="app-ecosystem-modal-inner__slider-button"
          type="filled"
          hover-theme="black"
          @click="openRequestModal"
        >
          подробнее
        </ui-button>

        <template v-if="slide.icons">
          <div
            v-for="(icon, iconIndex) in slide.icons"
            :key="iconIndex"
            :class="
              bem('app-ecosystem-modal-inner__slider-slide-icon', {
                index: String(iconIndex),
              })
            "
            :style="`
            --square: ${pixelsToRem(icon.square)};
            --img: url(${require(`@/assets/images/icons/${icon.name}.svg`)})`"
          />
        </template>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapGetters, mapMutations } from "vuex";
import { pixelsToRem } from "@/tools";

export default {
  name: "AppEcosystemModalInner",
  components: { Swiper, SwiperSlide },

  data() {
    return {
      slides: [
        {
          title: "Поддержка и сопровождение",
          text: "Мы&nbsp;экономим Ваше время на&nbsp;поиски подходящего помещения. Наши опытные маркетологи помогут определить лучшие локации для Вашего бизнеса. Мы&nbsp;научим Вас эффективным инструментам привлечения и&nbsp;удержания клиентов, а&nbsp;также возьмем на&nbsp;себя организацию образовательного процесса от&nbsp;начала до&nbsp;конца. На&nbsp;всех этапах запуска и&nbsp;развития мы&nbsp;будем с&nbsp;Вами на&nbsp;связи, обеспечивая поддержку и&nbsp;предоставляя четкие инструкции для оптимизации бизнес-процессов.",
          icons: [
            {
              name: "slide-1/light-business-icon",
              square: 55,
            },
            {
              name: "slide-1/fluent-handshake-icon",
              square: 53,
            },
            {
              name: "slide-1/add-business-icon",
              square: 85,
            },
          ],
        },
        {
          title: "администрирование",
          text: "Не&nbsp;тратьте время на&nbsp;поиск и&nbsp;обучение администраторов и&nbsp;менеджеров. Мы&nbsp;полностью берем на&nbsp;себя работу с&nbsp;клиентами: наши специалисты примут звонки с&nbsp;многоканального номера 88007772132, профессионально проконсультируют и&nbsp;продадут услуги. Мы&nbsp;организуем процесс обучения, составим расписание занятий и&nbsp;будем напоминать о&nbsp;предстоящих уроках. Оптимизируем процессы и&nbsp;поможем Вам собирать и&nbsp;хранить информацию о&nbsp;клиентах для повышения продаж.",

          icons: [
            {
              name: "slide-2/phone-vibrate-icon",
              square: 47,
            },
            {
              name: "slide-2/person-fill-gear-icon",
              square: 43,
            },
            {
              name: "slide-2/new-computer-icon",
              square: 73,
            },
          ],
        },
        {
          title: "подбор специалистов",
          text: `Забудьте о&nbsp;поисках HR-специалистов и&nbsp;сложностях, связанных с&nbsp;подбором кадров. Мы&nbsp;профессионально подберем, подготовим и&nbsp;протестируем преподавателей, оставив за&nbsp;Вами лишь финальное одобрение кандидатов. Мы&nbsp;также предоставим обратную связь по&nbsp;работе персонала, чтобы гарантировать высокое
качество обучения.`,

          icons: [
            {
              name: "slide-3/magnifying-glass-icon",
              square: 60,
            },
            {
              name: "slide-3/book-icon",
              square: 66,
            },
            {
              name: "slide-3/glasses-icon",
              square: 43,
            },
          ],
        },
        {
          title: "программы направлений",
          text: "Расширьте свой бизнес, добавив новые направления, такие как обучение БПЛА. Это не&nbsp;только привлечет больше клиентов, но&nbsp;и&nbsp;позволит Вам занять уникальную нишу на&nbsp;рынке. Мы&nbsp;обеспечим Вас полным циклом образовательных программ в&nbsp;IT-сфере для детей разных возрастных групп, включая курсы по&nbsp;программированию и&nbsp;графическому дизайну.",

          icons: [
            {
              name: "slide-4/services-icon",
              square: 56,
            },
            {
              name: "slide-4/linked-services-icon",
              square: 55,
            },
            {
              name: "slide-4/design-services-icon",
              square: 48,
            },
          ],
        },
        {
          title: "готовое оборудование",
          text: "Мы&nbsp;подготовили и&nbsp;настроили оптимальное оборудование для Вашего бизнеса. Работая напрямую с&nbsp;надежными поставщиками, мы&nbsp;гарантируем качество на&nbsp;этапе отправки. Вам не&nbsp;придется беспокоиться об&nbsp;изготовлении или покупке трасс для полетов&nbsp;&mdash; мы&nbsp;уже создали инновационное решение, которое включено в&nbsp;комплект с&nbsp;Вашим оборудованием.",

          icons: [
            {
              name: "slide-5/tools-icon",
              square: 56,
            },
            {
              name: "slide-5/table-checkmark-icon",
              square: 55,
            },
            {
              name: "slide-5/box-icon",
              square: 48,
            },
          ],
        },
        {
          title: "реклама",
          text: "Мы профессионально настроим рекламные кампании для Вашего города, обеспечивая широкий охват целевой аудитории. Вам не придется тратиться на создание рекламных материалов — мы предоставим все необходимое для успешного продвижения вашего бизнеса. Мы будем контролировать эффективность рекламы и вносить необходимые изменения для достижения максимальных результатов.",

          icons: [
            {
              name: "slide-6/advertising-icon",
              square: 60,
            },
            {
              name: "slide-6/internet-icon",
              square: 50,
            },
            {
              name: "slide-6/add-business-icon",
              square: 85,
            },
          ],
        },
      ],

      currentSlide: null,
    };
  },

  computed: {
    ...mapGetters({
      getData: "modals/getData",
    }),

    options() {
      return {
        slidesPerView: 1,
        wrapperClass: "app-ecosystem-modal-inner__slider-inner",
        spaceBetween: 14,
        observeParents: true,
        observer: true,
        resizeObserver: true,
        initialSlide: this.getData.initialSlide || 0,
      };
    },
  },

  mounted() {
    this.currentSlide = this.$refs.slider.$swiper.realIndex;
  },

  methods: {
    pixelsToRem,

    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
      HIDE_ALL_MODALS: "modals/HIDE_ALL_MODALS",
      SET_DATA: "modals/SET_DATA",
    }),

    openRequestModal() {
      this.SET_DATA({ title: "откройте бизнес вместе со skypaws" });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL);
    },

    slideHandler(nav) {
      if (nav === "prev") {
        this.$refs.slider.$swiper.slidePrev();
      } else if (nav === "next") {
        this.$refs.slider.$swiper.slideNext();
      }
    },

    slideChangeHandler() {
      this.currentSlide = this.$refs.slider.$swiper.realIndex;
    },
  },
};
</script>

<style lang="less">
.app-ecosystem-modal-inner {
  position: relative;

  &__slider-handlers {
    position: absolute;
    top: 30px;
    right: 40px;
    z-index: @z-1;
    display: flex;
    align-items: center;

    .mobile-max({
      top: 10px;
      right: 20px;
    });
  }

  &__slider-handlers-item {
    .square(53px);
    cursor: pointer;

    .mobile-max({
      .square(31px);
    });

    &:not(&:first-child) {
      margin-left: 20px;

      .mobile-max({
        margin-left: 10px;
      });
    }
  }

  &__slider-handlers-item-icon {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;

    &_arrow-left {
      background-image: url("@/assets/images/icons/arrow-left-icon.svg");
    }

    &_arrow-right {
      background-image: url("@/assets/images/icons/arrow-right-icon.svg");
    }

    &_cross {
      background-image: url("@/assets/images/icons/cross-icon.svg");
    }
  }

  &__slider {
    overflow: hidden;
  }

  &__slider-inner {
    display: flex;
    align-items: stretch;
  }

  &__slider-slide {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    padding: 30px 40px 40px;

    .mobile-max({
      padding: 10px;
    });
  }

  &__slider-slide-title {
    margin-top: 10px;
    font-weight: 900;
    font-size: 24px;
    line-height: 130%;
    text-transform: uppercase;
    pointer-events: none;

    .mobile-max({
      max-width: calc(100% - 140px);
      font-size: 14px;
    });
  }

  &__slider-text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;

    .mobile-max({
      font-size: 12px;
    });
  }

  &__slider-button {
    margin-top: 20px;
  }

  &__slider-slide-icon {
    .square(var(--square));
    position: absolute;
    background-image: var(--img);
    background-position: center;
    background-size: cover;

    .mobile-max({
      .square(40px);
    });

    &_index {
      &_0 {
        top: 20px;
        right: 180px;

        .mobile-max({
          right: 110px;
        });
      }

      &_1 {
        top: 220px;
        right: 20px;
      }

      &_2 {
        right: 100px;
        bottom: 20px;
      }
    }
  }
}
</style>
