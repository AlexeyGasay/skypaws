<template>
  <section class="the-services-discount">
    <div class="the-services-discount__wrapper">
      <img
        v-if="isDesktop"
        class="the-services-discount__kv"
        :src="require('@/assets/images/slug/discount-kv.png')"
        alt="kv"
      />
      <img
        v-else
        class="the-services-discount__kv"
        :src="require('@/assets/images/slug/discount-kv-adapt.png')"
        alt="kv"
      />
      <div class="the-services-discount__content">
        <h3
          class="the-services-discount__title"
          :style="{ color: accent }"
        >
          вместе - выгоднее
        </h3>
        <h4 class="the-services-discount__subtitle">
          Скидка до 30% при&nbsp;посещении более&nbsp;2&nbsp;курсов
        </h4>
        <button
          class="the-services-discount__btn"
          :style="{ background: accent }"
          @click="openModal"
        >
          записаться на курс
        </button>
        <!-- <button
          class="the-services-discount__btn the-services-discount__btn_transparent"
          :style="{ border: `2px solid ${accent}` }"
        >
          посмотреть другие курсы
        </button> -->
      </div>
      <img
        class="the-services-discount__cloud"
        :src="require('@/assets/images/slug/cloud.png')"
        alt="kv"
      />
    </div>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TheServicesDiscount",
  props: {
    accent: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      isDesktop: "mqHelper/isDesktop",
    }),
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
      SET_DATA: "modals/SET_DATA",
    }),

    openModal() {
      this.SET_DATA({ accent: this.$props.accent });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL_COURSE);
    },
  },
};
</script>

<style lang="less">
.the-services-discount {
  min-height: 100vh;

  &__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 78px;
    position: relative;
    z-index: 1;

    .tablet-max({
      flex-direction: column;
      justify-content: center;
      padding: 0;
    });
  }

  &__kv {
    width: 620px;
    height: 493px;
    object-fit: cover;

    .tablet-max({
      width: 90%;
      height: auto;
    });
  }

  &__title {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;

    .mobile-max({
      font-size: 20px;
    });
  }

  &__subtitle {
    font-size: 48px;
    font-weight: 900;
    color: @white;
    margin-top: 10px;
    text-transform: uppercase;

    .mobile-max({
      font-size: 30px;
    });
  }

  &__cloud {
    position: absolute;
    height: 91px;
    right: 0;
    top: 240px;
    object-fit: cover;
    z-index: 1;
    pointer-events: none;

    .tablet-max({
      display: none;
    });
  }

  &__content {
    margin-left: 100px;

    .tablet-max({
      width: 455px;
      margin-left: 0;
    });

    .mobile-max({
      width: 100%;
      padding: 0 10px;
    });
  }

  &__btn {
    width: 454px;
    padding: 13px;
    border-radius: 10px;
    font-weight: 900;
    color: @white;
    font-size: 24px;
    text-transform: uppercase;
    border: none;
    margin-top: 20px;
    transition: transform 0.2s;

    .mobile-max({
      width: 100%;
      font-size: 16px;
      padding: 9px;
      margin-top: 12px;
    });

    .hover({
      transform: scale(0.95);
    });

    &_transparent {
      background: none;
    }
  }
}
</style>
