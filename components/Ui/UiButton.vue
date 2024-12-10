<template>
  <component
    :is="bindIs.is"
    :disabled="pending || disabled"
    v-bind="bindIs"
    @keydown.enter="$emit('click')"
    @click="$emit('click')"
  >
    <div
      v-if="!pending"
      class="ui-button__holder"
    >
      <div
        v-if="$slots.prefix"
        class="ui-button__icon ui-button__icon_prefix"
      >
        <slot name="prefix" />
      </div>

      <div
        v-if="$slots.default"
        :class="
          bem('ui-button__text', {
            prefix: $slots.prefix !== undefined,
            suffix: $slots.suffix !== undefined,
          })
        "
      >
        <slot />
      </div>

      <div
        v-if="$slots.suffix"
        class="ui-button__icon ui-button__icon_suffix"
      >
        <slot name="suffix" />
      </div>
    </div>

    <svg-icon
      v-if="pending"
      name="loader-icon"
      class="ui-button__pending-icon"
    />
  </component>
</template>

<script>
import { bem, getSafeValue } from "@/tools";

export default {
  name: "UiButton",

  props: {
    pending: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * @values filled, outlined
     */
    type: {
      type: String,
      required: false,
      default: "outlined",
    },

    /**
     @values xl, l, m, s
     */
    size: {
      type: String,
      required: false,
      default: "m",
    },

    /**
     @values black, white
     */
    hoverTheme: {
      type: String,
      required: false,
      default: "white",
    },

    noHover: {
      type: Boolean,
      required: false,
      default: false,
    },

    to: {
      type: String,
      required: false,
      default: "",
    },

    href: {
      type: String,
      required: false,
      default: "",
    },

    target: {
      type: String,
      required: false,
      validator(value) {
        return value === "_blank" || value === "_self";
      },
    },
  },

  computed: {
    button() {
      return {
        classes: [
          bem("ui-button", {
            type: this.getSafeValue(this.buttonsTypes, this.type, "red"),
            size: this.getSafeValue(this.buttonsSizes, this.size, "xl"),
            noHover: this.noHover,
            hoverTheme: this.getSafeValue(
              this.buttonHoverThemes,
              this.hoverTheme,
              "white",
            ),
            pending: this.pending,
            disabled: this.disabled && !this.pending,
          }),
        ],
      };
    },

    buttonsTypes() {
      return ["filled", "outlined"];
    },

    buttonsSizes() {
      return ["xl", "l", "m", "s"];
    },

    buttonHoverThemes() {
      return ["white", "black"];
    },

    bindIs() {
      if (this.to) {
        return {
          is: "NuxtLink",
          to: this.to,
          class: this.button.classes,
          target: this.target,
        };
      }
      if (this.href) {
        return {
          is: "a",
          href: this.href,
          class: this.button.classes,
          target: this.target,
        };
      }

      return {
        is: "button",
        class: this.button.classes,
        tabindex: 0,
      };
    },
  },

  methods: {
    getSafeValue,
  },
};
</script>

<style lang="scss">
.ui-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  overflow: hidden;
  color: $white;
  font-weight: 900;
  font-family: Nunito, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  background: none;
  border: none;
  border-radius: 10px;
  transition: $transition-normal color, $transition-normal background-color;

  --hover-theme: #{$black};

  &_hover-theme {
    &_black {
      --hover-theme: #{$black};
    }

    &_white {
      --hover-theme: #{$white};
    }
  }

  &_type {
    &_filled {
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          #03a7c8 0%,
          #732fff 50%,
          #ac1f51 100%
        );
        border-radius: 10px;
        transition: $transition-normal ease-in-out;
        content: "";
      }

      @include hover {
        &:not(.ui-button_no-hover) {
          color: var(--hover-theme);

          &::after {
            transform: translateX(100%);
            transition: $transition-normal ease-in;
          }

          @include gradient-border-mask(
            2px,
            linear-gradient(90deg, #03a7c8 0%, #732fff 50%, #ac1f51 100%)
          );
        }
      }
    }

    &_outlined {
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          #03a7c8 0%,
          #732fff 50%,
          #ac1f51 100%
        );
        border-radius: 10px;
        transform: translateX(-100%);
        transition: $transition-normal;
        content: "";
      }

      @include gradient-border-mask(
        2px,
        linear-gradient(90deg, #03a7c8 0%, #732fff 50%, #ac1f51 100%)
      );

      @include hover {
        &:not(.ui-button_no-hover) {
          color: var(--hover-theme);

          &::after {
            transform: translateX(0);
            transition: $transition-normal ease-in;
          }
        }
      }
    }
  }

  &_size {
    &_s {
      height: 40px;
      padding: 10px 18px;
      font-size: 14px;
      line-height: 130%;
    }

    &_m {
      padding: 12px 22px;
      font-size: 24px;
      line-height: 135%;
    }

    &_l {
      padding: 24px 18px;
      font-size: 24px;
      line-height: 135%;
    }

    &_xl {
      padding: 8px 18px;
      font-size: 32px;
      line-height: 135%;

      @include tablet-max {
        font-size: 28px;
      }

      @include mobile-max {
        font-size: 14px;
      }
    }
  }

  &__holder {
    position: relative;
    z-index: $z-1;
    display: flex;
    align-items: center;
  }

  &__text {
    white-space: nowrap;

    &_prefix {
      margin-left: 8px;
    }

    &_suffix {
      margin-right: 8px;
    }
  }

  &__icon {
    @include square(24px);

    * {
      @include square(24px);
    }
  }

  &_pending {
    pointer-events: none;
  }

  &_disabled {
    color: rgba($black, 20%);
    background-color: rgba($black, 5%);
    border: none;
    pointer-events: none;
  }

  &__pending-icon {
    @include loader-animation;
    @include square(24px);
  }
}
</style>
