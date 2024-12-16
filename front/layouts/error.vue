<template>
  <div class="error-layout">
    {{ error }}
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

<style lang="less">
.error-layout {
  .container();
  padding-bottom: 72px;

  .tablet-max({
    padding-bottom: 32px;
  });

  .mobile-max({
    padding-bottom: 24px;
  });
}
</style>
