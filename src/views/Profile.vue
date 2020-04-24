<template>
  <Loading v-if="$apollo.loading" />
  <div v-else>
    <TheHeader>My Trips</TheHeader>
    <template v-if="trips && trips.length !== 0">
      <LaunchTile v-for="launch in trips" :key="launch.id" :launch="launch" />
    </template>
    <p v-else>You haven't booked any trips</p>
  </div>
</template>

<script>
import GetMyTrips from "@/graphql/GetMyTrips.graphql";
import Loading from "@/components/Loading";
import TheHeader from "@/components/TheHeader";
import LaunchTile from "@/components/LaunchTile";

export default {
  name: "Profile",
  components: { LaunchTile, TheHeader, Loading },
  data() {
    return {
      trips: []
    };
  },
  apollo: {
    trips: {
      query: GetMyTrips,
      update: data => data.me.trips
    }
  }
};
</script>
