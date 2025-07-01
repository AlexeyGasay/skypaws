<template>
  <section class="the-services-hero">
    <div class="the-services-hero__wrapper">
      <div class="the-services-hero__info">
        <h1
          class="the-services-hero__title"
          v-html="title"
        />
        <div class="the-services-hero__texts">
          <p
            v-for="text in texts"
            :key="text"
            class="the-services-hero__text"
            :style="{ color: accent }"
            v-html="text"
          />
        </div>
      </div>
      <img
        :src="require(`@/assets/images/slug/${slug}.png`)"
        :alt="title"
        class="the-services-hero__kv"
      />
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "TheServicesHero",
  props: {
    title: {
      type: String,
      required: true,
    },

    texts: {
      type: Array,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    accent: {
      type: String,
      required: true,
    },
  },

  mounted() {
    gsap.set(".the-services-hero__text", {
      x: "-50rem",
    });

    const tlChangeQuote = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tlChangeQuote.to(
      this.$refs.quote4,
      {
        opacity: 0,
        filter: "blur(12px)",
        x: "50rem",
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.set(".the-services-hero__text:nth-child(3)", {
      x: "-50rem",
      opacity: 1,
      filter: "blur(0)",
    });
    tlChangeQuote.to(
      ".the-services-hero__text:nth-child(1)",
      {
        x: 0,
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.to(
      ".the-services-hero__text:nth-child(1)",
      {
        opacity: 0,
        filter: "blur(12px)",
        x: "50rem",
        duration: 0.6,
        delay: 6,
      },
      "<",
    );
    tlChangeQuote.to(
      ".the-services-hero__text:nth-child(2)",
      {
        x: 0,
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.to(
      ".the-services-hero__text:nth-child(2)",
      {
        opacity: 0,
        filter: "blur(12px)",
        x: "50rem",
        duration: 0.6,
        delay: 6,
      },
      "<",
    );
    tlChangeQuote.to(
      ".the-services-hero__text:nth-child(3)",
      {
        x: 0,
        duration: 0.6,
      },
      "<",
    );
    tlChangeQuote.to(
      ".the-services-hero__text:nth-child(3)",
      {
        opacity: 0,
        filter: "blur(12px)",
        x: "50rem",
        duration: 0.6,
        delay: 6,
      },
      "<",
    );
  },
};
</script>

<style lang="less">
.the-services-hero {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }

  &__kv {
    max-height: 600px;
    height: 80vh;
    object-fit: cover;
    pointer-events: none;
  }

  &__title {
    font-size: 64px;
    color: @white;
    max-width: 830px;
    text-transform: uppercase;
    font-weight: 900;
  }

  &__texts {
    margin-top: 10px;
    position: relative;
    z-index: 1;
    max-width: 770px;
  }

  &__text {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    font-size: 40px;
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>
