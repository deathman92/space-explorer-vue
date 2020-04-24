<template>
  <router-link class="menu-item" :to="to" v-if="to">
    <slot />
  </router-link>
  <button class="menu-item" v-else @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    to: [String, Object]
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.menu-item {
  flex-grow: 1;
  width: 0;
  font-family: inherit;
  font-size: 20px;
  color: inherit;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;

  ::v-deep svg {
    display: block;
    width: 60px;
    margin: 0 auto #{$unit}px;
    fill: $color-secondary;
  }
}
</style>
