<template>
  <div class="ui-input">
    <label
      :class="
        bem('ui-input__label', {
          'focused-filled': isFocused || isFilled,
          error: errorMessage.length > 0,
        })
      "
    >
      <span
        :class="
          bem('ui-input__placeholder', {
            filled: isFilled,
            focus: isFocused,
          })
        "
      >
        {{ placeholder }}
      </span>

      <input
        v-if="maskaInternal"
        :id="id"
        ref="input"
        :key="'1'"
        v-mask="maskaInternal"
        :class="
          bem('ui-input__input', {
            error: errorMessage.length > 0,
          })
        "
        :type="type !== 'number' ? type : 'text'"
        :value="inputValueFormatted"
        :inputmode="inputModeInternal"
        :autocomplete="autocomplete"
        :accept="accept"
        @input="onInput($event.target.value)"
        @keydown="onKeyDownInput"
        @keydown.enter="onKeyDownEnter"
        @focus="onFocus"
        @blur="onBlur"
        @paste="onPasteInput"
        @change="$emit('change-value', $event)"
      />

      <input
        v-else
        :id="id"
        ref="input"
        :key="'2'"
        :class="
          bem('ui-input__input', {
            error: errorMessage.length > 0,
          })
        "
        :type="type !== 'number' ? type : 'text'"
        :value="inputValueFormatted"
        :inputmode="inputModeInternal"
        :autocomplete="autocomplete"
        :accept="accept"
        @input="onInput($event.target.value)"
        @keydown="onKeyDownInput"
        @keydown.enter="onKeyDownEnter"
        @focus="onFocus"
        @blur="onBlur"
        @paste="onPasteInput"
        @change="$emit('change-value', $event)"
      />

      <span
        v-if="suffixIconName"
        :class="
          bem('ui-input__suffix', {
            error: errorMessage.length > 0,
          })
        "
        @click="$emit('suffix-icon-click')"
      >
        <svg-icon :name="suffixIconName" />
      </span>
    </label>

    <div
      v-if="adviceMessage || errorMessage"
      class="ui-input__notifications"
    >
      <div
        v-if="adviceMessage"
        class="ui-input__notifications-advice"
      >
        {{ adviceMessage }}
      </div>
      <div
        v-if="errorMessage"
        class="ui-input__notifications-error"
      >
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { isEmail } from "@/tools/validators";

export default {
  name: "UiInput",

  props: {
    /**
     * @values text, number, tel, email
     */
    type: {
      type: String,
      required: false,
      default: "text",
    },

    id: {
      type: String,
      required: false,
    },

    accept: {
      type: String,
      required: false,
    },

    isAuth: {
      type: Boolean,
      required: false,
      default: false,
    },

    placeholder: {
      type: String,
      required: false,
      default: "",
    },

    autocomplete: {
      type: String,
      required: false,
      default: "off",
    },

    value: {
      type: [String, Number, Object],
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

    inputMode: {
      type: String,
      required: false,
      default: "",
    },

    maska: {
      type: String,
      required: false,
      default: "",
    },
  },

  emits: [
    "input",
    "keydown",
    "suffix-icon-click",
    "blur",
    "focus",
    "keydown-enter",
    "change-value",
  ],

  data() {
    return {
      isFocused: false,
      inputValueFormatted: this.value,
      maskaInternal: this.maska,
    };
  },

  computed: {
    ...mapGetters({
      isDesktop: "mqHelper/isDesktop",
    }),

    isFilled() {
      return this.value.length > 0 || this.value > 0;
    },

    inputModeInternal() {
      if (this.inputMode) return this.inputMode;

      if (this.type === "file") {
        return "file";
      }
      if (this.type === "number") {
        return "numeric";
      }
      if (this.type === "tel") {
        return "tel";
      }
      if (this.type === "email") {
        return "email";
      }
      return "text";
    },
  },

  watch: {
    value: {
      handler() {
        if (this.type === "number") {
          this.inputValueFormatted = this.formatNumberWithSpaces(this.value);
        } else {
          this.inputValueFormatted = this.value;
        }

        if (this.maska) this.maskaInternal = this.maska;
        else if (this.type === "tel") {
          this.maskaInternal = "+7 (###) ###-##-##";
        } else this.maskaInternal = "";
      },

      immediate: true,
    },

    type() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
  },

  mounted() {
    this.onInput(this.value);
  },

  methods: {
    onPasteInput(event) {
      if (this.type === "text") return;

      const pastedValue = this.formatPhone(event.clipboardData.getData("text"));

      if (pastedValue.length === 10) {
        this.$emit("input", pastedValue);
      }
    },

    formatPhone(value) {
      const digits = value.replace(/\D/g, "");

      if (digits.length >= 11) {
        return digits.slice(1, 11);
      }

      return digits;
    },

    formatNumberWithSpaces(value) {
      const parts = value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

      if (parts.length > 1) {
        parts[1] = parts[1].slice(0, 2);
      }

      if (parts.join(".") === "0") {
        return "";
      }

      return parts.join(".");
    },

    onInput(value) {
      if (this.isAuth && isEmail(value)) {
        this.$emit("input", value);
        return;
      }

      if (this.type === "number") {
        const number = value.replace(/[^\d.]/g, "").replace(/\.(?=.*\.)/g, "");
        this.$emit("input", +number || "");
      } else if (this.type === "tel" && value === "8") {
        this.$emit("input", " ");
      } else if (
        this.type === "tel" &&
        value.replace(/\D/g, "").length === 11
      ) {
        this.$emit("input", `7${value.replace(/\D/g, "").slice(1, 11)}`);
      } else if (this.type === "tel") {
        this.$emit("input", value.replace(/\D/g, ""));
      } else this.$emit("input", value);
    },

    onKeyDownInput(e) {
      this.$emit("keydown", e);
    },

    onKeyDownEnter() {
      this.$emit("keydown-enter");
    },

    onFocus() {
      this.isFocused = true;
      this.$emit("focus");
    },

    onBlur() {
      this.isFocused = false;
      this.$emit("blur");
    },
  },
};
</script>

<style lang="scss">
.ui-input {
  &__label {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    background-color: $white;
    border-radius: 10px;

    @include gradient-border-mask(
      1px,
      linear-gradient(90deg, #03a7c8 0%, #732fff 50%, #ac1f51 100%)
    );

    @include hover {
      background-color: rgba($black, 10%);
    }

    &_focused-filled {
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

  &__input {
    width: 100%;
    height: 40px;
    padding: 12px 10px;
    font-size: 16px;
    background: transparent;
    border: none;
    outline: none;

    &_error {
      color: $purple;
    }
  }

  &__input-hidden {
    opacity: 0;
  }

  &__placeholder {
    position: absolute;
    top: 50%;
    left: 10px;
    display: block;
    color: #535353;
    transform: translateY(-50%);
    transition: $transition-default;

    &_focus {
      opacity: 1;
    }

    &_filled {
      color: rgba($black, 40%);
      opacity: 0;
    }
  }

  &__suffix {
    @include square(18px);
    display: block;
    margin-right: 16px;

    &_error {
      color: rgba($purple, 60%);
    }
  }

  &__notifications {
    padding: 0 16px;
  }

  &__notifications-advice {
    margin-top: 8px;
    color: rgba($black, 60%);
  }

  &__notifications-error {
    margin-top: 8px;
    color: rgba($purple, 60%);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }
}
</style>
