<template>
  <div class="app-card-ecosystem">
    <div class="app-card-ecosystem__wrapper">
      <h3 class="app-card-ecosystem__title">{{ title }}</h3>
      <img
        class="app-card-ecosystem__icon"
        :src="require(`@/assets/images/ecosystem/${icon}.gif`)"
      />

      <div class="app-card-ecosystem__list">
        <div
          v-for="text in list"
          :key="text"
          class="app-card-ecosystem__item"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCardEcosystem",
  props: {
    title: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less">
.app-card-ecosystem {
  position: relative;
  z-index: 1;
  width: 426px;
  height: 302px;
  padding: 20px 0 20px 20px;
  border-radius: 10px;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    border: 3px solid @white;
    border-radius: 10px;
    content: "";
    pointer-events: none;
  }

  .mobile-max({
    width: 345px;
    height: 250px;
    padding: 13px 16px;
  });

  .hover({
    background: linear-gradient(90deg, #03a7c8 0%, #732fff 50%, #ac1f51 100%);

    &::before {
      opacity: 0;
    }
  });

  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__title {
    max-width: 277px;
    color: @white;
    font-weight: 900;
    font-size: 24px;
    text-transform: uppercase;

    .mobile-max({
      max-width: 200px;
      font-size: 18px;
    });
  }

  &__icon {
    position: absolute;
    top: -40px;
    right: 16px;
    width: 100px;
    object-fit: cover;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: auto;
  }

  &__item {
    padding: 10px;
    color: @white;
    font-weight: 900;
    font-size: 14px;
    border: 2px solid @white;
    border-radius: 8px;

    .mobile-max({
      padding: 6px;
      font-size: 11px;
    });
  }
}
</style>
