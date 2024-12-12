<template>
  <div class="the-calc-form">
    <div class="the-calc-form__inner">
      <div class="the-calc-form__col">
        <div class="the-calc-form__title">
          способ приобретения оборудования
          <div class="the-calc-form__title-tooltip">
            <ui-tooltip>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, temporibus.
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
            @click="methodOfPurchasing = PURCHASING_METHODS.RENT"
          >
            аренда оборудования под выкуп
          </ui-button>

          <ui-button
            type="filled"
            :size="isMobile ? 's' : 'm'"
            :type="isPurchase ? 'filled' : 'outlined'"
            class="the-calc-form__handlers-button"
            no-hover
            @click="methodOfPurchasing = PURCHASING_METHODS.PURCHASE"
          >
            выкуп оборудования
          </ui-button>
        </div>

        <div class="the-calc-form__title the-calc-form__title_mobile">
          количество рабочих мест для студентов
          <div class="the-calc-form__title-tooltip">
            <ui-tooltip>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, temporibus.
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
              :value="PACKAGES.PRO"
            >
              PREMIUM пакет услуг
            </ui-radio-button>
          </div>

          <div class="the-calc-form__packages-list-item">
            <ui-radio-button
              v-model="selectedPackage"
              :value="PACKAGES.BASE"
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
          </div>

          <div class="the-calc-form__form-item">
            <div class="the-calc-form__form-item-name">Дата встречи</div>

            <ui-date-picker class="the-calc-form__form-item-input" />
          </div>

          <div class="the-calc-form__form-item">
            <div class="the-calc-form__form-item-name">Время встречи</div>

            <ui-time-picker
              v-model="time"
              class="the-calc-form__form-item-input"
              :time="time"
            />
          </div>
        </div>
      </div>

      <div class="the-calc-form__col">
        <div class="the-calc-form__title the-calc-form__title_desktop">
          количество рабочих мест для студентов
          <div class="the-calc-form__title-tooltip">
            <ui-tooltip>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, temporibus.
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
                :value="PACKAGES.PRO"
              >
                PREMIUM пакет услуг
              </ui-radio-button>
            </div>

            <div class="the-calc-form__packages-list-item">
              <ui-radio-button
                v-model="selectedPackage"
                :value="PACKAGES.BASE"
              >
                базовый пакет услуг
              </ui-radio-button>
            </div>
          </div>

          <div class="the-calc-form__packages-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex,
            fuga iusto nesciunt totam voluptas. Dolorum, inventore, minus!
            Molestiae, neque.
          </div>

          <div class="the-calc-form__packages-sum">
            <div class="the-calc-form__packages-sum-cross">
              старт от
              <span class="the-calc-form__packages-sum-cross-price">
                {{ priceFormatting(sum / 0.7) }} &#8381;
              </span>
            </div>

            <div class="the-calc-form__packages-sum-real">
              {{ sum | formatNumber }} &#8381;
            </div>

            <div
              v-if="methodOfPurchasing === PURCHASING_METHODS.PURCHASE"
              class="the-calc-form__packages-sum-equipment-purchase"
            >
              + стоимость оборудования ≈
              {{ (count * studentPrice) | formatNumber }} &#8381;
            </div>
          </div>

          <ui-button
            class="the-calc-form__packages-button"
            :size="isDesktop ? 's' : 'm'"
            type="filled"
          >
            узнать точную стоимость
          </ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiTooltip from "@/components/Ui/UiTooltip.vue";
import UiTimePicker from "@/components/Ui/UiTimePicker.vue";
import UiDatePicker from "@/components/Ui/UiDatePicker.vue";
import UiInputRange from "@/components/Ui/UiInputRange.vue";
import UiRadioButton from "@/components/Ui/UiRadioButton.vue";
import { priceFormatting } from "@/tools";
import { mapGetters } from "vuex";

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
        RENT: "RENT",
        PURCHASE: "PURCHASE",
      },

      selectedPackage: "BASE",
      PACKAGES: {
        PRO: "PRO",
        BASE: "BASE",
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
        this.selectedPackage === this.PACKAGES.BASE ? 199000 : 599000;

      if (this.methodOfPurchasing === this.PURCHASING_METHODS.RENT) {
        return this.count * this.studentPrice + rentSuffix;
      }

      return this.selectedPackage === this.PACKAGES.BASE ? 599000 : 999000;
    },

    isRent() {
      return this.methodOfPurchasing === this.PURCHASING_METHODS.RENT;
    },

    isPurchase() {
      return this.methodOfPurchasing === this.PURCHASING_METHODS.PURCHASE;
    },
  },

  methods: { priceFormatting },
};
</script>

<style lang="scss">
.the-calc-form {
  &__inner {
    display: flex;
    align-items: stretch;
    padding: 40px;

    @include tablet-max {
      flex-direction: column;
      align-items: center;
      padding: 10px 30px 30px;
    }

    @include mobile-max {
      padding: 10px;
    }
  }

  &__col {
    width: 50%;

    @include tablet-max {
      width: 100%;
    }

    &:not(&:first-child) {
      margin-left: 30px;

      @include mobile-max {
        margin: 0 0 10px;
      }
    }

    @include mobile-max {
      font-size: 14px;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    color: $white;
    font-weight: 900;
    font-size: 20px;
    line-height: 130%;
    text-transform: uppercase;

    @include mobile-max {
      font-size: 14px;
    }

    &_desktop {
      @include tablet-max {
        display: none;
      }
    }

    &_mobile {
      display: none;

      @include tablet-max {
        display: flex;
      }
    }
  }

  &__title-tooltip {
    margin-left: 20px;
  }

  &__title-tooltip-icon {
    @include square(28px);
  }

  &__handlers {
    margin-top: 30px;

    @include tablet-max {
      margin: 20px 0;
    }
  }

  &__handlers-button {
    width: 100% !important;

    &:not(&:first-child) {
      margin-top: 30px;

      @include tablet-max {
        margin-top: 20px;
      }

      @include mobile-max {
        margin-top: 10px;
      }
    }
  }

  &__form {
    margin-top: 20px;
  }

  &__form-item {
    &:not(&:first-child) {
      margin-top: 20px;

      @include mobile-max {
        margin-top: 10px;
      }
    }
  }

  &__form-item-name {
    color: $white;
    font-weight: 900;
    font-size: 20px;
    line-height: 130%;
    text-transform: uppercase;

    @include mobile-max {
      font-size: 13px;
    }
  }

  &__form-item-input {
    margin-top: 20px;

    @include mobile-max {
      margin-top: 10px;
    }

    input {
      height: 60px !important;
      color: #c6c6c6;

      @include mobile-max {
        height: 35px !important;
      }
    }
  }

  &__slider {
    margin-top: 30px;

    @include tablet-max {
      display: none;
    }

    &_mobile {
      display: none;

      @include tablet-max {
        display: block;
        padding: 0 8px;
      }
    }
  }

  &__packages {
    margin-top: 40px;
    color: $white;

    @include tablet-max {
      margin-top: 20px;
    }
  }

  &__packages-list {
    display: flex;
    align-items: center;
    color: $white;

    @include tablet-max {
      display: none;
    }

    &_mobile {
      display: none;

      @include tablet-max {
        display: flex;
        margin-top: 20px;
      }

      @include mobile-max {
        flex-direction: column-reverse;
        align-items: flex-start;
        width: 100%;
      }
    }
  }

  &__packages-list-item {
    font-weight: 900;
    font-size: 20px;
    line-height: 170%;
    text-transform: uppercase;

    &:not(&:first-child) {
      margin-left: 30px;

      @include tablet-max {
        margin: 20px 0 0;
      }
    }

    @include tablet-max {
      width: 100%;
    }
  }

  &__packages-info {
    margin-top: 30px;

    @include tablet-max {
      display: none;
    }
  }

  &__packages-sum {
    margin-top: 30px;

    @include tablet-max {
      margin: 0;
    }
  }

  &__packages-sum-cross {
    font-weight: 500;
    font-size: 48px;
    line-height: 130%;

    @include tablet-max {
      font-size: 40px;
    }

    @include mobile-max {
      font-size: 30px;
    }
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

    @include tablet-max {
      font-size: 85px;
    }

    @include mobile-max {
      font-size: 48px;
    }
  }

  &__packages-button {
    margin-top: 25px;

    @include tablet-max {
      width: 100% !important;
      margin-top: 20px;
    }
  }
}
</style>
