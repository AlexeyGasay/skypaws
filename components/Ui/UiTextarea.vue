<template>
  <div class="ui-textarea">
    <label
      :class="
        bem('ui-textarea__label', {
          'focused-filled': isFocused || inputValue.length > 0,
          error: errorMessage.length > 0,
        })
      "
    >
      <span
        v-if="placeholder"
        :class="
          bem('ui-textarea__placeholder', {
            'focused-filled': isFocused || inputValue.length > 0,
          })
        "
      >
        {{ placeholder }}
      </span>

      <textarea
        v-model.trim="inputValue"
        :class="
          bem('ui-textarea__textarea', {
            error: errorMessage.length > 0,
            'have-suffix': suffixIconName.length > 0,
          })
        "
        @focus="isFocused = true"
        @blur="isFocused = false"
      />

      <span
        v-if="suffixIconName"
        :class="
          bem('ui-textarea__suffix', {
            error: errorMessage.length > 0,
          })
        "
      >
        <svg-icon :name="suffixIconName" />
      </span>
      <span class="ui-textarea__symbols-count">{{ symbolsCount }}</span>
    </label>

    <div
      v-if="adviceMessage || errorMessage"
      class="app-input__notifications"
    >
      <div class="app-input__notifications-advice">
        {{ adviceMessage }}
      </div>
      <div class="app-input__notifications-error">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiTextarea",

  props: {
    value: {
      type: String,
      required: false,
      default: "",
    },

    placeholder: {
      type: String,
      required: false,
      default: "",
    },

    suffixIconName: {
      type: String,
      required: false,
      default: "",
    },

    adviceMessage: {
      type: String,
      required: false,
      default: "",
    },

    errorMessage: {
      type: String,
      required: false,
      default: "",
    },

    maxSymbolsCount: {
      type: Number,
      required: false,
      default: 240,
    },
  },

  data() {
    return {
      isFocused: false,
      inputValue: this.value,
    };
  },

  computed: {
    symbolsCount() {
      return `${this.value.length} / ${this.maxSymbolsCount}`;
    },
  },

  watch: {
    inputValue() {
      if (this.inputValue.length < this.maxSymbolsCount) {
        this.$emit("input", this.inputValue);
      } else {
        this.inputValue = this.inputValue.slice(0, this.maxSymbolsCount);
        this.$emit("input", this.inputValue);
      }
    },
  },
};
</script>

<style lang="scss">
.ui-textarea {
  &__label {
    position: relative;
    display: block;
    width: 100%;
    height: 120px;
    padding: 16px 16px 24px;
    background-color: rgba($black, 5%);
    border-radius: 12px;
    transition: background-color $transition-default,
      box-shadow $transition-default;

    @include hover {
      background-color: rgba($black, 10%);
    }

    &_focused-filled {
      // @include shadow-s;
      background-color: $white;

      @include hover {
        background-color: $white;
      }
    }

    &_error {
      background-color: rgba($purple, 10%);
      box-shadow: unset;

      @include hover {
        background-color: rgba($purple, 20%);
      }
    }
  }

  &__placeholder {
    position: absolute;
    top: 16px;
    left: 16px;
    color: rgba($black, 60%);
    transition: $transition-default;

    &_focused-filled {
      // @include caption-xs-d;
      top: 6px;
      color: rgba($black, 40%);
      font-size: 10px;

      // @include tablet-max {
      //  @include caption-xs-m;
      // }
    }
  }

  &__textarea {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    resize: none;

    &_have-suffix {
      padding: 0 16px 0 0;
    }

    &_error {
      color: $purple;
    }
  }

  &__suffix {
    @include square(18px);
    position: absolute;
    top: 8px;
    right: 16px;
    display: block;

    &_error {
      color: rgba($purple, 60%);
    }
  }

  &__symbols-count {
    // @include caption-xs-d;
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: block;
    color: rgba($black, 20%);

    @include tablet-max {
      // @include caption-xs-m;
    }
  }

  &__notifications {
    padding: 0 16px;

    // @include caption-s-d;

    @include tablet-max {
      // @include caption-s-m;
    }
  }

  &__notifications-advice {
    margin-top: 8px;
    color: rgba($black, 60%);
  }

  &__notifications-error {
    margin-top: 8px;
    color: rgba($purple, 60%);
  }
}
</style>
