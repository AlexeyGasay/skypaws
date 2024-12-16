<template>
  <div class="ui-date-picker">
    <el-date-picker
      v-model="model"
      :class="bem('ui-date-picker__picker', { theme })"
      type="date"
      :placeholder="placeholder"
      format="dd-MM-yyyy"
      :disabled="disabled"
      :picker-options="datePickerOptions"
    />
  </div>
</template>

<script>
export default {
  name: "UiDatePicker",

  props: {
    date: {
      type: [String, Date],
      required: false,
      default: "",
    },

    placeholder: {
      type: String,
      required: false,
      default: "нажмите, чтобы выбрать дату",
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
    return {
      datePickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },
    };
  },

  computed: {
    model: {
      get() {
        return this.date;
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

<style lang="less">
.el-picker-panel__body {
  * {
    font-family: Nunito, sans-serif !important;
  }
}

.ui-date-picker {
  &__picker {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100% !important;
    border-radius: 10px;

    &_theme {
      &_white {
        background-color: @white;

        .el-input__inner {
          color: #535353;
        }
      }

      .hover({
        background-color: rgba(@black, 10%);
      });

      &_transparent {
        background: transparent;

        .el-input__inner {
          color: #c6c6c6;
        }
      }
    }

    .gradient-border-mask(
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
