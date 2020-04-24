<template>
  <div class="launch-card card" :style="{ backgroundImage }">
    <h3>{{ rocketName }} ({{ rocketType }})</h3>
    <h5>{{ launch.site }}</h5>
  </div>
</template>

<script>
import galaxy from "@/assets/images/galaxy.jpg";
import iss from "@/assets/images/iss.jpg";
import moon from "@/assets/images/moon.jpg";

const backgrounds = [galaxy, iss, moon];

export default {
  name: "LaunchDetail",
  props: {
    launch: {
      type: Object,
      required: true
    }
  },
  computed: {
    backgroundImage() {
      return `url(${backgrounds[Number(this.launch.id) % backgrounds.length]})`;
    },
    rocketName() {
      return this.launch.rocket && this.launch.rocket.name;
    },
    rocketType() {
      return this.launch.rocket && this.launch.rocket.type;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.launch-card {
  height: 365px;
  margin-bottom: #{$unit * 4}px;
}
</style>
