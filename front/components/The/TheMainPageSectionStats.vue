<template>
  <div class="the-main-page-section-stats">
    <div class="the-main-page-section-stats__inner">
      <div class="the-main-page-section-stats__info">
        <h2 class="the-main-page-section-stats__info-title">
          присоединяйся к skypaws!
        </h2>

        <div class="the-main-page-section-stats__info-stats">
          <div class="the-main-page-section-stats__info-stats-item">
            10 локаций
          </div>
          <div class="the-main-page-section-stats__info-stats-item">
            6 городов
          </div>
          <div class="the-main-page-section-stats__info-stats-item">
            свыше 500 учеников
          </div>
        </div>

        <ui-button
          size="xl"
          class="the-main-page-section-stats__info-button"
          @click="openModal"
        >
          связаться <br />
          с партнерами
        </ui-button>
      </div>

      <div class="the-main-page-section-stats__map">
        <img
          class="the-main-page-section-stats__map-img"
          alt="map"
          src="@/assets/images/map.svg"
        />

        <div class="the-main-page-section-stats__map-stats">
          <div class="the-main-page-section-stats__map-stats-item">
            на этапе переговоров: {{ negotiationStage }}
          </div>

          <div class="the-main-page-section-stats__map-stats-item">
            запланировано открытий: {{ plannedOpening }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TheMainPageSectionStats",
  props: {
    negotiationStage: {
      type: Number,
      required: true,
    },

    plannedOpening: {
      type: Number,
      required: true,
    },
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
      SET_DATA: "modals/SET_DATA",
    }),

    openModal() {
      this.SET_DATA({ title: "откройте бизнес вместе со skypaws" });
      this.SHOW_MODAL(this.$MODAL_NAMES.REQUEST_MODAL);
    },
  },
};
</script>

<style lang="scss">
.the-main-page-section-stats {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  pointer-events: none;

  @include tablet-max {
    position: relative;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 40px 55px;

    @include tablet-max {
      flex-direction: column;
      padding: 30px;
    }

    @include mobile-max {
      padding: 20px 10px;
    }
  }

  &__info {
    max-width: 440px;
    color: $white;

    @include tablet-max {
      width: 100%;
      max-width: unset;
    }
  }

  &__info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;

    @include tablet-max {
      font-size: 30px;
    }

    @include mobile-max {
      font-size: 16px;
    }
  }

  &__info-stats {
    margin-top: 22px;
  }

  &__info-stats-item {
    padding: 20px;
    font-weight: 900;
    font-size: 32px;
    line-height: 135%;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid $white;
    border-radius: 10px;

    &:not(&:first-child) {
      margin-top: 30px;

      @include tablet-max {
        margin-top: 20px;
      }

      @include mobile-max {
        margin-top: 10px;
      }
    }

    @include tablet-max {
      font-size: 28px;
    }

    @include mobile-max {
      font-size: 14px;
    }
  }

  &__info-button {
    width: 100% !important;
    margin-top: 35px;

    @include tablet-max {
      margin-top: 20px;
    }

    @include mobile-max {
      margin-top: 10px;
    }
  }

  &__map {
    width: 90%;
    margin-left: 12px;

    @include tablet-max {
      height: auto;
      margin: 20px 0 0;
    }
  }

  &__map-img {
    width: 100%;
  }

  &__map-stats {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
    padding-right: 25px;

    @include tablet-max {
      justify-content: center;
    }

    @include mobile-max {
      flex-direction: column;
    }
  }

  &__map-stats-item {
    color: #7033fd;
    font-weight: 900;
    font-size: 16px;
    line-height: 135%;

    @include mobile-max {
      font-size: 14px;
    }

    &:first-child {
      color: #08a2ca;
    }

    &:not(&:first-child) {
      margin-left: 20px;

      @include mobile-max {
        margin: 0;
      }
    }
  }
}
</style>
