<template>
  <Loading v-if="$apollo.loading" />
  <div v-else>
    <TheHeader />
    <template v-if="launches">
      <LaunchTile
        v-for="launch in launches.launches"
        :key="launch.id"
        :launch="launch"
      />
      <BaseButton v-if="launches.hasMore" @click="fetchMore">
        Load More
      </BaseButton>
    </template>
  </div>
</template>

<script>
import GetLaunches from "@/graphql/GetLaunches.graphql";
import TheHeader from "@/components/TheHeader";
import LaunchTile from "@/components/LaunchTile";
import BaseButton from "@/components/BaseButton";
import Loading from "@/components/Loading";

export default {
  name: "Launches",
  components: { Loading, BaseButton, LaunchTile, TheHeader },
  data() {
    return {
      launches: null
    };
  },
  apollo: {
    launches: {
      query: GetLaunches
    }
  },
  methods: {
    fetchMore() {
      this.$apollo.queries.launches.fetchMore({
        variables: {
          after: this.launches.cursor
        },
        // eslint-disable-next-line no-unused-vars
        updateQuery(prev, { fetchMoreResult, ...rest }) {
          if (!fetchMoreResult) return prev;
          return {
            ...fetchMoreResult,
            launches: {
              ...fetchMoreResult.launches,
              launches: [
                ...prev.launches.launches,
                ...fetchMoreResult.launches.launches
              ]
            }
          };
        }
      });
    }
  }
};
</script>
