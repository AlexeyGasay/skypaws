<template>
  <section class="the-main-page-section-ecosystem">
    <div class="the-main-page-section-ecosystem__wrapper">
      <div class="the-main-page-section-ecosystem__header">
        <h2 class="the-main-page-section-ecosystem__header-title">
          Экосистема для вашего бизнеса
        </h2>
      </div>
      <div class="the-main-page-section-ecosystem__list">
        <app-card-ecosystem
          v-for="(card, index) in cards"
          :key="index"
          class="the-main-page-section-ecosystem__list-item"
          :icon="card.icon"
          :title="card.title"
          :list="card.list"
          :active="activeCardIndex === index"
          @mouseenter.native="handleMouseEnter(index)"
          @mouseleave.native="handleMouseLeave"
          @click.native="openEcosystemModal(index)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// eslint-disable-next-line import/no-unresolved, import/extensions
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
      activeCardIndex: null,
      randomInterval: null,
    };
  },

  computed: {
    ...mapGetters({
      isDesktop: "mqHelper/isDesktop",
    }),
  },

  mounted() {
    this.randomizeActiveCard();
  },

  beforeDestroy() {
    clearInterval(this.randomInterval);
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
      SET_DATA: "modals/SET_DATA",
    }),

    openEcosystemModal(index) {
      this.activeCardIndex = index;
      this.SET_DATA({ initialSlide: index });
      this.SHOW_MODAL(this.$MODAL_NAMES.ECOSYSTEM_MODAL);
    },

    openRequestModal() {
      this.SET_DATA({ title: "откройте бизнес вместе со skypaws" });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL);
    },

    handleMouseEnter(index) {
      this.activeCardIndex = index;
      clearInterval(this.randomInterval);
    },

    handleMouseLeave() {
      this.randomizeActiveCard();
    },

    randomizeActiveCard() {
      const indices = this.cards.map((_, index) => index);
      let shuffledIndices = indices.sort(() => 0.5 - Math.random());
      this.randomInterval = setInterval(() => {
        if (shuffledIndices.length === 0) {
          clearInterval(this.randomInterval);
          return;
        }
        this.activeCardIndex = shuffledIndices.pop();
      }, 6000);
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
  padding: 100px 40px 24px;

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
    margin-top: 27px;
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
