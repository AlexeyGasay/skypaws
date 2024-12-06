<template>
  <form class="app-feedback-form">
    <div class="app-feedback-form__body">
      <div class="app-feedback-form__item">
        <div class="app-feedback-form__item-name">Имя</div>
        <ui-input
          v-model="name"
          placeholder="введите имя"
          class="app-feedback-form__item-input"
        />
      </div>

      <div class="app-feedback-form__item">
        <div class="app-feedback-form__item-name">Номер телефона</div>
        <ui-input
          v-model="phone"
          placeholder="+7(999) 999-99-99"
          type="tel"
          class="app-feedback-form__item-input"
        />
      </div>

      <div class="app-feedback-form__item">
        <div class="app-feedback-form__item-name">Дата встречи</div>
        <ui-date-picker class="app-feedback-form__item-input" />
      </div>

      <div class="app-feedback-form__item">
        <div class="app-feedback-form__item-name">Время встречи</div>
        <ui-time-picker
          v-model="time"
          class="app-feedback-form__item-input"
          :time="time"
          placeholder="нажмите, чтобы выбрать время"
        />
      </div>
    </div>
  </form>
</template>

<script>
import UiTimePicker from "@/components/Ui/UiTimePicker.vue";
import UiDatePicker from "@/components/Ui/UiDatePicker.vue";

export default {
  name: "AppFeedbackForm",
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
.app-feedback-form {
  &__body {
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
}
</style>
