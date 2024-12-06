<template>
  <div class="ui-time-picker">
    <el-time-picker
      ref="timepicker"
      v-model="model"
      class="ui-time-picker__picker"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      format="HH-mm"
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
      default: "Выберите время",
    },

    time: {
      type: String,
      required: false,
      default: "",
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
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
.ui-time-picker {
  &__picker {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100% !important;
    background-color: $white;
    border-radius: 10px;

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
