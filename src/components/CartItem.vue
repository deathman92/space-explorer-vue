<template>
  <p v-if="$apollo.loading">Loading...</p>
  <p v-else-if="!launch">Not found</p>
  <LaunchTile v-else :launch="launch" />
</template>

<script>
import GetLaunch from "@/graphql/GetLaunch.graphql";
import LaunchTile from "@/components/LaunchTile";

export default {
  name: "CartItem",
  components: { LaunchTile },
  props: {
    launchId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      launch: null
    };
  },
  apollo: {
    launch: {
      query: GetLaunch,
      variables() {
        return {
          launchId: this.launchId
        };
      }
    }
  }
};
</script>
