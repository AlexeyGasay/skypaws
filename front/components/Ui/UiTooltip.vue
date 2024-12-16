<template>
  <div class="app-tooltip">
    <el-tooltip
      class="ui-tooltip__tooltip"
      effect="light"
      :placement="placement"
    >
      <template #content>
        <div class="ui-tooltip__tooltip-inner">
          <slot name="content" />
        </div>
      </template>

      <slot />
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "UiTooltip",

  props: {
    placement: {
      type: String,
      required: false,
      default: "bottom",
    },
  },
};
</script>

<style lang="less">
.ui-tooltip {
  &__tooltip-inner {
    position: relative;
    z-index: @z-overmodals;
    overflow: hidden;
  }
}

/* .el-tooltip__popper.is-light {
  padding: 0 !important;
  background-color: unset;
  border: unset !important;
} */

.el-tooltip__popper {
  z-index: @z-overmodals !important;

  /* .popper__arrow {
    @include square(12px);
    background-color: @white;
    border: unset !important;
    border-radius: 2px;
    transform: rotate(45deg);
  }

  .popper__arrow::after {
    display: none;
  }
   */
}
</style>
