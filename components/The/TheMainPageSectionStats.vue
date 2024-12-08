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
          type="filled"
          size="xl"
          class="the-main-page-section-stats__info-button"
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
            на этапе переговоров: {{ scheduledNegotiations }}
          </div>

          <div class="the-main-page-section-stats__map-stats-item">
            запланировано открытий: {{ scheduledOpenings }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMainPageSectionStats",
  props: {
    scheduledNegotiations: {
      type: Number,
      required: false,
      default: 7,
    },

    scheduledOpenings: {
      type: Number,
      required: false,
      default: 2,
    },
  },
};
</script>

<style lang="scss">
.the-main-page-section-stats {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 40px 55px;
  }

  &__info {
    max-width: 440px;
    color: $white;
  }

  &__info-title {
    font-weight: 900;
    font-size: 40px;
    line-height: 135%;
    text-transform: uppercase;
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
    }
  }

  &__info-button {
    width: 100% !important;
    margin-top: 35px;
  }

  &__map {
  }

  &__map-img {
  }

  &__map-stats {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
    padding-right: 25px;
  }

  &__map-stats-item {
    color: #7033fd;
    font-weight: 900;
    font-size: 16px;
    line-height: 135%;

    &:first-child {
      color: #08a2ca;
    }

    &:not(&:first-child) {
      margin-left: 20px;
    }
  }
}
</style>
