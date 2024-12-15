<template>
  <section class="the-main-page-section-ecosystem">
    <div class="the-main-page-section-ecosystem__wrapper">
      <div class="the-main-page-section-ecosystem__header">
        <h2 class="the-main-page-section-ecosystem__header-title">
          Экосистема для<br />
          вашего бизнеса
        </h2>
        <ui-button
          class="the-main-page-section-ecosystem__header-button"
          size="m"
          @click="openRequestModal"
        >
          подробнее
        </ui-button>
      </div>
      <div class="the-main-page-section-ecosystem__list">
        <app-card-ecosystem
          v-for="card in cards"
          class="the-main-page-section-ecosystem__list-item"
          :icon="card.icon"
          :title="card.title"
          :list="card.list"
          @click.native="openEcosystemModal(+card.icon - 1)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import cards from "@/data/ecosystemCards";
import { mapMutations } from "vuex";
import AppCardEcosystem from "../App/AppCardEcosystem.vue";

export default {
  name: "TheMainPageSectionHero",
  components: {
    AppCardEcosystem,
  },

  data: () => {
    return {
      cards,
    };
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
      SET_DATA: "modals/SET_DATA",
    }),

    openEcosystemModal(initialSlide) {
      this.SET_DATA({ initialSlide });
      this.SHOW_MODAL(this.$MODAL_NAMES.ECOSYSTEM_MODAL);
    },

    openRequestModal() {
      this.SET_DATA({ title: "откройте бизнес вместе со skypaws" });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL);
    },
  },
};
</script>

<style lang="scss">
.the-main-page-section-ecosystem {
  @include container;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 110;
  width: 100%;
  height: 100vh;
  padding: 140px 40px 60px;

  @include tablet-max {
    padding: 40px 10px;
  }

  &__wrapper {
    width: 100%;
    height: 100%;

    @include tablet-max {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__header-title {
    color: $white;
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;

    @include tablet-max {
      font-size: 30px;
    }

    @include mobile-max {
      font-size: 18px;
    }
  }

  &__list {
    display: flex;
    width: max-content;
    margin-top: 40px;
  }

  &__list-item {
    flex-shrink: 0;

    &:not(:first-child) {
      margin-left: 32px;
    }
  }
}
</style>
