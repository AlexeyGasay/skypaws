<template>
  <label
    :class="
      bem('ui-radio-button', {
        centered,
        checked: isChecked,
        disabled,
        reverse,
      })
    "
    tabindex="0"
    @keydown.enter="onChangeHandler(value)"
  >
    <input
      class="ui-radio-button__input"
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChangeHandler($event.target.value)"
    />

    <span
      :class="
        bem('ui-radio-button__mark', {
          checked: isChecked,
        })
      "
    />

    <span class="ui-radio-button__text">
      {{ text }}
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "UiRadioButton",

  model: {
    prop: "modelValue",
    event: "change",
  },

  props: {
    modelValue: { default: "" },

    name: {
      type: [String, Number],
      required: false,
      default: "",
    },

    value: {
      type: [Boolean, String, Number],
      required: false,
      default: "",
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    text: {
      type: String,
      required: false,
      default: "",
    },

    centered: {
      type: Boolean,
      required: false,
      default: true,
    },

    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: ["change"],

  data() {
    return {};
  },

  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },

  methods: {
    onChangeHandler(value) {
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="scss">
.ui-radio-button {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: background-color $transition-default;

  &:not(&_checked, &_disabled) {
    /* @include hover {
      .ui-radio-button {
        &__mark {
          background-color: rgba($black, 20%);
        }
      }
    } */
  }

  &_checked {
    .ui-radio-button {
      &__text {
        /*  @include button-m-d;

        @include tablet-max {
          @include button-m-m;
        } */
      }
    }
  }

  &_centered {
    align-items: center;
  }

  &_reverse {
    flex-direction: row-reverse;
    justify-content: space-between;

    .ui-radio-button {
      &__mark {
        margin: 0;
      }
    }
  }

  &_disabled {
    cursor: not-allowed;

    .ui-radio-button {
      &__mark {
        background-color: transparent;
        border: 1px solid rgba($black, 10%);

        &::after {
          background-color: rgba($black, 20%);
        }
      }
    }
  }

  &__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  &__mark {
    @include square(24px);
    position: relative;
    display: block;
    flex: none;
    margin-right: 12px;
    background-color: $white;
    border-radius: 100%;

    &::after {
      @include square(16px);
      position: absolute;
      top: 50%;
      left: 50%;
      background: linear-gradient(
        180deg,
        #03a7c8 0%,
        #732fff 70.28%,
        #ac1f51 140.57%
      );
      border-radius: 100%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity $transition-default;
      content: "";
    }

    &_checked {
      &::after {
        opacity: 1;
      }
    }
  }

  &__text {
    // @include text-s-d;
    user-select: none;

    /* @include tablet-max {
      @include button-m-m;
    } */
  }
}
</style>
