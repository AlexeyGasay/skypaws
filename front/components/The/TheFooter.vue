<template>
  <div class="the-footer">
    <div class="the-footer__credential">
      ООО "Небесные Лапочки" <br />
      ОГРН 1242600014645 <br />
      ИНН 2623034731 <br />
    </div>

    <ui-button
      class="the-footer__button"
      :size="isMobile ? 'm' : 'l'"
      type="filled"
    >
      посмотреть презентацию
    </ui-button>
  </div>
</template>

<script>
import UiInputRange from "@/components/Ui/UiInputRange.vue";
import { mapGetters } from "vuex";

export default {
  name: "TheFooter",
  components: { UiInputRange },

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

<style lang="scss">
.the-footer {
  @include container;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  // height: 130px;
  padding: 24px 40px;
  background-color: #180b2c;

  @include tablet-max {
    padding: 20px 30px;
  }

  @include mobile-max {
    flex-direction: column-reverse;
    padding: 10px 16px;
  }

  &__credential {
    color: $white;

    @include tablet-max {
      font-size: 14px;
    }

    @include mobile-max {
      margin-top: 10px;
    }
  }
}
</style>
