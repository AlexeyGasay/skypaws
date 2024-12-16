<template>
  <component
    v-bind="bindIs"
    @keydown.enter="$emit('click')"
    @click="$emit('click')"
  >
    <div
      v-if="$slots.prefix || pending"
      :class="
        bem('ui-link__icon', {
          prefix: true,
          size: link.iconSize,
        })
      "
    >
      <slot
        v-if="$slots.prefix && !pending"
        name="prefix"
      />

      <svg-icon
        v-else
        name="loader-icon-mini"
        class="ui-link__pending-icon"
      />
    </div>

    <div class="ui-link__holder">
      <slot />
    </div>

    <div
      v-if="$slots.suffix"
      :class="
        bem('ui-link__icon', {
          suffix: true,
          size: link.iconSize,
        })
      "
    >
      <slot
        v-if="$slots.suffix && !pending"
        name="suffix"
      />

      <svg-icon
        v-else
        name="loader-icon-mini"
        class="ui-link__pending-icon"
      />
    </div>
  </component>
</template>

<script>
import { bem, getSafeValue } from "@/tools";

export default {
  name: "UiLink",

  props: {
    /**
     * @values purple, green, black, grey,
     * white, transparent
     */
    type: {
      type: String,
      required: false,
      default: "black",
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

    pending: {
      type: Boolean,
      required: false,
      default: false,
    },

    iconsSize: {
      type: String,
      required: false,
      default: "s",
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    underline: {
      type: Boolean,
      required: false,
      default: false,
    },

    target: {
      type: String,
      required: false,
      default: "_blank",
      validator(value) {
        return value === "_blank" || value === "_self";
      },
    },
  },

  emits: ["click"],

  computed: {
    bindIs() {
      if (this.to) {
        return {
          is: "NuxtLink",
          to: this.to,
          class: this.link.classes,
          target: this.target,
        };
      }
      if (this.href) {
        return {
          is: "a",
          href: this.href,
          class: this.link.classes,
          target: this.target,
        };
      }
      return {
        is: "div",
        class: this.link.classes,
        tabindex: 0,
      };
    },

    link() {
      return {
        classes: [
          bem("ui-link", {
            type: this.getSafeValue(this.linkTypes, this.type, "black"),
            pending: this.pending,
            disabled: this.disabled && !this.pending,
            underline: this.underline,
          }),
        ],

        underline: this.type !== "transparent" && this.underline,
        iconSize: this.getSafeValue(this.iconsSizes, this.iconsSize, "s"),
      };
    },

    linkTypes() {
      return ["black", "white", "purple", "green", "grey", "transparent"];
    },

    iconsSizes() {
      return ["s", "m"];
    },
  },

  methods: {
    getSafeValue,
  },
};
</script>

<style lang="less">
.ui-link {
  position: relative;
  display: flex;
  align-items: center;
  align-self: center;
  width: max-content;
  text-decoration: none;
  cursor: pointer;
  transition: 0.15s color, 0.15s opacity;

  &_type {
    &_black {
      color: @black;
    }

    &_white {
      color: @white;
    }

    &_purple {
      color: @purple;
    }

    &_green {
      color: @green;

      &:is(.ui-link_disabled) {
        color: rgba(@black, 20%);
      }
    }

    &_grey {
      color: rgba(@black, 40%);

      .hover({
        color: rgba(@black, 80%);
      });

      &:is(.ui-link_pending) {
        color: rgba(@black, 80%);
      }

      &:is(.ui-link_disabled) {
        color: rgba(@black, 20%);
      }
    }

    &_transparent {
      color: rgba(@black, 60%);
    }
  }

  &__icon {
    &_size {
      &_s {
        .square(16px);

        * {
          .square(16px);
        }
      }

      &_m {
        .square(24px);

        * {
          .square(24px);
        }
      }
    }

    &_prefix {
      margin-right: 4px;
    }

    &_suffix {
      margin-left: 4px;
    }
  }

  &_pending {
    pointer-events: none;
  }

  &__pending-icon {
    .loader-animation();
    .square(16px);

    * {
      .square(16px);
    }
  }
}
</style>
