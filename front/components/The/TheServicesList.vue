<template>
  <section class="the-services-list">
    <teleport to="body">
      <div
        v-if="isShowVideo"
        class="video-modal"
        @click="handlerShowVideo"
      >
        <video
          src="/kv.mov"
          playsiline
          controls
          @click.stop
        />
      </div>
    </teleport>
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
          @click="handlerShowVideo"
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

  data() {
    return {
      isShowVideo: false,
    };
  },

  methods: {
    handlerShowVideo() {
      this.isShowVideo = !this.isShowVideo;
      document.querySelector("html, body").classList.toggle("scroll-lock");
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

    .tablet-max({
      flex-direction: column;
      justify-content: center
    });
  }

  &__kv {
    width: 500px;
    height: 500px;
    position: relative;
    z-index: 2;

    .tablet-max({
      width: 300px;
      height: 300px;
    });

    .mobile-max({
      width: 150px;
      height: 150px;
    });

    &_fpv {
      animation: drone-fly 3s infinite linear;
    }
  }

  &__list-content {
    padding: 40px;
    border-radius: 10px;
    width: 566px;
    background: @white;

    .tablet-max({
      width: 500px;
      padding: 30px
    });

    .mobile-max({
      width: 340px;
      padding: 20px 10px
    });

    &-item {
      display: flex;
      align-items: center;
      padding-bottom: 20px;

      .mobile-max({
          padding-bottom: 10px;
        });

      &:not(:first-child) {
        border-top: 1px solid @black;
        padding-top: 20px;

        .mobile-max({
          padding-top: 10px;
        });
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

        .tablet-max({
          font-size: 30px;
          width: 42px;
          height: 42px;
        });

        .mobile-max({
          font-size: 24px;
          width: 34px;
          height: 34px;
        });
      }

      &-text {
        margin-left: 20px;
        font-size: 20px;
        color: @black;
        text-transform: uppercase;
        font-weight: 900;

        .tablet-max({
          margin-left: 15px;
          font-size: 18px;
        });

        .mobile-max({
          font-size: 13px;
        });
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

      .mobile-max({
        font-size: 16px;
        padding: 9px;
      });

      &:hover {
        transform: scale(0.95);
      }
    }
  }
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: @z-4;
  background: rgba(#000, 0.5);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    height: 70vh;

    .tablet-max({
      height: auto;
      width: 90%;
    });
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
