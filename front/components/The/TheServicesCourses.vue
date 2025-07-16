<template>
  <section class="the-services-courses">
    <div class="the-services-courses__wrapper">
      <nuxt-link
        v-for="item in list"
        :key="item.title"
        :to="item.link"
        class="the-services-courses__item"
      >
        <img
          :src="item.img"
          alt="kv"
          class="the-services-courses__item-img"
        />
        <h4
          class="the-services-courses__item-title"
          :style="{ color: accent }"
          v-html="item.title"
        />
        <p
          class="the-services-courses__item-text"
          v-html="item.text"
        />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheServicesCourses",
  props: {
    list: {
      type: Array,
      required: true,
    },

    accent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less">
.the-services-courses {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 112px;

  .tablet-max({
    padding: 0 96px;
  });

  .mobile-max({
    padding: 0 16px;
  });

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    .tablet-max({
      flex-direction: column
    });
  }

  &__item {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    .tablet-max({
      &:not(:first-child) {
        margin-top: 50px;
      }
    });

    .mobile-max({
      &:not(:first-child) {
        margin-top: 30px;
      }
    });

    &-title {
      font-weight: 900;
      font-size: 48px;
      text-transform: uppercase;

      .mobile-max({
        font-size: 28px;
      });
    }

    &-text {
      font-weight: 900;
      font-size: 36px;
      color: @white;
      text-align: center;
      text-transform: uppercase;

      .mobile-max({
        font-size: 20px;
      });
    }

    &-img {
      height: 170px;
      margin-bottom: 12px;

      .tablet-max({
        height: 140px;
      });

      .mobile-max({
        height: 106px;
      });
    }
  }
}
</style>
