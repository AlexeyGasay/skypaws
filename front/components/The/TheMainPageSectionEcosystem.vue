<template>
  <section class="the-main-page-section-ecosystem">
    <div class="the-main-page-section-ecosystem__wrapper">
      <div class="the-main-page-section-ecosystem__header">
        <h2 class="the-main-page-section-ecosystem__header-title">
          Экосистема для вашего бизнеса
        </h2>
        <ui-button
          class="the-main-page-section-ecosystem__header-button"
          :size="isDesktop ? 'm' : 's'"
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
import { mapGetters, mapMutations } from "vuex";
import cards from "@/data/ecosystemCards";
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

<style lang="less">
.the-main-page-section-ecosystem {
  .container();
  position: relative;
  top: 0;
  left: 0;
  z-index: 110;
  width: 100%;
  padding: 20px 40px 40px;

  .tablet-max({
    position: relative;
    padding: 30px;
  });

  .mobile-max({
    padding: 20px 10px;
  });

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__header-title {
    color: @white;
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;
    padding-right: 15px;
    max-width: 450px;

    .tablet-max({
      font-size: 30px;
      max-width: 385px;
    });

    .mobile-max({
      font-size: 16px;
    });
  }

  &__header-button {
    min-width: 120px;
  }

  &__list {
    display: grid;
    margin-top: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;

    .tablet-max({
      width: 100%;
      margin-top: 20px;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
    });

    .mobile-max({
      grid-template-columns: 1fr;
    });
  }

  &__list-item {
  }
}
</style>
