<template>
  <Logo class="logo" />
</template>

<script>
import Logo from "@/assets/logo.svg";

export default {
  name: "Loading",
  components: { Logo }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.logo {
  height: 64px;
  display: block;
  margin: auto;
  fill: $color-grey;
  path {
    transform-origin: center;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
