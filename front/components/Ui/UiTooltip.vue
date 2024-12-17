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

.el-tooltip__popper {
  z-index: @z-overmodals !important;
}
</style>
