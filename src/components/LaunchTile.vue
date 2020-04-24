<template>
  <router-link
    class="link card"
    :to="'/launch/' + launch.id"
    :style="{ backgroundImage }"
  >
    <h3>{{ missionName }}</h3>
    <h5>{{ rocketName }}</h5>
  </router-link>
</template>

<script>
import galaxy from "@/assets/images/galaxy.jpg";
import iss from "@/assets/images/iss.jpg";
import moon from "@/assets/images/moon.jpg";

const backgrounds = [galaxy, iss, moon];

export default {
  name: "LaunchTile",
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
    missionName() {
      return this.launch.mission ? this.launch.mission.name : "";
    },
    rocketName() {
      return this.launch.rocket ? this.launch.rocket.name : "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

$padding: $unit * 2;

.link {
  display: block;
  height: 193px;
  margin-top: #{$padding}px;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: #{$padding * 2}px;
  }
}
</style>
