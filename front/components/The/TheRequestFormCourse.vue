<template>
  <form
    class="the-request-form-course-course"
    @submit.prevent
  >
    <div class="the-request-form-course-course__body">
      <div
        class="the-request-form-course-course__title"
        :style="{
          '--path-decor-1': `url(${require(`@/assets/images/handset-phone-${$route.params.slug}.svg`)})`,
          '--path-decor-2': `url(${require(`@/assets/images/phone-${$route.params.slug}.svg`)})`,
        }"
      >
        оставьте ваши контакты
      </div>

      <div class="the-request-form-course-course__item">
        <div class="the-request-form-course-course__item-name">
          Фамилия и Имя родителя
        </div>
        <ui-input
          v-model="name"
          placeholder="введите фамилию и имя"
          theme="white"
          class="the-request-form-course-course__item-input"
        />

        <div
          v-if="$v.name.$error"
          class="the-request-form-course-course__item-error"
        >
          Обязательное поле
        </div>
      </div>

      <div class="the-request-form-course-course__item">
        <div class="the-request-form-course-course__item-name">
          Номер телефона родителя
        </div>
        <ui-input
          v-model="phone"
          placeholder="+7(999) 999-99-99"
          type="tel"
          theme="white"
          class="the-request-form-course-course__item-input"
        />

        <div
          v-if="$v.phone.$error"
          class="the-request-form-course-course__item-error"
        >
          Обязательное поле
        </div>
      </div>

      <div class="the-request-form-course-course__item">
        <div class="the-request-form-course-course__item-name">
          Фамилия и Имя студента
        </div>
        <ui-input
          v-model="nameStudent"
          placeholder="введите фамилию и имя"
          theme="white"
          class="the-request-form-course-course__item-input"
        />

        <div
          v-if="$v.nameStudent.$error"
          class="the-request-form-course-course__item-error"
        >
          Обязательное поле
        </div>
      </div>

      <div class="the-request-form-course-course__item">
        <div class="the-request-form-course-course__item-name">Город</div>
        <ui-input
          v-model="city"
          placeholder="введите город"
          theme="white"
          class="the-request-form-course-course__item-input"
        />

        <div
          v-if="$v.city.$error"
          class="the-request-form-course-course__item-error"
        >
          Обязательное поле
        </div>
      </div>
    </div>

    <div
      class="the-request-form-course-course__footer"
      :style="{ '--accent': getData.accent }"
    >
      <ui-button
        class="the-request-form-course-course__footer-button"
        :size="isDesktop ? 'l' : 'm'"
        type="filled"
        hover-theme="black"
        :disabled="$v.$error"
        @click="send"
      >
        отправить
      </ui-button>

      <p class="the-request-form-course-course__footer-policy">
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
import { minLength, required } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TheRequestForm",

  data() {
    return {
      name: "",
      phone: "",
      nameStudent: "",
      city: "",
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

    nameStudent: {
      required,
    },

    city: {
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
        await this.$api.feedback.requestCallbackCourse({
          slug: this.$route.params.slug,
          name: this.name,
          phone: this.phone,
          nameStudent: this.nameStudent,
          city: this.city,
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
.the-request-form-course-course {
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
      background-image: var(--path-decor-1);
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
      background-image: var(--path-decor-2);
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
      background: var(--accent);
      &::after,
      &::before {
        opacity: 0;
      }
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

  .ui-input__label {
    border: 1px solid #572a73;

    &::before,
    &::after {
      opacity: 0;
    }
  }
}
</style>
