<template>
  <div class="the-footer">
    <div class="the-footer__credential">
      ООО "Небесные Лапочки" <br />
      ОГРН 1242600014645 <br />
      ИНН 2623034731 <br />
    </div>
    <!-- <ui-button
      class="the-footer__button"
      :size="isMobile ? 'm' : 'l'"
      type="filled"
    >
      посмотреть презентацию
    </ui-button> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheFooter",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      isMobile: "mqHelper/isMobile",
    }),
  },
};
</script>

<style lang="less">
.the-footer {
  .container();
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  // height: 130px;
  padding: 24px 40px;
  background-color: #180b2c;

  .tablet-max({
    padding: 20px 30px;
  });

  .mobile-max({
    flex-direction: column-reverse;
    padding: 16px 16px;
  });

  &__credential {
    color: @white;

    .tablet-max({
      font-size: 14px;
    });

    .mobile-max({
      text-align: center;
    });
  }
}
</style>
