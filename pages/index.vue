<template>
  <div class="main-page">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, recusandae.
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-page {
  @include container;
  padding-top: 24px;
  padding-bottom: 72px;

  @include tablet-max {
    padding-top: 16px;
    padding-bottom: 32px;
  }

  @include mobile-max {
    padding-top: 8px;
  }
}
</style>
