<template>
  <div class="ui-time-picker">
    <el-time-picker
      ref="timepicker"
      v-model="model"
      :class="bem('ui-time-picker__picker', { theme })"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      format="HH:mm"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "UiTimePicker",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "нажмите, чтобы выбрать время",
    },

    time: {
      type: [String, Date],
      required: false,
      default: "",
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    theme: {
      type: String,
      required: false,
      default: "transparent",
    },
  },

  data() {
    return {};
  },

  computed: {
    model: {
      get() {
        return this.time;
      },

      set(value) {
        if (!this.disabled) {
          this.$emit("input", value);
        }
      },
    },
  },
};
</script>

<style lang="scss">
.el-time-panel,
.el-picker-panel {
  z-index: 20000 !important;

  * {
    font-family: Nunito, sans-serif !important;
  }
}

.ui-time-picker {
  &__picker {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100% !important;
    background-color: $white;
    border-radius: 10px;

    &_theme {
      &_white {
        background-color: $white;

        .el-input__inner {
          color: #535353;
        }
      }

      @include hover {
        background-color: rgba($black, 10%);
      }

      &_transparent {
        background: transparent;

        .el-input__inner {
          color: #c6c6c6;
        }
      }
    }

    @include gradient-border-mask(
      1px,
      linear-gradient(90deg, #03a7c8 0%, #732fff 50%, #ac1f51 100%)
    );

    .el-input__inner {
      width: 100%;
      height: 40px;
      padding: 12px 10px;
      font-size: 16px;
      background: transparent;
      border: none;
      outline: none;

      ::placeholder {
        color: #535353;
      }
    }
  }
}
</style>
