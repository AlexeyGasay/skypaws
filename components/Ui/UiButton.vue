<template>
  <component
    :is="bindIs.is"
    :disabled="pending || disabled"
    v-bind="bindIs"
    @keydown.enter="$emit('click')"
    @click="$emit('click')"
  >
    <div
      v-if="haveNotification"
      class="ui-button__notification-dot"
      :style="`--color: ${notificationColor}`"
    />
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
    haveNotification: {
      type: Boolean,
      required: false,
      default: false,
    },

    notificationColor: {
      type: String,
      required: false,
      default: "#e31e24",
    },

    htmlType: {
      type: String,
      required: false,
      default: "button",
    },

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
     * @values red, purple, green, black, transparent-black,
     * transparent-white, white
     */
    type: {
      type: String,
      required: false,
      default: "red",
    },

    /**
     @values xl, l, m, s
     */
    size: {
      type: String,
      required: false,
      default: "xl",
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
            pending: this.pending,
            disabled: this.disabled && !this.pending,
          }),
        ],
      };
    },

    buttonsTypes() {
      return [
        "red",
        "purple",
        "green",
        "black",
        "transparent-black",
        "transparent-white",
        "white",
        "social",
      ];
    },

    buttonsSizes() {
      return ["xl", "l", "m", "s", "default"];
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
  text-decoration: none;
  background: none;
  border: none;
  border-radius: 12px;
  transition: $transition-normal color, $transition-normal background-color;

  &__notification-dot {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 6px;
    height: 6px;
    background-color: var(--color);
    border-radius: 100%;
  }

  &_type {
  }

  &__holder {
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
