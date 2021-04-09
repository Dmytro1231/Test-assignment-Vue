<template>
  <span :class="color" @click="$emit('action')">
    <slot />
  </span>
</template>

<script>
export default {
  emits: ["action"],
  props: {
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.primary {
  color: #3db565;
}
span {
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.8px;
}
span:not(:last-child) {
  margin-right: 21px;
}
</style>