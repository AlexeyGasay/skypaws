<template>
  <div class="ui-input-range">
    <el-slider
      v-model="model"
      class="ui-input-range__slider"
      :step="steps"
      :min="min"
      :max="max"
      :marks="marks"
      :show-tooltip="false"
    />
  </div>
</template>

<script>
export default {
  name: "UiInputRange",

  props: {
    // Длина каждого шага
    steps: {
      type: Number,
      required: false,
      default: 5,
    },

    step: {
      type: Number,
      required: false,
      default: 0,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    min: {
      type: Number,
      required: false,
      default: 0,
    },

    max: {
      type: Number,
      required: false,
      default: 100,
    },
  },

  computed: {
    model: {
      get() {
        return this.step;
      },

      set(value) {
        if (!this.disabled) {
          this.$emit("input", value);
        }
      },
    },

    marks() {
      const list = {};

      for (let i = this.min; i <= this.max; i++) {
        list[String(i)] = String(i);
      }

      return list;
    },
  },
};
</script>

<style lang="less">
.ui-input-range {
  .el-slider {
    &__bar {
      background: transparent;
    }

    &__runway {
      background: linear-gradient(90deg, #03a7c8 0%, #732fff 50%, #ac1f51 100%);
    }

    &__marks-stop {
      display: none;
    }

    &__marks-text {
      color: @white;
    }

    &__button-wrapper {
      z-index: @z-2;
    }

    &__button {
      .square(24px);
      background: linear-gradient(
        180deg,
        #03a7c8 0%,
        #732fff 70.28%,
        #ac1f51 140.57%
      );
      border: none;
    }
  }
}
</style>
