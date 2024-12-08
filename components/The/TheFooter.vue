<template>
  <div class="the-footer">
    <div class="the-footer__credential">
      ООО "Небесные Лапочки" <br />
      ОГРН 1242600014645 <br />
      ИНН 2623034731 <br />
    </div>

    <ui-button
      class="the-footer__button"
      size="l"
      type="filled"
    >
      посмотреть презентацию
    </ui-button>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss">
.the-footer {
  @include container;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  padding: 24px 40px;
  background-color: #180b2c;

  &__credential {
    color: $white;
  }
}
</style>
