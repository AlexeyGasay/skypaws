<template>
  <form
    class="the-request-form"
    @submit.prevent
  >
    <div class="the-request-form__body">
      <div class="the-request-form__title">
        {{ getData.title || "откройте бизнес вместе со skypaws" }}
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Имя</div>
        <ui-input
          v-model="name"
          placeholder="введите имя"
          theme="white"
          class="the-request-form__item-input"
        />

        <div
          v-if="$v.name.$error"
          class="the-request-form__item-error"
        >
          Обязательное поле
        </div>
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Номер телефона</div>
        <ui-input
          v-model="phone"
          placeholder="+7(999) 999-99-99"
          type="tel"
          theme="white"
          class="the-request-form__item-input"
        />

        <div
          v-if="$v.phone.$error"
          class="the-request-form__item-error"
        >
          Обязательное поле
        </div>
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Дата встречи</div>
        <ui-date-picker
          v-model="date"
          :date="date"
          theme="white"
          class="the-request-form__item-input"
        />

        <div
          v-if="$v.date.$error"
          class="the-request-form__item-error"
        >
          Обязательное поле
        </div>
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Время встречи</div>

        <ui-time-picker
          v-model="time"
          class="the-request-form__item-input"
          :time="time"
          theme="white"
          placeholder="нажмите, чтобы выбрать время"
        />

        <div
          v-if="$v.time.$error"
          class="the-request-form__item-error"
        >
          Обязательное поле
        </div>
      </div>
    </div>

    <div class="the-request-form__footer">
      <ui-button
        class="the-request-form__footer-button"
        :size="isDesktop ? 'l' : 'm'"
        type="filled"
        hover-theme="black"
        :disabled="$v.$error"
        @click="send"
      >
        отправить
      </ui-button>

      <p class="the-request-form__footer-policy">
        Нажимая на&nbsp;кнопку &laquo;Отправить&raquo;, Вы&nbsp;даете согласие
        на&nbsp;обработку персональных данных. Подробнее об&nbsp;обработке
        данных в&nbsp;<nuxt-link
          to="/confidentiality"
          target="_blank"
          >Политике</nuxt-link
        >.
      </p>
    </div>
  </form>
</template>

<script>
import UiTimePicker from "~/components/Ui/UiTimePicker.vue";
import UiDatePicker from "~/components/Ui/UiDatePicker.vue";
import { minLength, required } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TheRequestForm",
  components: { UiDatePicker, UiTimePicker },

  data() {
    return {
      name: "",
      phone: "",
      date: "",
      time: "",
    };
  },

  computed: {
    ...mapGetters({
      isDesktop: "mqHelper/isDesktop",
      getData: "modals/getData",
    }),
  },

  validations: {
    name: {
      required,
    },

    phone: {
      required,
      minLength: minLength(11),
    },

    date: {
      required,
    },

    time: {
      required,
    },
  },

  methods: {
    ...mapMutations({
      SHOW_MODAL: "modals/SHOW_MODAL",
    }),

    async send() {
      this.$v.$touch();

      if (this.$v.$error) return;

      try {
        await this.$api.feedback.requestCallback({
          name: this.name,
          phone: this.phone,
          time: this.$dayjs(this.time).format("HH:mm"),
          date: this.$dayjs(this.date).format("DD MMMM YYYY"),
        });

        this.SHOW_MODAL(this.$MODAL_NAMES.RESULT_MODAL);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="less">
.the-request-form {
  padding: 30px 58px 30px;

  .mobile-max({
    padding: 30px;
  });

  &__body {
  }

  &__title {
    position: relative;
    margin-bottom: 20px;
    font-weight: 900;
    font-size: 24px;
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;

    .tablet-max({
      font-size: 22px;
    });

    &::before {
      .square(46px);
      position: absolute;
      top: 0;
      left: -14px;
      display: block;
      background-image: url("@/assets/images/handset-phone-gradient.svg");
      background-size: cover;
      transform: translate(-50%, -50%);
      content: "";

      .tablet-max({
        left: 0px;
      });
    }

    &::after {
      .square(46px);
      position: absolute;
      top: 100%;
      right: -18%;
      display: block;
      background-image: url("@/assets/images/phone-gradient.svg");
      background-size: cover;
      transform: translate(-50%, -50%);
      content: "";

      .tablet-max({
        right: -5%;
      });

      .mobile-max({
        right: -15%;
      });
    }
  }

  &__item {
    position: relative;
    z-index: 1;
    &:not(&:last-child) {
      margin-bottom: 10px;
    }
  }

  &__item-name {
    font-size: 20px;
    line-height: 130%;

    .mobile-max({
      font-size: 14px;
    });
  }

  &__item-input {
    margin-top: 3px;
  }

  &__item-error {
    color: @red;
    font-size: 12px;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: -12px;

    .mobile-max({
      font-size: 10px;
    });
  }

  &__footer {
    margin-top: 30px;

    button {
      padding: 12px 18px !important;
    }
  }

  &__footer-button {
    width: 210px !important;
    margin: 0 auto;
  }

  &__footer-policy {
    margin-top: 20px;
    font-weight: 500;
    font-size: 10px;
    line-height: 130%;
    text-align: center;

    a {
      color: initial;
    }
  }
}
</style>
