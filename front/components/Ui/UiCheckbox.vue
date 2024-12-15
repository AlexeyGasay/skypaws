<template>
  <div
    :class="bem('ui-checkbox', { isChecked, disabled, reverse })"
    tabindex="0"
    @click="clickHandler"
    @keydown.enter="clickHandler"
  >
    <label class="ui-checkbox__label">
      <span class="ui-checkbox__label-checkbox">
        <span
          v-if="isChecked"
          class="ui-checkbox__label-checkbox-icon"
        >
          <svg-icon name="check-icon" />
        </span>
      </span>

      <span
        v-if="text.length || $slots.default"
        class="ui-checkbox__label-text"
      >
        <slot />

        <span
          v-if="!$slots.default"
          v-html="text"
        />

        <span
          v-if="count"
          class="ui-checkbox__label-text-count"
        >
          {{ count }}
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "UiCheckbox",

  props: {
    text: {
      type: String,
      required: false,
      default: "",
    },

    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },

    checked: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  emits: ["input"],

  data() {
    return {};
  },

  computed: {
    isChecked: {
      get() {
        return this.checked;
      },

      set(value) {
        if (!this.disabled) {
          this.$emit("input", value);
        }
      },
    },
  },

  methods: {
    clickHandler() {
      if (!this.disabled) {
        this.isChecked = !this.isChecked;
      }
    },
  },
};
</script>

<style lang="scss">
.ui-checkbox {
  position: relative;
  display: block;
  flex-shrink: 0;

  &:not(&_is-checked, &_disabled) {
    @include hover {
      .ui-checkbox {
        &__label-checkbox {
          background-color: rgba($black, 10%);
        }
      }
    }
  }

  &_is-checked {
    .ui-checkbox {
      &__label-checkbox {
        background-color: $black;
      }

      &__label-checkbox-icon {
        color: $white;
      }

      &__label-text {
        // @include button-m-d;

        @include tablet-max {
          // @include button-m-m;
        }
      }
    }
  }

  &_disabled {
    .ui-checkbox {
      &__label {
        cursor: not-allowed;
      }

      &__label-checkbox {
        background-color: rgba($black, 20%);
      }

      &__label-checkbox-icon {
        color: rgb($black, 20%);
      }
    }
  }

  &_reverse {
    .ui-checkbox {
      &__label {
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
      }

      &__label-text {
        margin: 0 12px 0 0;
      }
    }
  }

  &__label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__label-input-hidden {
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    visibility: hidden;
  }

  &__label-checkbox {
    @include square(20px);
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 2px;
    background-color: transparent;
    border: 1px solid rgb($black, 10%);
    border-radius: 6px;
    transition: background-color $transition-default;
  }

  &__label-checkbox-icon {
    display: block;
    flex-shrink: 0;

    @include square(16px);
  }

  &__label-text {
    position: relative;
    margin-left: 12px;
    user-select: none;
  }

  &__label-text-count {
    position: absolute;
    top: 0;
    right: 0;
    color: rgba($black, 30%);
    transform: translate(110%, -50%);
  }
}
</style>
