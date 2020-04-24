<template>
  <Loading v-if="$apollo.loading" />
  <div v-else>
    <TheHeader>My Cart</TheHeader>
    <p v-if="cartItems.length === 0">No items in your cart</p>
    <template v-else>
      <CartItem
        v-for="launchId in cartItems"
        :key="launchId"
        :launch-id="launchId"
      />
      <BookTrips :cart-items="cartItems || []" />
    </template>
  </div>
</template>

<script>
import GetCartItems from "@/graphql/GetCartItems.graphql";
import Loading from "@/components/Loading";
import TheHeader from "@/components/TheHeader";
import CartItem from "@/components/CartItem";
import BookTrips from "@/components/BookTrips";

export default {
  name: "Cart",
  components: { BookTrips, CartItem, TheHeader, Loading },
  data() {
    return {
      cartItems: []
    };
  },
  apollo: {
    cartItems: {
      query: GetCartItems
    }
  }
};
</script>
