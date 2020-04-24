<template>
  <p v-if="$apollo.loading">Loading...</p>
  <div v-else>
    <BaseButton @click="mutate">
      {{
        launch.isBooked
          ? "Cancel This Trip"
          : launch.isInCart
          ? "Remove from Cart"
          : "Add to Cart"
      }}
    </BaseButton>
  </div>
</template>

<script>
import ToggleCart from "@/graphql/ToggleCart.graphql";
import CancelTrip from "@/graphql/CancelTrip.graphql";
import GetLaunchDetails from "@/graphql/GetLaunchDetails.graphql";
import BaseButton from "@/components/BaseButton";

export default {
  name: "ActionButton",
  components: { BaseButton },
  props: {
    launch: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async mutate() {
      this.loading = true;
      await this.$apollo.mutate({
        mutation: this.launch.isBooked ? CancelTrip : ToggleCart,
        variables: { launchId: this.launch.id },
        refetchQueries: [
          {
            query: GetLaunchDetails,
            variables: { launchId: this.launch.id }
          }
        ]
      });
      this.loading = false;
    }
  }
};
</script>
