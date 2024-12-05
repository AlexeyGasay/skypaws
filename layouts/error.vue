<template>
  <div class="error-layout">
    Очибка
  </div>
</template>

<script>

export default {
  name: "",
  props: ["error"],

  data() {
    return {};
  },

  mounted() {
    console.log(this.error);
  },
};
</script>

<style lang="scss">
.error-layout {
  @include container;
  padding-bottom: 72px;

  @include tablet-max {
    padding-bottom: 32px;
  }

  @include mobile-max {
    padding-bottom: 24px;
  }
}
</style>
