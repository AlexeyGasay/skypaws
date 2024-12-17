<template>
  <div class="the-calc-form">
    <div class="the-calc-form__inner">
      <div class="the-calc-form__col">
        <div class="the-calc-form__title">
          способ приобретения оборудования
          <div class="the-calc-form__title-tooltip">
            <ui-tooltip>
              <template #content>
                Выбирая аренду оборудования под выкуп<br />
                Вы платите фиксированный ежемесячный<br />
                платеж в течение года<br />
                выбирая выкуп оборудования <br />
                Вы сможете приобрести его, <br />
                заплатив полную стоимость<br />
              </template>

              <div class="the-calc-form__title-tooltip-icon">
                <svg-icon name="tooltip-icon" />
              </div>
            </ui-tooltip>
          </div>
        </div>

        <div class="the-calc-form__handlers">
          <ui-button
            :type="isRent ? 'filled' : 'outlined'"
            :size="isMobile ? 's' : 'm'"
            class="the-calc-form__handlers-button"
            no-hover
            @click="methodOfPurchasing = PURCHASING_METHODS.RENT.value"
          >
            аренда оборудования под выкуп
          </ui-button>

          <ui-button
            type="filled"
            :size="isMobile ? 's' : 'm'"
            :type="isPurchase ? 'filled' : 'outlined'"
            class="the-calc-form__handlers-button"
            no-hover
            @click="methodOfPurchasing = PURCHASING_METHODS.PURCHASE.value"
          >
            выкуп оборудования
          </ui-button>
        </div>

        <div class="the-calc-form__title the-calc-form__title_mobile">
          количество рабочих мест для студентов
          <div class="the-calc-form__title-tooltip">
            <ui-tooltip>
              <template #content>
                Уже включено:<br />
                компьютер рекомендованной конфигурации<br />
                стол компьютерный<br />
                стул<br />
                FPV дрон<br />
                аппаратура для управления
              </template>

              <div class="the-calc-form__title-tooltip-icon">
                <svg-icon name="tooltip-icon" />
              </div>
            </ui-tooltip>
          </div>
        </div>

        <div class="the-calc-form__slider_mobile">
          <ui-input-range
            v-model="count"
            :step="count"
            :steps="1"
            :min="5"
            :max="10"
          />
        </div>

        <div
          class="the-calc-form__packages-list the-calc-form__packages-list_mobile"
        >
          <div class="the-calc-form__packages-list-item">
            <ui-radio-button
              v-model="selectedPackage"
              :value="PACKAGES.PRO.value"
            >
              PREMIUM пакет услуг
            </ui-radio-button>
          </div>

          <div class="the-calc-form__packages-list-item">
            <ui-radio-button
              v-model="selectedPackage"
              :value="PACKAGES.BASE.value"
            >
              базовый пакет услуг
            </ui-radio-button>
          </div>
        </div>

        <div class="the-calc-form__form">
          <div class="the-calc-form__form-item">
            <div class="the-calc-form__form-item-name">Имя</div>

            <ui-input
              v-model="name"
              class="the-calc-form__form-item-input"
              placeholder="введите имя"
              theme="transparent"
            />

            <div
              v-if="$v.name.$error"
              class="the-calc-form__form-item-error"
            >
              Обязательное поле
            </div>
          </div>
          <div class="the-calc-form__form-item">
            <div class="the-calc-form__form-item-name">Номер телефона</div>

            <ui-input
              v-model="phone"
              class="the-calc-form__form-item-input"
              placeholder="+7(999) 999-99-99"
              type="tel"
              theme="transparent"
            />

            <div
              v-if="$v.phone.$error"
              class="the-calc-form__form-item-error"
            >
              Обязательное поле
            </div>
          </div>

          <div class="the-calc-form__form-item">
            <div class="the-calc-form__form-item-name">Дата встречи</div>

            <ui-date-picker
              v-model="date"
              class="the-calc-form__form-item-input"
              :date="date"
            />

            <div
              v-if="$v.date.$error"
              class="the-calc-form__form-item-error"
            >
              Обязательное поле
            </div>
          </div>

          <div class="the-calc-form__form-item">
            <div class="the-calc-form__form-item-name">Время встречи</div>

            <ui-time-picker
              v-model="time"
              class="the-calc-form__form-item-input"
              :time="time"
            />

            <div
              v-if="$v.time.$error"
              class="the-calc-form__form-item-error"
            >
              Обязательное поле
            </div>
          </div>
        </div>
      </div>

      <div class="the-calc-form__col">
        <div class="the-calc-form__title the-calc-form__title_desktop">
          количество рабочих мест для студентов
          <div class="the-calc-form__title-tooltip">
            <ui-tooltip>
              <template #content>
                Уже включено:<br />
                компьютер рекомендованной конфигурации<br />
                стол компьютерный<br />
                стул<br />
                FPV дрон<br />
                аппаратура для управления
              </template>

              <div class="the-calc-form__title-tooltip-icon">
                <svg-icon name="tooltip-icon" />
              </div>
            </ui-tooltip>
          </div>
        </div>

        <div class="the-calc-form__slider">
          <ui-input-range
            v-model="count"
            :step="count"
            :steps="1"
            :min="5"
            :max="10"
          />
        </div>

        <div class="the-calc-form__packages">
          <div class="the-calc-form__packages-list">
            <div class="the-calc-form__packages-list-item">
              <ui-radio-button
                v-model="selectedPackage"
                :value="PACKAGES.BASE.value"
              >
                базовый пакет услуг
              </ui-radio-button>
            </div>

            <div class="the-calc-form__packages-list-item">
              <ui-radio-button
                v-model="selectedPackage"
                :value="PACKAGES.PRO.value"
              >
                PREMIUM пакет услуг
              </ui-radio-button>
            </div>
          </div>

          <div
            v-if="selectedPackage === 'BASE'"
            class="the-calc-form__packages-info"
          >
            Что входит в базовый пакет?<br />
            -трасса для полетов<br />
            -рекламные материалы<br />
            -демонстационное оборудование<br />
            -все преимущества экосистемы SKYPAWS<br />
          </div>
          <div
            v-else
            class="the-calc-form__packages-info"
          >
            Что входит в PREMIUM пакет?<br />
            -индивидуальные права на город<br />
            -3 месяца без роялти<br />
            -открытие до 3-х площадок<br />
            -выезд наших специалистов к Вам в город<br />
            -все преимущества базового пакета <br />
          </div>

          <div class="the-calc-form__packages-sum">
            <div class="the-calc-form__packages-sum-cross">
              старт от
              <span class="the-calc-form__packages-sum-cross-price">
                {{ roundNumber(sum / 0.7) | formatNumber }} &#8381;
              </span>
            </div>

            <div class="the-calc-form__packages-sum-real">
              {{ roundNumber(sum) | formatNumber }} &#8381;
            </div>

            <div
              v-if="methodOfPurchasing === PURCHASING_METHODS.PURCHASE.value"
              class="the-calc-form__packages-sum-equipment-purchase"
            >
              + стоимость оборудования ≈
              {{ (count * studentPrice) | formatNumber }} &#8381;
            </div>
          </div>

          <ui-button
            class="the-calc-form__packages-button"
            :size="'m'"
            type="filled"
            :disabled="$v.$error"
            @click="send"
          >
            узнать точную стоимость
          </ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { minLength, required } from "vuelidate/lib/validators";
import UiTooltip from "@/components/Ui/UiTooltip.vue";
import UiTimePicker from "@/components/Ui/UiTimePicker.vue";
import UiDatePicker from "@/components/Ui/UiDatePicker.vue";
import UiInputRange from "@/components/Ui/UiInputRange.vue";
import UiRadioButton from "@/components/Ui/UiRadioButton.vue";
import { priceFormatting } from "@/tools";

export default {
  name: "TheCalcForm",
  components: {
    UiRadioButton,
    UiInputRange,
    UiDatePicker,
    UiTimePicker,
    UiTooltip,
  },

  data() {
    return {
      methodOfPurchasing: "RENT",
      PURCHASING_METHODS: {
        RENT: {
          name: "Аренда оборудования",
          value: "RENT",
        },

        PURCHASE: {
          name: "Выкуп оборудования",
          value: "PURCHASE",
        },
      },

      selectedPackage: "BASE",
      PACKAGES: {
        PRO: {
          name: "PREMIUM пакет услуг",
          value: "PRO",
        },

        BASE: {
          name: "Базовый пакет услуг",
          value: "BASE",
        },
      },

      studentPrice: 80000,
      name: "",
      phone: "",
      date: "",
      time: "",
      count: 5,
    };
  },

  computed: {
    ...mapGetters({
      isMobile: "mqHelper/isMobile",
      isDesktop: "mqHelper/isDesktop",
    }),

    sum() {
      const rentSuffix =
        this.selectedPackage === this.PACKAGES.BASE.value ? 199000 : 599000;

      if (this.methodOfPurchasing === this.PURCHASING_METHODS.RENT.value) {
        return this.count * this.studentPrice + rentSuffix;
      }

      return this.selectedPackage === this.PACKAGES.BASE.value
        ? 599000
        : 999000;
    },

    isRent() {
      return this.methodOfPurchasing === this.PURCHASING_METHODS.RENT.value;
    },

    isPurchase() {
      return this.methodOfPurchasing === this.PURCHASING_METHODS.PURCHASE.value;
    },
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

    priceFormatting,

    roundNumber(num) {
      return Math.round(num / 1000) * 1000;
    },

    async send() {
      this.$v.$touch();

      if (this.$v.$error) return;

      try {
        await this.$api.feedback.requestCallback({
          name: this.name,
          phone: this.phone,
          package: this.PACKAGES[this.selectedPackage].name,
          methodOfPurchasing:
            this.PURCHASING_METHODS[this.methodOfPurchasing].name,
          students: this.count,
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
.the-calc-form {
  width: 100%;
  height: 100%;

  &__inner {
    display: flex;
    align-items: stretch;
    padding: 38px;

    .tablet-max({
      flex-direction: column;
      align-items: center;
      padding: 10px 30px 30px;
    });

    .mobile-max({
      padding: 10px;
    });
  }

  &__col {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 50%;

    .tablet-max({
      width: 100%;
    });

    &:not(&:first-child) {
      margin-left: 30px;

      .mobile-max({
        margin: 0 0 10px;

      });
    }

    .mobile-max({
      font-size: 14px;
    });
  }

  &__title {
    display: flex;
    align-items: center;
    color: @white;
    font-weight: 900;
    font-size: 20px;
    line-height: 130%;
    text-transform: uppercase;

    .tablet-max ({
      width: max-content !important;
    });;

    .mobile-max({
      font-size: 14px;
      width: 70% !important;
    });

    &_desktop {
      .tablet-max({
        display: none;

      });
    }

    &_mobile {
      display: none;

      .mobile-max({
        display: flex;
      });
    }
  }

  &__title-tooltip {
    margin-left: 20px;
  }

  &__title-tooltip-icon {
    .square(28px);
  }

  &__handlers {
    margin-top: 20px;

    .tablet-max({
      margin: 20px 0;
    });
  }

  &__handlers-button {
    width: 100% !important;

    &:not(&:first-child) {
      margin-top: 20px;

      .tablet-max({
        margin-top: 20px;
      });

      .mobile-max({
        margin-top: 10px;

      });
    }
  }

  &__form {
    margin-top: 20px;

    .el-input__inner {
      color: #c6c6c6 !important;
      opacity: 1; /* Firefox */
      font-family: Nunito !important;

      &::placeholder {
        color: #c6c6c6 !important;
        opacity: 1; /* Firefox */
        font-family: Nunito !important;
      }
    }
  }

  &__form-item {
    &:not(&:first-child) {
      margin-top: 20px;

      .mobile-max({
        margin-top: 10px;
      });
    }
  }

  &__form-item-name {
    color: @white;
    font-weight: 900;
    font-size: 20px;
    line-height: 130%;
    text-transform: uppercase;

    .mobile-max({
      font-size: 13px;
    });
  }

  &__packages-sum-equipment-purchase {
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 2;

    .tablet-max ({
      bottom: -8px;
    });;
  }

  &__form-item-input {
    margin-top: 10px;

    .mobile-max({
      margin-top: 10px;
    });

    input {
      height: 60px !important;
      color: #c6c6c6;

      .mobile-max({
        height: 35px !important;
      });
    }
  }

  &__form-item-error {
    margin-top: 10px;
    color: @red;
    font-size: 20px;

    .mobile-max({
      font-size: 16px;
    });
  }

  &__slider {
    margin-top: 20px;

    .tablet-max({
      display: none;
    });

    &_mobile {
      display: none;

      .tablet-max({
        display: block;
        padding: 0 8px;
      });
    }
  }

  &__packages {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 40px;
    color: @white;

    .tablet-max({
      margin-top: 20px;
    });
  }

  &__packages-list {
    display: flex;
    align-items: center;
    color: @white;

    .tablet-max({
      display: none;
    });

    &_mobile {
      display: none;

      .tablet-max({
        display: flex;
        margin-top: 20px;
      });

      .mobile-max({
        flex-direction: column-reverse;
        align-items: flex-start;
        width: 100%;
      });
    }
  }

  &__packages-list-item {
    font-weight: 900;
    font-size: 20px;
    line-height: 170%;
    text-transform: uppercase;

    &:not(&:first-child) {
      margin-left: 20px;

      .mobile-max({
        margin-left: 0;
      });
    }

    .tablet-max({
      width: 100%;
    });
  }

  &__packages-info {
    margin-top: 30px;

    .tablet-max({
      display: none;
    });
  }

  &__packages-sum {
    margin-top: auto;

    position: relative;
    z-index: 1;

    .tablet-max({
      margin: 0;
    });
  }

  &__packages-sum-cross {
    font-weight: 500;
    font-size: 48px;
    line-height: 130%;

    .tablet-max({
      font-size: 40px;
    });

    .mobile-max({
      font-size: 30px;
    });
  }

  &__packages-sum-cross-price {
    position: relative;
    display: inline-block;
    width: max-content;
    font-weight: 900;

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 100%;
      height: 3px;
      background: linear-gradient(
        90deg,
        #00d9ff 4%,
        #732fff 54.95%,
        #ac1f51 105.9%
      );
      border-radius: 6px;
      transform: rotate(9deg) translate(0%, -50%);
      content: "";
    }
  }

  &__packages-sum-real {
    font-weight: 900;
    font-size: 96px;
    line-height: 130%;

    .tablet-max({
      font-size: 85px;
    });

    .mobile-max({
      font-size: 48px;
    });
  }

  &__packages-button {
    margin-top: 25px;

    .tablet-max({
      width: 100% !important;
      margin-top: 20px;
    });
  }
}
</style>
