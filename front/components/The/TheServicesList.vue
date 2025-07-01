<template>
  <section class="the-services-list">
    <div class="the-services-list__wrapper">
      <img
        class="the-services-list__kv"
        :class="{
          'the-services-list__kv_fpv': $route.params.slug === 'fpv',
        }"
        :src="require(`@/assets/images/slug/${$route.params.slug}-list.png`)"
        alt="kv"
      />
      <div class="the-services-list__list-content">
        <div
          v-for="(item, idx) in list"
          :key="item"
          class="the-services-list__list-content-item"
        >
          <div
            class="the-services-list__list-content-item-num"
            :style="{ background: accent }"
          >
            {{ idx + 1 }}
          </div>
          <p
            class="the-services-list__list-content-item-text"
            v-html="item"
          />
        </div>
        <button
          :style="{ background: accent }"
          class="the-services-list__list-content-button"
        >
          посмотреть видео
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheServicesList",
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
.the-services-list {
  height: 100vh;

  &__wrapper {
    height: 100%;
    padding: 0 154px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__kv {
    width: 500px;
    height: 500px;
    position: relative;
    z-index: 2;

    &_fpv {
      animation: drone-fly 3s infinite linear;
    }
  }

  &__list-content {
    padding: 40px;
    border-radius: 10px;
    width: 566px;
    background: @white;

    &-item {
      display: flex;
      align-items: center;
      padding-bottom: 20px;

      &:not(:first-child) {
        border-top: 1px solid @black;
        padding-top: 20px;
      }

      &-num {
        width: 46px;
        height: 46px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        font-weight: 900;
        color: @white;
      }

      &-text {
        margin-left: 20px;
        font-size: 20px;
        color: @black;
        text-transform: uppercase;
        font-weight: 900;
      }
    }

    &-button {
      color: @white;
      border: none;
      margin-top: 10px;
      padding: 12px;
      width: 100%;
      border-radius: 10px;
      font-size: 24px;
      font-weight: 900;
      transition: transform 0.2s;
      text-transform: uppercase;

      &:hover {
        transform: scale(0.95);
      }
    }
  }
}

@keyframes drone-fly {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  50% {
    transform: translate(-30px, -30px) rotate(15deg);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}
</style>
