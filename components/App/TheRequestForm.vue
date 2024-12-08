<template>
  <form class="the-request-form">
    <div class="the-request-form__body">
      <div class="the-request-form__title">
        откройте бизнес вместе со skypaws
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Имя</div>
        <ui-input
          v-model="name"
          placeholder="введите имя"
          class="the-request-form__item-input"
        />
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Номер телефона</div>
        <ui-input
          v-model="phone"
          placeholder="+7(999) 999-99-99"
          type="tel"
          class="the-request-form__item-input"
        />
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Дата встречи</div>
        <ui-date-picker class="the-request-form__item-input" />
      </div>

      <div class="the-request-form__item">
        <div class="the-request-form__item-name">Время встречи</div>
        <ui-time-picker
          v-model="time"
          class="the-request-form__item-input"
          :time="time"
          placeholder="нажмите, чтобы выбрать время"
        />
      </div>
    </div>

    <div class="the-request-form__footer">
      <ui-button
        class="the-request-form__footer-button"
        size="l"
        type="filled"
        hover-theme="black"
      >
        отправить
      </ui-button>

      <p class="the-request-form__footer-policy">
        Нажимая на&nbsp;кнопку &laquo;Отправить&raquo;, Вы&nbsp;даете согласие
        на&nbsp;обработку персональных данных. Подробнее об&nbsp;обработке
        данных в&nbsp;Политике.
      </p>
    </div>
  </form>
</template>

<script>
import UiTimePicker from "@/components/Ui/UiTimePicker.vue";
import UiDatePicker from "@/components/Ui/UiDatePicker.vue";

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
};
</script>

<style lang="scss">
.the-request-form {
  padding: 40px 58px 30px;
  overflow: hidden;

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

    &::before {
      @include square(46px);
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background-image: url("@/assets/images/handset-phone-gradient.svg");
      background-size: cover;
      transform: translate(-50%, -50%);
      content: "";
    }

    &::after {
      @include square(46px);
      position: absolute;
      top: 100%;
      right: -18%;
      display: block;
      background-image: url("@/assets/images/phone-gradient.svg");
      background-size: cover;
      transform: translate(-50%, -50%);
      content: "";
    }
  }

  &__item {
    &:not(&:last-child) {
      margin-bottom: 10px;
    }
  }

  &__item-name {
    font-size: 20px;
    line-height: 130%;
  }

  &__item-input {
    margin-top: 3px;
  }

  &__footer {
    margin-top: 30px;
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
  }
}
</style>
