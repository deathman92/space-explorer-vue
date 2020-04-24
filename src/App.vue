<template>
  <div id="app">
    <template v-if="isLoggedIn">
      <div class="bar"></div>
      <div class="container">
        <router-view />
      </div>
      <TheFooter />
    </template>
    <Login v-else />
  </div>
</template>

<script>
import IsLoggedIn from "@/graphql/IsLoggedIn.graphql";
import TheFooter from "@/components/TheFooter";
import Login from "@/views/Login";

export default {
  components: { Login, TheFooter },
  data() {
    return {
      isLoggedIn: false
    };
  },
  apollo: {
    isLoggedIn: {
      query: IsLoggedIn
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/variables";

.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: #{$unit * 3}px;
  padding-bottom: #{$unit * 5}px;
}

.bar {
  flex-shrink: 0;
  height: 12px;
  background-color: $color-primary;
}
</style>
