<template>
  <p v-if="result && !result.success">{{ result.message }}</p>
  <BaseButton v-else @click="bookTrips">
    Book All
  </BaseButton>
</template>

<script>
import BookTrips from "@/graphql/BookTrips.graphql";
import GetLaunch from "@/graphql/GetLaunch.graphql";
import BaseButton from "@/components/BaseButton";

export default {
  name: "BookTrips",
  components: { BaseButton },
  props: {
    cartItems: Array
  },
  data() {
    return {
      result: null
    };
  },
  methods: {
    async bookTrips() {
      const { data } = await this.$apollo.mutate({
        mutation: BookTrips,
        variables: { launchIds: this.cartItems },
        refetchQueries: this.cartItems.map(launchId => ({
          query: GetLaunch,
          variables: { launchId }
        })),
        update(cache) {
          cache.writeData({ data: { cartItems: [] } });
        }
      });
      this.result = data && data.bookTrips;
    }
  }
};
</script>
