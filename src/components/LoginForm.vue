<template>
  <div class="login-form" :style="{ backgroundImage: spaceBackground }">
    <header class="header">
      <Curve class="curve" />
      <Logo class="logo" />
    </header>
    <Rocket class="rocket" />
    <h1 class="heading">
      Space Explorer
    </h1>
    <form @submit.prevent="onSubmit" class="form">
      <input
        type="email"
        name="email"
        id="email"
        class="input"
        placeholder="Email"
        v-model="email"
      />
      <BaseButton type="submit">Log in</BaseButton>
    </form>
  </div>
</template>

<script>
import Logo from "@/assets/logo.svg";
import Curve from "@/assets/curve.svg";
import Rocket from "@/assets/rocket.svg";
import space from "@/assets/images/space.jpg";
import BaseButton from "@/components/BaseButton";

export default {
  name: "LoginForm",
  components: {
    BaseButton,
    Logo,
    Curve,
    Rocket
  },
  data() {
    return {
      email: ""
    };
  },
  computed: {
    spaceBackground() {
      return `url(${space})`;
    }
  },
  methods: {
    onSubmit() {
      this.$emit("login", this.email);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-bottom: #{$unit * 6}px;
  color: white;
  background-color: $color-primary;
  background-size: cover;
  background-position: center;
}

@mixin svg {
  display: block;
  fill: currentColor;
}

.header {
  @include svg();

  width: 100%;
  margin-bottom: #{$unit * 5}px;
  padding: #{$unit * 2.5}px;
  position: relative;
}

.logo {
  height: 56px;
  display: block;
  margin: 0 auto;
  position: relative;
}

.curve {
  height: 100%;
  fill: $color-primary;
  position: absolute;
  top: 0;
  left: 0;
}

.heading {
  margin: #{$unit * 3}px 0 #{$unit * 6}px;
}

.rocket {
  @include svg();

  width: 250px;
}

.form {
  width: 100%;
  max-width: 406px;
  padding: #{$unit * 3.5}px;
  border-radius: 3px;
  box-shadow: 6px 6px 1px rgba(0, 0, 0, 0.25);
  color: $color-text;
  background-color: white;
}

.input {
  width: 100%;
  margin-bottom: #{$unit * 2}px;
  padding: #{$unit * 1.25}px #{$unit * 2.5}px;
  border: 1px solid $color-grey;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: $color-primary;
  }
}
</style>
