<template>
  <section class="the-services-discount">
    <div class="the-services-discount__wrapper">
      <img
        class="the-services-discount__kv"
        :src="require('@/assets/images/slug/discount-kv.png')"
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
        <button
          class="the-services-discount__btn the-services-discount__btn_transparent"
          :style="{ border: `2px solid ${accent}` }"
        >
          посмотреть другие курсы
        </button>
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
import { mapMutations } from "vuex";

export default {
  name: "TheServicesDiscount",
  props: {
    accent: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
      SET_DATA: "modals/SET_DATA",
    }),

    openModal() {
      this.SET_DATA({ title: "Ваши контактные данные" });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL);
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
  }

  &__kv {
    width: 620px;
    height: 493px;
    object-fit: cover;
  }

  &__title {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 48px;
    font-weight: 900;
    color: @white;
    margin-top: 10px;
    text-transform: uppercase;
  }

  &__cloud {
    position: absolute;
    height: 91px;
    right: 0;
    top: 240px;
    object-fit: cover;
    z-index: 1;
    pointer-events: none;
  }

  &__content {
    margin-left: 100px;
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

    .hover({
      transform: scale(0.95);
    });

    &_transparent {
      background: none;
    }
  }
}
</style>
