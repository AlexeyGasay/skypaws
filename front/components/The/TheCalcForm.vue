<template>
  <div class="the-calc-form">
    <div class="the-calc-form__inner">
      <div class="the-calc-form__col">
        <div class="the-calc-form__title">
          способ приобретения оборудования
          <div
            class="the-calc-form__title-tooltip"
            @mouseover="purchaseVisible = true"
            @click="purchaseVisible = true"
            @mouseleave="purchaseVisible = false"
          >
            <div class="the-calc-form__title-tooltip-icon" />
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
          <div
            class="the-calc-form__title-tooltip"
            @click="countVisible = true"
            @mouseleave="countVisible = false"
          >
            <div class="the-calc-form__title-tooltip-icon" />
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
              :value="PACKAGES.BASE.value"
            >
              <i>базовый</i> пакет услуг
            </ui-radio-button>
          </div>

          <div class="the-calc-form__packages-list-item">
            <ui-radio-button
              v-model="selectedPackage"
              :value="PACKAGES.PRO.value"
            >
              <i>PREMIUM</i> пакет услуг
            </ui-radio-button>
          </div>
        </div>

        <template>
          <div
            v-if="selectedPackage === 'BASE' && !shouldHidePackagesInfo"
            class="the-calc-form__packages-info the-calc-form__packages-info_mobile"
          >
            <h4>Что входит в базовый пакет?</h4>
            <ul>
              <li>трасса для полетов</li>
              <li>рекламные материалы</li>
              <li>демонстационное оборудование</li>
              <li>все преимущества экосистемы SKYPAWS</li>
            </ul>
          </div>
          <div
            v-else-if="selectedPackage === 'PRO' && !shouldHidePackagesInfo"
            class="the-calc-form__packages-info the-calc-form__packages-info_mobile"
          >
            <h4>Что входит в PREMIUM пакет?</h4>
            <ul>
              <li>индивидуальные права на город</li>
              <li>3 месяца без роялти</li>
              <li>открытие до 3-х площадок</li>
              <li>выезд наших специалистов к Вам в город</li>
              <li>все преимущества базового пакета</li>
            </ul>
          </div>
        </template>

        <div
          class="the-calc-form__packages-sum the-calc-form__packages-sum_mobile"
        >
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
          <div
            class="the-calc-form__title-tooltip"
            @mouseover="countVisible = true"
            @mouseleave="countVisible = false"
          >
            <div class="the-calc-form__title-tooltip-icon" />
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
                <i>базовый</i> пакет услуг
              </ui-radio-button>
            </div>

            <div class="the-calc-form__packages-list-item">
              <ui-radio-button
                v-model="selectedPackage"
                :value="PACKAGES.PRO.value"
              >
                <i>PREMIUM</i> пакет услуг
              </ui-radio-button>
            </div>
          </div>

          <template>
            <div
              v-if="selectedPackage === 'BASE'"
              class="the-calc-form__packages-info the-calc-form__packages-info_desktop"
            >
              <h4>Что входит в базовый пакет?</h4>
              <ul>
                <li>трасса для полетов</li>
                <li>рекламные материалы</li>
                <li>демонстационное оборудование</li>
                <li>все преимущества экосистемы SKYPAWS</li>
              </ul>
            </div>
            <div
              v-else
              class="the-calc-form__packages-info the-calc-form__packages-info_desktop"
            >
              <h4>Что входит в PREMIUM пакет?</h4>
              <ul>
                <li>индивидуальные права на город</li>
                <li>3 месяца без роялти</li>
                <li>открытие до 3-х площадок</li>
                <li>выезд наших специалистов к Вам в город</li>
                <li>все преимущества базового пакета</li>
              </ul>
            </div>
          </template>

          <div
            class="the-calc-form__packages-sum the-calc-form__packages-sum_desktop"
          >
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

      <div
        class="the-calc-form__purchase-info"
        :class="
          bem('the-calc-form__tooltip-data', { visible: purchaseVisible })
        "
      >
        <ul>
          <li>
            выбирая аренду
            <strong>оборудования под выкуп</strong>

            <span>
              Вы&nbsp;платите фиксированный ежемесячный платеж в&nbsp;течение
              года
            </span>
          </li>

          <li>
            выбирая <strong>выкуп оборудования</strong>
            <span> Вы сможете приобрести его, заплатив полную стоимость </span>
          </li>
        </ul>
      </div>

      <div
        class="the-calc-form__count-info"
        :class="bem('the-calc-form__tooltip-data', { visible: countVisible })"
        @click="countVisible = false"
      >
        <h4>Уже включено:</h4>

        <ul>
          <li>компьютер рекомендованной конфигурации</li>
          <li>стол компьютерный</li>
          <li>стул</li>
          <li>FPV дрон</li>
          <li>аппаратура для управления</li>
        </ul>
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

      purchaseVisible: false,
      countVisible: false,
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

    shouldHidePackagesInfo() {
      return this.isMobile && (this.purchaseVisible || this.countVisible);
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
    padding: 40px;
    position: relative;

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

      .tablet-max({
        margin-left: 0;
      });

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

      .tablet-max({
        display: flex;
      });
    }
  }

  &__title-tooltip {
    cursor: pointer;
    margin-left: 20px;
  }

  &__title-tooltip-icon {
    .square(28px);
    background-image: url("@/assets/images/icons/tooltip-icon.svg");
    background-position: center;
    background-size: cover;
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
    z-index: @z-2;
    font-weight: 900;

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
        padding: 0 16px;
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
        flex-direction: column;
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

    i {
      border-bottom: 1px solid #fff;
      width: max-content;
      font-style: normal;
    }

    &:not(&:first-child) {
      margin-left: 20px;

      .mobile-max({
        margin-left: 0;
        margin-top: 10px;
      });
    }

    .tablet-max({
      width: 100%;
    });

    .mobile-max({
      font-size: 14px;
    });
  }

  &__packages-info {
    margin-top: 15px;
    height: 200px;
    width: 604px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding-left: 50px;

    .tablet-max({
      margin-top: 0;
      margin-bottom: 20px;
      width: 100%;
      height: 140px;
      padding-left: 48px;
    });

    h4 {
      font-size: 24px;
      color: #000;
      margin-left: -20px;
      text-transform: uppercase;
      font-weight: 900 !important;

      .tablet-max({
        font-size: 16px;
      });
    }

    ul {
      color: #000;
      font-size: 24px;
      list-style-type: disc;

      .tablet-max({
        font-size: 14px;
      });
    }

    &_desktop {
      .tablet-max({
        display: none;
      });
    }

    &_mobile {
      display: none;

      .tablet-max({
        display: flex;
        margin-top: 20px;
        margin-bottom: 0;
      });
    }
  }

  &__packages-sum {
    margin-top: auto;

    position: relative;
    z-index: @z-1;

    color: #fff;

    display: block;

    &_mobile {
      display: none;
    }

    .tablet-max({
      margin: 0;

      &_desktop {
        display: none;
      }

      &_mobile {
      display: block;
    }
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

  &__tooltip-data {
    background-color: @white;
    font-size: 24px;
    font-weight: 500;
    line-height: 135%;
    padding: 37px 20px 20px 50px;
    border-radius: 10px;
    position: absolute;
    z-index: @z-3;
    max-width: calc(50% - 54px);
    display: none;
    width: 100%;

    .tablet-max({
      max-width: calc(100% - 60px);
    });

    .mobile-max({
      font-size: 12px;
      max-width: calc(100% - 20px);
      padding: 28px 20px 28px 45px;
    });

    &_visible {
      display: block;
    }

    h4 {
      font-size: 24px;
      color: #000;
      margin-left: -20px;
      text-transform: uppercase;
      font-weight: 900 !important;

      .tablet-max({
        font-size: 16px;
      });
    }

    span {
      margin-left: -25px;
      display: block;
    }

    ul {
      list-style-type: disc;
    }
  }

  &__purchase-info {
    top: 240px;
    left: 40px;
    padding-bottom: 28px;

    .tablet-max({
      left: 30px;
      top: 200px;
      height: 280px;
      padding-top: 60px;
    });

    .mobile-max({
      left: 10px;
      top: 170px;
      height: unset;
      padding-top: 34px;
      font-size: 13px;
    });
  }

  &__count-info {
    top: 150px;
    right: 40px;
    height: 270px;

    .tablet-max({
      right: 30px;
      top: 245px;
      height: 248px;
      padding-top: 30px;
    });

    .mobile-max({
      right: 10px;
      top: 216px;
      height: unset;
      padding-top: 26px;
    });
  }
}
</style>
