<template>
  <Loading v-if="$apollo.loading" />
  <p v-else-if="!launch">Not found</p>
  <div v-else>
    <TheHeader :image="launch.mission.missionPatch">
      {{ launch.mission.name }}
    </TheHeader>
    <LaunchDetail :launch="launch" />
    <ActionButton :launch="launch" />
  </div>
</template>

<script>
import GetLaunchDetails from "@/graphql/GetLaunchDetails.graphql";
import Loading from "@/components/Loading";
import TheHeader from "@/components/TheHeader";
import LaunchDetail from "@/components/LaunchDetail";
import ActionButton from "@/components/ActionButton";

export default {
  name: "Launch",
  components: { ActionButton, LaunchDetail, TheHeader, Loading },
  data() {
    return {
      launch: null
    };
  },
  apollo: {
    launch: {
      query: GetLaunchDetails,
      variables() {
        return {
          launchId: this.$route.params.launchId
        };
      }
    }
  }
};
</script>
