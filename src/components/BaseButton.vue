<template>
  <button class="button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton"
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

$height: 50;
.button {
  display: block;
  min-width: 200px;
  height: #{$height}px;
  margin: 0 auto;
  padding: 0 #{$unit * 4}px;
  border: none;
  border-radius: #{$height / 2}px;
  font-family: inherit;
  font-size: 18px;
  line-height: #{$height}px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  background-color: $color-accent;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: lighten($color-accent, 10%);
  }
  &:active {
    background-color: lighten($color-accent, 20%);
  }
}
</style>
